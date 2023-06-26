import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

import ProgresBar from "../../components/progress/progress.component";
import Spinner from "../../components/spinner/spinner.component";
import PageLayout from "../../components/layouts/PageLayout";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";

const GET_POKEMON_BY_NAME = gql`
	query ($name: String!) {
		pokemon(name: $name) {
			height
			sprites {
				front_default
			}
			types {
				type {
					name
				}
			}
			species {
				name
			}
			stats {
				base_stat
				stat {
					name
				}
			}
		}
	}
`;

const PokemonDetail = () => {
	const { name } = useParams();
	const [pokemon, setPokemon] = useState({});
	const navigate = useNavigate();
	const [seoProps, setSeoProps] = useState({
		title: "",
	});

	const { data, loading, error } = useQuery(GET_POKEMON_BY_NAME, {
		variables: { name },
	});

	useEffect(() => {
		if (data) {
			const { pokemon } = data;
			setSeoProps({
				title: pokemon.species?.name,
				description: pokemon.species?.name,
				image: pokemon.sprites?.front_default,
				url: window.location.href,
			});
			setPokemon(pokemon);
		}
	}, [data]);

	const handleBack = () => {
		navigate("/");
	};

	if (error)
		return (
			<PageLayout>
				<div className=''>{error.message}</div>
				<Button
					variant='contained'
					className='mt-5'
					color='primary'
					onClick={handleBack}>
					Back
				</Button>
			</PageLayout>
		);

	return (
		<PageLayout seoProps={{ ...seoProps }}>
			{loading ? (
				<Spinner />
			) : (
				<div className='grid grid-cols-2 h-[500px] items-center'>
					<div className='w-full flex flex-col items-center justify-center'>
						<h1 className='text-2xl font-bold'>{pokemon.species?.name}</h1>
						<img src={pokemon.sprites?.front_default} alt={pokemon.name} />
					</div>
					<div className=''>
						{pokemon.stats?.map((stat) => (
							<div key={`stat-${stat.stat.name}`} className='mb-5'>
								<Typography variant='p' className='capitalize mb-3'>
									{stat.stat.name}
								</Typography>
								<ProgresBar color={`bg-blue-200`} value={stat.base_stat} />
							</div>
						))}
					</div>
				</div>
			)}
			<Button
				variant='contained'
				className='mt-5'
				color='primary'
				onClick={handleBack}>
				Back
			</Button>
		</PageLayout>
	);
};

export default PokemonDetail;
