## useState 重點

1. 在 function 內使用 useState 時，如果沒有加上 await，會有 race condition 的問題
2. 在 function 內使用，可以的話請傳值進去
3. useState 的值在更新時，會先更新到 local，然後再更新到 global，所以會有 race condition 的問題
4. 若要替換新舊值，請使用 setState prev 參數 ex. setState((prev) => prev + 1)
