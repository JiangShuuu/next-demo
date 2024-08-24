// https://plainenglish.io/community/next-js-app-router-graphql-codegen-and-tanstack-query#client-component-fetching

require('dotenv').config()
import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: {
    [process.env.NEXT_PUBLIC_PAYLOAD_API_URL as string]: {
      headers: {
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_PAYLOAD_API_TOKEN}`,
      },
    },
  },
  documents: './graphql/**/*.graphql',
  generates: {
    './graphql/generated/client.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-query'],
      config: {
        reactQueryVersion: 5,
        exposeQueryKeys: true,
        exposeFetcher: true,
        withHooks: true,
        dedupeFragments: true,
        fetcher: '@/graphql/lib/fetcher#fetcher',
      },
    },
  },
}

export default config