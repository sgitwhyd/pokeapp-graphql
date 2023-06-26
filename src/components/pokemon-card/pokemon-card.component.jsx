import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function PokemonCard(props) {
	return (
		<Card sx={{ maxWidth: 345 }} color='success'>
			<CardMedia
				sx={{ height: 140 }}
				image={props.artwork}
				title='green iguana'
			/>
			<CardContent>
				<Typography gutterBottom variant='h5' component='div'>
					{props.name}
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					Lizards are a widespread group of squamate reptiles, with over 6,000
					species, ranging across all continents except Antarctica
				</Typography>
			</CardContent>
			<CardActions>
				<Button size='small'>
					<a href={props.url}>Open</a>
				</Button>
				<Button size='small'>
					<a href={`/pokemon/${props.name}`}>Learn More</a>
				</Button>
			</CardActions>
		</Card>
	);
}
