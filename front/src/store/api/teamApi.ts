import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Pokemon } from './pokemonApi';


const API_URL = import.meta.env.VITE_API_URL_V1  || "http://localhost:3000";

export interface Team {
  id: number;
  name: string;
  description: string;
  pokemons: Pokemon[];
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
    }),
    createOneTeam: builder.mutation<{ success: boolean; message: string }, FormData>({
      query: (team) => ({
        url: "/teams",
        method: "POST",
        body: team,
      }),
    }),
  }),
});

export const { useGetAllTeamsQuery, useGetTeamByIdQuery, useCreateOneTeamMutation } = teamApi;