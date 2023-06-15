import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const songsApi = createApi({
    reducerPath: 'songsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://saavn.me/' }),
    endpoints: (builder) => ({
        getAllSongs: builder.query({
            query: (lang) => `modules?language=${lang}`,
        }),

        songDetails: builder.query({
            query: (id) => `songs?id=${id}`
        }),

        searchSong: builder.query({
            query: (value) => `search/songs?query=${value}`
        })
    }),
})

export const { useGetAllSongsQuery, useSongDetailsQuery, useSearchSongQuery } = songsApi