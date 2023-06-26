import { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { useDebounce } from "react-use";
import PokemonCard from "../../components/pokemon-card/pokemon-card.component";
import PageLayout from "../../components/layouts/PageLayout";
import Spinner from "../../components/spinner/spinner.component";

import { TextField } from "@mui/material";

const GET_POKEMON = gql`
	query {
		pokemons {
			results {
				id
				url
				name
				image
				artwork
				dreamworld
			}
		}
	}
`;

const Home = () => {
	const [pokemons, setPokemons] = useState([]);
	const [filteredPokemons, setFilteredPokemons] = useState([]);
	const [search, setSearch] = useState("");

	const { data, error, loading } = useQuery(GET_POKEMON);

	const seoProps = {
		title: "Home",
	};

	const [,] = useDebounce(
		() => {
			setSearch(search);
			const filteredPokemons = pokemons.filter((pokemon) =>
				pokemon.name.includes(search.toLowerCase())
			);
			setFilteredPokemons(filteredPokemons);
		},
		800,
		[search]
	);

	useEffect(() => {
		if (data) {
			const {
				pokemons: { results },
			} = data;
			setPokemons(results);
		}
	}, [data]);

	useEffect(() => {}, [search, pokemons]);

	if (loading)
		return (
			<PageLayout>
				<Spinner />
			</PageLayout>
		);

	return (
		<PageLayout seoProps={{ ...seoProps }}>
			<TextField
				label='Search'
				variant='standard'
				className='placeholder:text-white'
				onChange={(e) => setSearch(e.target.value)}
			/>
			{error ? (
				<div>Error</div>
			) : (
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-5'>
					{filteredPokemons.length > 0 ? (
						filteredPokemons.map((pokemon) => (
							<PokemonCard key={pokemon.id} {...pokemon} />
						))
					) : (
						<div>No Pokemon Found</div>
					)}
				</div>
			)}
		</PageLayout>
	);
};

export default Home;
