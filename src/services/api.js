import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const ecomApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
  endpoints: (builder) => ({

    getUsers: builder.query({
      query: () => '/users'
    }),

    register: builder.mutation({
      query: ( user ) => ({
        url : '/user/auth/signup',
        method : 'POST',
        body : user
      })
    }),

    login : builder.mutation({
      query : ( user ) => ({
        url : '/user/auth/signin',
        method : 'POST',
        body : user
      }),
      transformResponse: (response, meta, arg) => {
        return {
          originalArg: arg,
          data: {...response, isLoggedIn : true},
        }
      }
    }),

  }),
  reducerPath: 'ecommerceApi'
})

export const {
  useGetUsersQuery,
  useRegisterMutation,
  useLoginMutation
} = ecomApi;

// export const selectUsersResult = ecomApi.endpoints.getUsers.select()

// const emptyUsers = []

// export const selectAllUsers = createSelector(
//   selectUsersResult,
//   usersResult => usersResult?.data ?? emptyUsers
// )

// export const selectUserById = createSelector(
//   selectAllUsers,
//   (state, userId) => userId,
//   (users, userId) => users.find(user => user.id === userId)
// )