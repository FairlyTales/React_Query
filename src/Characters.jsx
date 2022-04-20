import React, {useEffect, useState} from 'react';
import {CHARACTER_URL} from "./constants";

export const Characters = () => {
	const [characters, setCharacters] = useState([]);

	const fetchCharacters = async () => {
		const response = await fetch(CHARACTER_URL);
		const data = await response.json();

		return data.results;
	}

	useEffect(async () => {
		const characters = await fetchCharacters();
		setCharacters(characters);
	}, []);


	return (
		<div>
			{characters.map(character => (
				<div key={character.id}>{character.name}</div>
			))}
		</div>
	);
};
