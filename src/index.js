import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ApolloProvider, InMemoryCache, ApolloClient } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import RootLayout from "./components/layouts/RootLayout";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { HelmetProvider, Helmet } from "react-helmet-async";

const client = new ApolloClient({
	uri: "https://graphql-pokeapi.graphcdn.app/",
	cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<HelmetProvider>
				<BrowserRouter>
					<RootLayout>
						<Helmet defaultTitle='Pokeapp' />
						<App />
					</RootLayout>
				</BrowserRouter>
			</HelmetProvider>
		</ApolloProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
