'use client'
import React, { useState, useCallback } from 'react'

/*
點擊切換按鈕時, 有經過 useCallback 包裝後的韓式組件, 不會因為值的改變而觸發 reRender

- 盡量搭配 React.memo 使用, 不然不但不會提升效能, 還有可能降低效能
- 與 useMemo 差異在於, useMemo 返回值, useCallback 返回函數

有可能降低效能原因, 單獨使用 useCallback 去記憶每個函數, 會造成記憶體過多佔用, 降低效能
搭配 React.memo 在渲染昂貴的地方避免多次渲染
*/

export default function Page() {
  const [count, setCount] = useState(0)
  const [show, setShow] = useState(true)

  const add = useCallback(() => {
    setCount(count + 1)
  }, [count])
  return (
    <div className="flex w-full flex-col">
      <div className="w-full space-x-2">
        <TestButton title="普通點擊" onClick={() => setCount(count + 1)} />
        <TestButton title="useCallback點擊" onClick={add} />
        <button
          onClick={() => {
            setShow(!show)
          }}
        >
          切換
        </button>
      </div>
      <p className="mt-5">count: {count}</p>
    </div>
  )
}

const TestButton = React.memo(function TestBtn(props: any) {
  console.log(props.title)
  return <button onClick={props.onClick}>{props.title}</button>
})
