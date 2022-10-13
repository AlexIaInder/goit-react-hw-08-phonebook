import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CacheTags } from './CacheTags';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://634455d9dcae733e8fdd1358.mockapi.io/',
  }),
  tagTypes: Object.values(CacheTags),
  endpoints: () => ({}),
});
