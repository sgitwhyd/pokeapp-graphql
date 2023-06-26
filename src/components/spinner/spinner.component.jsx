import React from "react";
import "./spinner.style.css";

const Spinner = () => {
	return (
		<div className='w-full h-full min-h-screen flex items-center justify-center'>
			<div className='bar-spin'></div>
		</div>
	);
};

export default Spinner;
