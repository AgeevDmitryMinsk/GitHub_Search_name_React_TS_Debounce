import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import {HopePage} from "./pages/HopePage";
import {FavouritesPages} from "./pages/FavouritesPages";
import {Navigation} from "./components/Navigation";
import Footer from "./components/Footer";


function App() {
	return (
		<>
			{/*<Footer/>*/}
			<Navigation/>
			<Routes>
				<Route path="/" element={<Navigate to={'/home'}/>}/>
				<Route path="/home" element={<HopePage/>}/>
				<Route path="/favourites" element={<FavouritesPages/>}/>
				<Route path="*" element={<div>404</div>}/>
			</Routes>
			<Footer/>
		</>


	);
}

export default App;
