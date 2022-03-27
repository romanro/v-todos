export type METHOD = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export type Request = {
    url?: string;
    method?: METHOD;
    // Body must be any because it can be everything
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    body?: any;
    headers?: AppHeaders | Record<string, string>;
};

export type GetRequest = Omit<Request, 'body' | 'method'>;
export type DeleteRequest = { id: string } & Omit<Request, 'body'>;
export type PostRequest = Omit<Request, 'method'>;

export type QueryGetObject<T> = {
    queryKey: string;
    queryFn: () => Promise<T>;
};

export type FetchOptions = { method: METHOD; headers: AppHeaders; body?: string };

export type AppHeaders =
    | {
          'X-Api-Key': string;
      } & HeadersInit;
