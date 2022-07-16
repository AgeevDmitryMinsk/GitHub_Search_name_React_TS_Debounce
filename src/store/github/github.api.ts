import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IRepo, IUser, ServerResponse} from "../../models/models";

// использую toolkit/query/react вместо простого toolkit/react для оптимизации
export const githubApi = createApi({
	reducerPath: 'github/api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.github.com'
	}),
	refetchOnFocus: true,
	endpoints: build => ({
		searchUsers: build.query<IUser[], string>({
			query: (search: string)=> ({
				url: "search/users",
				params: {
					q: search,
					per_page: 10
				}
			}),
			// трансформирую ответ сервера:
			transformResponse: (response: ServerResponse<IUser>) => response.items
		}),
		getUserRepos: build.query<IRepo[] , string>({
			query : (username:string) => ({
				url: `users/${username}/repos`
			})
		})
	})
})

//из переменной githubApi генерирую специальный hook useSearchUsersQuery:
export const {useSearchUsersQuery, useLazyGetUserReposQuery} = githubApi
