'use client'
// https://juejin.cn/post/7101486767336849421
import React, { useState } from 'react'
import usePow from './usePow'

export default function Page() {
  const [flag, setFlag] = useState<boolean>(true)
  const data = usePow([1, 2, 3])

  return (
    <div>
      <div>數字：{JSON.stringify(data)}</div>
      <button onClick={() => setFlag((v) => !v)}>切換</button>
      <div>切換狀態：{JSON.stringify(flag)}</div>
    </div>
  )
}
