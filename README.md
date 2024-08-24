[reference](https://plainenglish.io/community/next-js-app-router-graphql-codegen-and-tanstack-query#client-component-fetching)

## Install

```
npx create-next-app@latest

pnpm add graphql @tanstack/react-query

pnpm add -D @graphql-codegen/cli @graphql-codegen/typescript-operations @graphql-codegen/typescript-react-query @graphql-codegen/add

```

### Script

```
"scripts": {
    ...
    "codegen": "graphql-codegen --config codegen.ts"
  },
```
