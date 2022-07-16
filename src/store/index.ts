import {configureStore} from "@reduxjs/toolkit";
import {githubApi} from "./github/github.api";
import {setupListeners} from "@reduxjs/toolkit/query";
import {githubReducers} from "./github/github.slice";

export const store = configureStore({
	reducer: {
		[githubApi.reducerPath]: githubApi.reducer,
		github: githubReducers
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(githubApi.middleware)
})

// если перейти в другую вкладку браузера, а затем вернуться назад, то произойдет повторный запрос актуальных данных
// на сервер благодаря подписке ниже: и  refetchOnFocus: true внутри useSearchUsersQuery в файле HomePage.tsx
setupListeners(store.dispatch)

// создаю кастомный тип RootState
export type RootState = ReturnType<typeof store.getState>
