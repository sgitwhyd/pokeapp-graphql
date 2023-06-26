import "./App.css";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Spinner from "./components/spinner/spinner.component";
const Home = lazy(() => import("./pages/home"));
const Pokemon = lazy(() => import("./pages/pokemon"));

const App = () => {
	return (
		<Suspense fallback={<Spinner />}>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/pokemon/:name' element={<Pokemon />} />
			</Routes>
		</Suspense>
	);
};

export default App;
