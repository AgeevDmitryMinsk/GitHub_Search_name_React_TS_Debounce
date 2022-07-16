import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {HopePage} from "./pages/HopePage";
import {FavouritesPages} from "./pages/FavouritesPages";
import {Navigation} from "./components/Navigation";
import Footer from "./components/Footer";


function App() {
	return (
		<>
			<Footer/>
			<Navigation/>
			<Routes>
				<Route path="/" element={<HopePage/>}/>
				<Route path="/favourites" element={<FavouritesPages/>}/>

			</Routes>
			<Footer/>

		</>


	);
}

export default App;
