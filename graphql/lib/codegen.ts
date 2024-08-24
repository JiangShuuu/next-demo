// https://plainenglish.io/community/next-js-app-router-graphql-codegen-and-tanstack-query#client-component-fetching

require('dotenv').config()
import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  generates: {
    './graphql/generated/first-endpoint.ts': {
      schema: {
        [process.env.NEXT_PUBLIC_PAYLOAD_API_URL as string]: {
          headers: {
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_PAYLOAD_API_TOKEN}`,
          },
        },
      },
      plugins: ['typescript', 'typescript-operations', 'typescript-react-query'],
      documents: './graphql/first-endpoint/*.graphql',
      config: {
        reactQueryVersion: 5,
        exposeQueryKeys: true,
        exposeFetcher: true,
        withHooks: true,
        dedupeFragments: true,
        fetcher: '@/graphql/lib/fetcher#fetcher',
      },
    },
    './graphql/generated/second-endpoint.ts': {
      schema: process.env.NEXT_PUBLIC_PAYLOAD_API_URL_2,
      plugins: ['typescript', 'typescript-operations', 'typescript-react-query'],
      documents: './graphql/second-endpoint/*.graphql',
      config: {
        reactQueryVersion: 5,
        exposeQueryKeys: true,
        exposeFetcher: true,
        withHooks: true,
        dedupeFragments: true,
        fetcher: '@/graphql/lib/fetcher_2#fetcher',
      },
    },
  },
}

export default config