import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CacheTags } from './CacheTags';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
  }),
  tagTypes: Object.values(CacheTags),
  endpoints: () => ({}),
});
