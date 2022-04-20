import React from 'react';

export const Character = ({character}) => {
	return (
		<div className="card">
			<img
				src={character.image}
				alt={character.name}
				height='240'
				width='240'
			/>
			<div className="text-container">
				<h3>{character.name}</h3>
				<p className="status">
					{character.status} - {character.species}
				</p>
				<p className="title">Last seen on</p>
				<p>{character.location.name}</p>
			</div>
		</div>
	);
};
