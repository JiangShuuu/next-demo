'use client'
// https://juejin.cn/post/7101486767336849421
import React, { useState } from 'react'
import usePow from './useMemo/usePow'
import { useRouter } from 'next/navigation'

export default function HooksPage() {
  const router = useRouter()

  return (
    <div className="flex w-full flex-col space-y-4 p-3">
      <button onClick={() => router.push('/hooks/useMemo')}>useMemo</button>
      <button onClick={() => router.push('/hooks/useCallback')}>useCallback</button>
    </div>
  )
}
