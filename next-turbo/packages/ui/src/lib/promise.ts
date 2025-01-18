export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));


export const fetchPromise = async (ms: number) => {
  await sleep(ms)

  return true
}