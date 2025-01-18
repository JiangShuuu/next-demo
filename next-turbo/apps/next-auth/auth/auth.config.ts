import { NextAuthConfig } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import Google from 'next-auth/providers/google'
import GitHub from 'next-auth/providers/github'

import { LoginSchema } from '@/schemas'
import { getUserByEmail } from '@/data/user'
import { compare } from 'bcryptjs'

export default {
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
    Credentials({
      async authorize(credentials) {
        const validationFields = LoginSchema.safeParse(credentials)

        if (validationFields.success) {
          const { email, password } = validationFields.data

          const user = await getUserByEmail(email)

          if (!user || !user.password) return null

          const passwordsMatch = await compare(password, user.password)

          if (passwordsMatch) return user
        }

        return null
      }
    })
  ],
} as NextAuthConfig
