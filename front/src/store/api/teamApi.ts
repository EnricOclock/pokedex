import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = import.meta.env.VITE_API_URL_V1  || "http://localhost:3000";

export interface Team {
  id: number;
  name: string;
  description: string;

}


export const teamApi = createApi({
  reducerPath: 'teamApi',
  baseQuery: fetchBaseQuery({
     baseUrl: API_URL, }),
  endpoints: (builder) => ({
    getAllTeams: builder.query<Team[], void>({
      query: () => '/teams',
    }),
    getTeamById: builder.query<Team, string>({
      query: (id: string) => `/teams/${id}`,
    })
  }),
});

export const { useGetAllTeamsQuery, useGetTeamByIdQuery } = teamApi;