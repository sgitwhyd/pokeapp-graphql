import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const SEO = ({ title, description, children }) => {
	const { pathname } = useLocation();
	const seo = {
		title: `${title} | Pokeapp` || "Pokeapp",
		description: description || "Pokeapp",
		image: "https://i.imgur.com/DCuO9wS.png",
		url: `https://sigit-pokeapp.vercel.app${pathname}`,
	};

	return (
		<Helmet title={seo.title}>
			<meta name='description' content={seo.description} />
			<meta name='image' content={seo.image} />
			<meta property='og:url' content={seo.url} />
			<meta property='og:title' content={seo.title} />
			<meta property='og:description' content={seo.description} />
			<meta property='og:image' content={seo.image} />
			<meta name='twitter:card' content='summary_large_image' />
			<meta name='twitter:title' content={seo.title} />
			<meta name='twitter:description' content={seo.description} />
			<meta name='twitter:image' content={seo.image} />
			{children}
		</Helmet>
	);
};

export default SEO;
