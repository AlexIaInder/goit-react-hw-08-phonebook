import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CacheTags } from './CacheTags';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
    prepareHeaders: headers => {
      const token = localStorage.getItem('token');

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: Object.values(CacheTags),
  endpoints: () => ({}),
});
