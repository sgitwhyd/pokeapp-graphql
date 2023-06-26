import React from "react";
import SEO from "../../config/seo.config";

const PageLayout = ({ children, seoProps }) => {
	return (
		<main>
			<SEO {...seoProps} />
			<div className='mx-auto flex w-full max-w-5xl flex-col justify-center py-6 px-4 xs:py-6 xs:px-9 relative'>
				{children}
			</div>
		</main>
	);
};

export default PageLayout;
