import { CacheTags } from 'api/CacheTags';
import { api } from '../api';

const contactsApi = api.injectEndpoints({
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => '/contacts',
      providesTags: [CacheTags.Contacts],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [CacheTags.Contacts],
    }),
    addContact: builder.mutation({
      query: body => ({
        url: '/contacts',
        method: 'POST',
        body,
      }),
      invalidatesTags: [CacheTags.Contacts],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useDeleteContactMutation,
  useAddContactMutation,
} = contactsApi;
