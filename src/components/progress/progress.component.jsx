import React from "react";
import "./progress.styles.css";

const ProgresBar = ({ color, value }) => {
	return (
		<div className='relative w-full sm:w-1/2 bg-gray-200 rounded'>
			<div
				style={{ width: `${value}%` }}
				className={`absolute top-0 h-4 rounded ${color} shim`}></div>
		</div>
	);
};

export default ProgresBar;
