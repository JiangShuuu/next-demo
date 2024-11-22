// https://dev.to/wassim93/mastering-infinite-scrolling-with-react-query-v5-1f5i
"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { useCallback, useMemo, useRef } from "react";

export const fetchData = async (page: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos?_pages=${page}&_limit=${10}`
  );
  const todos = await response.json();
  return todos;
};

export default function InfiniteQueryPage() {
  const observer = useRef<IntersectionObserver>();

  const { data, error, fetchNextPage, hasNextPage, isFetching, isLoading } =
    useInfiniteQuery({
      queryKey: ["todos"],
      queryFn: ({ pageParam }) => fetchData(pageParam),
      initialPageParam: 0,
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.length > 0 ? allPages.length + 1 : undefined;
      },
    });
  const flatData = useMemo(() => data?.pages.flat() ?? [], [data]);

  const lastElementRef = useCallback(
    (node: HTMLDivElement) => {
      if (isLoading) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0]?.isIntersecting && hasNextPage && !isFetching) {
          fetchNextPage();
        }
      });

      if (node) observer.current.observe(node);
    },
    [fetchNextPage, hasNextPage, isFetching, isLoading]
  );
  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>Error on fetch data...</h1>;

  return (
    <div className="flex">
      <div className="w-[300px]">
        {isFetching && (
          <div className="text-red-500 text-2xl">Fetching more data...</div>
        )}
      </div>
      <div className="h-[500px] w-[300px] overflow-y-auto mt-10">
        <div className="flex flex-col gap-4 border">
          {flatData?.map((item) => (
            <div key={item.id} ref={lastElementRef}>
              <p>{item.title}</p>
            </div>
          ))}

          {isFetching && (
            <div className="text-red-500">Fetching more data...</div>
          )}
        </div>
      </div>
    </div>
  );
}
