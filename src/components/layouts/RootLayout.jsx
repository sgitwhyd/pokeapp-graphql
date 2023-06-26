import React from "react";

const RootLayout = ({ children }) => {
	return (
		<div className='flex flex-col h-full w-full bg-slate-400 m-auto justify-between transition-colors duration-300 min-h-screen relative'>
			{children}
		</div>
	);
};

export default RootLayout;
