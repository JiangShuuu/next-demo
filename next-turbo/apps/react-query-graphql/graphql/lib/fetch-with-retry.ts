
export class FetchError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
    this.name = 'FetchError';
  }
}

export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const fetchWithRetry = async (
  name: string,
  accessToken: string | null,
  query: string,
  variables: any,
  url: string,
  restOptions?: any,
  next?: any,
  cache?: any,
  retries = 3,
  backoff = 1000,
): Promise<any> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/graphql/backend`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
          ...restOptions,
        },
        body: JSON.stringify({ query, variables }),
        ...(next ? { next } : {}),
        ...(cache ? { cache } : {}),
      },
    );

    if (!res.ok) {
      throw new FetchError(`HTTP error! status: ${res.status}`, res.status);
    }

    const json = await res.json();

    if (json.errors) {
      console.log(`${name} backend fetcher error`, json.errors);
      const { message } = json.errors[0];
      throw new Error(message);
    }

    return json.data;
  } catch (error) {
    if (error instanceof FetchError && error.status === 502) {
      if (retries > 0) {
        console.log(
          `502錯誤，將在${backoff}ms後重試。剩餘重試次數：${retries - 1}`,
        );
        await delay(backoff);
        return fetchWithRetry(
          accessToken,
          query,
          variables,
          url,
          restOptions,
          next,
          cache,
          retries - 1,
          backoff * 2,
        );
      }
      console.error('502 Server Error - 已達到最大重試次數');
      throw new Error('502 Error: Gateway Error - 重試失敗');
    }
    throw error;
  }
};
