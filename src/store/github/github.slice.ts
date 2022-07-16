import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const LocalStorage_Far_KEY = 'rfk'

interface GithubState {
	favourites: string[]
}

const initialState: GithubState = {
	// favourites:[]
	// если в localStorage ничего нет, то парсим пустой массив из строки '[]'
	favourites: JSON.parse(localStorage.getItem(LocalStorage_Far_KEY) ?? '[]')
}
export const githubSlice = createSlice({
	name: `github`,
	initialState,
	reducers: {
		addFavourites(state, action: PayloadAction<string>) {
			state.favourites.push(action.payload)
			localStorage.setItem(LocalStorage_Far_KEY, JSON.stringify(state.favourites))
		},
		removeFavourites(state, action: PayloadAction<string>) {
			state.favourites = state.favourites.filter(el => el !== action.payload)
			localStorage.setItem(LocalStorage_Far_KEY, JSON.stringify(state.favourites))
		}
	}
})

export const githubActions = githubSlice.actions
export const githubReducers = githubSlice.reducer
