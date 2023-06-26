import React from "react";

const SearchInput = ({ onChange }, { ...otherProps }) => {
	return (
		<input
			type='search'
			className='border-none outline-none p-[10px] w-40 leading-[30px] my-8'
			onChange={onChange}
			{...otherProps}
		/>
	);
};

export default SearchInput;
