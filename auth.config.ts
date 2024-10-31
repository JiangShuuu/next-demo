import { NextAuthConfig } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

import { LoginSchema } from '@/schemas'
import { getUserByEmail } from '@/data/user'
import { compare } from 'bcryptjs'

export default {
  providers: [
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
} satisfies NextAuthConfig
