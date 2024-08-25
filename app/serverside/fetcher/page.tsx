// https://tanstack.com/query/latest/docs/framework/react/guides/advanced-ssr#server-components--nextjs-app-router

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import {
  useStationByIdQuery,
  StationByIdQuery,
} from "@/graphql/generated/first-endpoint";

export default async function ServerComponent() {
  const queryClient = new QueryClient();

  const fetchAllPosts = useStationByIdQuery.fetcher(
    {
      id: 1,
    },
    {
      test: "123",
    }
  );

  const data = await queryClient.fetchQuery<StationByIdQuery>({
    queryKey: useStationByIdQuery.getKey({ id: 1704 }),
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
