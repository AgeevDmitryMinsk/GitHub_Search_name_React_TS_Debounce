import React from 'react';
import AgeevDmitryMinsk_photo from './../photo/AgeevDmitryMinsk.jpg'
// import header_logo from '../../photos/1633774787_19-kartinkin-net-p-monro-pop-art-krasivo-20.jpg'

const Footer = () => {

	return (
		< >
			<a href="https://github.com/AgeevDmitryMinsk" target={"_blank"}
			   className="sticky bottom-0 flex justify-between items-center h-[50px] px-5 bg-gray-600 shadow-md text-white">
				AgeevDmitryMinsk 2022
				<img src={AgeevDmitryMinsk_photo} alt="AgeevDmitryMinsk_photo" className={"h-12 rounded" }/>
				<div>Viber/Telegram: +375 29 6164088</div>
			</a>
		</>
	);
};

export default Footer;
