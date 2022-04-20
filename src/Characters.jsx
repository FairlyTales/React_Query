import React from 'react';
import {CHARACTER_URL} from "./constants";
import {useQuery} from "react-query";

export const Characters = () => {
	const fetchCharacters = async () => {
		const response = await fetch(CHARACTER_URL);
		return response.json();
	}

	const {data, status} = useQuery('characters', fetchCharacters)

	if (status === 'loading') return <p>Loading...</p>
	if (status === 'error') return <p>Error</p>

	return (
		<div>
			{data.results.map(character => (
				<div key={character.id}>{character.name}</div>
			))}
		</div>
	);
};
