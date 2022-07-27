import React, {ChangeEvent, useEffect, useState} from 'react';
import {useLazyGetUserReposQuery, useSearchUsersQuery} from "../store/github/github.api";
import {useDebounce} from "../hooks/debounce";
import {RepoCard} from "../components/RepoCard";

export const HopePage = () => {
	const [search, setSearch] = useState<string>('')
	const [dropdown, setDropdown] = useState(false)

	//сделал кастомный hook useDebounce, который принимает в себя параметр search и с задержкой 0,3с возвращает значение в debounced:
	const debounced = useDebounce(search)

	const {isLoading, isError, data} = useSearchUsersQuery(debounced, {
		skip: debounced.length < 3,
		refetchOnFocus: true
	})

	const [fetchRepos, {isLoading: areReposLoading, data: repos}] = useLazyGetUserReposQuery()

	// useEffect(()=>{
	// 	console.log('useEffect',search)
	// },[search])

	// слежу за изменением значения debounced, а не search
	useEffect(() => {
		console.log('useEffect', debounced)
		//если длина debounced > 3, то показываю дропдаун, в противном случае скрываю
		setDropdown(debounced.length > 3)
	}, [debounced])

	function onChangeHandle(e: ChangeEvent<HTMLInputElement>) {
		//console.log('onChangeHandle',e.target.value)
		setSearch(e.target.value)
	}

	function clickHandler(userName: string) {
		//console.log(userName)
		fetchRepos(userName)
		setDropdown(false)
	}

	return (
		<div className={"flex justify-center pt-10 mx-auto h-screen w-screen overflow-y-scroll"}>
			{isError && <p className={"text-center text-red-600 text-5xl"}>Something went wrong</p>}
			<div className={"relative w-[650px]"}>
				<input type={"text"}
					   className={"border py-2 px-4 w-full h-[42px] mb-2"}
					   placeholder={"Search for GitHub username..."}
					   value={search}
					   onChange={onChangeHandle}
				/>

				{dropdown &&
                    <ul className={"list-none absolute top-[42px] left-0 right-0 max-h-[200px] shadow-md bg-white overflow-y-scroll"}>
						{isLoading && <div className={'text-center'}>Loading...</div>}

						{data?.map(el => <li key={el.id}
											 onClick={() => clickHandler(el.login)}
											 className={'py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer'}
						>{el.url}</li>)}
                    </ul>}
				<div className="container">
					{areReposLoading&&<p className={"text-center"}>Repos are loading...</p>}
					{/*{repos?.map(el=> <p>{el.url}</p>)}*/}
					{repos?.map(el=> <RepoCard repo={el} key={el.id}/>)}
				</div>
			</div>

		</div>
	);
};
