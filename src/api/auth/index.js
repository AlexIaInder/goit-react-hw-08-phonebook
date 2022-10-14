import { CacheTags } from 'api/CacheTags';
import { api } from '../api';

const authApi = api.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: body => ({
        url: '/login',
        body,
      }),
    }),
    signup: builder.mutation({
      query: body => ({
        url: '/signup',
        body,
      }),
    }),
    register: builder.mutation({
      query: body => ({
        url: '/register',
        body,
      }),
    }),
  }),
});

export const { useLoginMutation, useSignupMutation, useRegisterMutation } =
  authApi;
