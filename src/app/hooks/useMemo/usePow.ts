import { useMemo } from 'react'

// 加上 useMemo 若沒加依賴項, 就只有畫面更新時才做 reRender

/* 
useMemo好處：
- 減少不必要的循環跟渲染
- 減少子組件連動渲染
- 有時配合 useState 會拿不到最新的值, 這時可以使用 useRef 解決
*/

const Index = (list: number[]) => {
  return useMemo(
    () =>
      list.map((item: number) => {
        console.log(1)
        return Math.pow(item, 2)
      }),
    []
  )
}

export default Index
