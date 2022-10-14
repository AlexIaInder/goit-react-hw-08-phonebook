import { api } from '../api';

const onAuthQueryStarted = async (_, { queryFulfilled }) => {
  const { data } = await queryFulfilled;

  if (data?.token) {
    localStorage.setItem('token', data.token);
  }
};

const authApi = api.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: body => ({
        url: 'users/login',
        body,
        method: 'POST',
      }),
      onQueryStarted: onAuthQueryStarted,
    }),
    signup: builder.mutation({
      query: body => ({
        url: 'users/signup',
        body,
        method: 'POST',
      }),
      onQueryStarted: onAuthQueryStarted,
    }),
  }),
});

export const { useLoginMutation, useSignupMutation } = authApi;
