import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import {githubActions} from "../store/github/github.slice";

const actions = {
	...githubActions
}

// создаю кастомный хук, который позволит более удобно работать с actions в проекте:
export const useActions = () => {
	//получу объект dispatch с помощью хука useDispatch
	const dispatch = useDispatch()
	return bindActionCreators(actions, dispatch)
}
