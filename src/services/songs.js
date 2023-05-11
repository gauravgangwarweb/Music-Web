import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const songsApi = createApi({
    reducerPath: 'songsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://saavn.me/' }),
    endpoints: (builder) => ({
        getAllSongs: builder.query({
            query: () => `modules?language=punjabi`,
        }),

        songDetails: builder.query({
            query: (id) => `songs?id=${id}`
        })
    }),
})

export const { useGetAllSongsQuery, useSongDetailsQuery } = songsApi