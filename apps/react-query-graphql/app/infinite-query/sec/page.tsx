"use client";
import React, { useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";

const fetchListsById = async (pageParam: any) => {
  console.log("pageParam!!!!", pageParam.pageParam);
  const response = (await fetch(
    `https://jsonplaceholder.typicode.com/todos?_pages=${pageParam.pageParam.index}&_limit=${5}`
  )) as any;

  const todos = await response.json();

  // console.log("res", todos);
  return { lists: todos, name: pageParam.pageParam.id };
};

export default function InfiniteQuerySecPage() {
  const ids = ["id1", "id2", "id3", "id4", "id5"]; // 假設的 id 陣列
  const [isPaused, setIsPaused] = useState(false); // 控制暫停狀態
  const [currentIndex, setCurrentIndex] = useState(0); // 追蹤當前處理的 id

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["lists"],
      queryFn: (pageParam) => fetchListsById(pageParam),
      initialPageParam: { id: ids[0], index: 0 },
      getNextPageParam: (lastPage, allPages, lastPageParam) => {
        if (currentIndex < ids.length) {
          const next = { id: ids[currentIndex], index: currentIndex };
          return next;
        }
        return undefined; // 沒有更多資料了
      },
      enabled: false, // 初始不自動觸發
    });

  const handleFetch = async () => {
    if (isPaused || isFetchingNextPage) return;

    await fetchNextPage().then((response: any) => {
      console.log(`response::${currentIndex}`, response.data);
    });

    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex);
    // await new Promise<void>((resolve) => {
    //   setCurrentIndex(newIndex);
    //   // 使用 requestAnimationFrame 確保狀態已更新
    //   requestAnimationFrame(() => resolve());
    // });
    secFetch(newIndex);

    // await fetchNextPage().then((response: any) => {
    //   console.log(`response::${currentIndex}`, response.data);
    //   const latestPage = response.data.pages[response.data.pages.length - 1];
    //   const newLists = latestPage.lists;

    //   if (newLists.length < 10) {
    //     console.log("fetching next");
    //     fetchNextPage();
    //   } else {
    //     console.log("fetching end");
    //     setIsPaused(true); // 暫停加載
    //   }
    // });
  };

  const secFetch = async (newIndex: number) => {
    console.log("currentIndex", newIndex);
    fetchNextPage();
  };

  // const handleContinue = () => {
  //   setIsPaused(false); // 解除暫停
  //   handleFetch(); // 繼續加載
  // };

  return (
    <div>
      <h1>Infinite Query Example</h1>
      <button onClick={handleFetch} disabled={isPaused || isFetchingNextPage}>
        Fetch Next
      </button>

      {!hasNextPage && <p>No more data</p>}
      {/* <button onClick={handleContinue} disabled={!isPaused}>
        Continue
      </button> */}

      <div className="border flex items-center justify-center mt-5 flex-col">
        <h2>Lists {currentIndex}</h2>
        <div>
          {data?.pages?.map((item, idx) => (
            <div key={idx}>
              <p className="text-2xl font-bold">
                ID: {item.name}, Length: {item.lists.length}
              </p>
              {item.lists.map((list: any, idx: number) => (
                <div key={idx}>{list.title}</div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {isFetchingNextPage && <p>Loading...</p>}
    </div>
  );
}
