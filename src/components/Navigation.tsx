import React from 'react';
import {Link} from "react-router-dom";

export const Navigation = () => {
	return (
		<nav className="flex justify-between items-center h-[50px] px-5 bg-gray-500 shadow-md text-white">
			<h3 className={"font-bold"}>Github Search</h3>
			<span>
				<Link to="/home" className="mr-2">Home</Link>
				<Link to="/favourites">Favourites</Link>

			</span>
			
		</nav>
	);
};


