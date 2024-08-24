// https://tanstack.com/query/latest/docs/framework/react/guides/advanced-ssr#server-components--nextjs-app-router

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import {
  useGetRentalCompanyExtraInfoQuery,
  GetRentalCompanyExtraInfoQuery,
} from "@/graphql/generated/second-endpoint";

export default async function ServerComponent() {
  const queryClient = new QueryClient();

  const fetchAllPosts = useGetRentalCompanyExtraInfoQuery.fetcher({
    id: 187,
  });

  const data = await queryClient.fetchQuery<GetRentalCompanyExtraInfoQuery>({
    queryKey: useGetRentalCompanyExtraInfoQuery.getKey({ id: 187 }),
    queryFn: fetchAllPosts,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="p-4">
        <p className="text-2xl font-bold">Server Component</p>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </HydrationBoundary>
  );
}
