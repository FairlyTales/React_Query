import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Character } from './Character';

export const Characters = () => {
  const [page, setPage] = useState(1);

  const fetchCharacters = async ({ queryKey }) => {
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${queryKey[1]}`);
    return response.json();
  };

  const { data, status, isPreviousData } = useQuery(['characters', page], fetchCharacters, {
    keepPreviousData: true,
  });

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'error') return <p>Error</p>;

  return (
    <div className='characters'>
      {data.results.map(character => (
        <Character key={character.id} character={character} />
      ))}
      <div>
        <button
          disabled={!data.info.prev}
          onClick={() => setPage((prevPage) => prevPage - 1)}
        >
          Prev
        </button>
        <button
          disabled={isPreviousData && !data.info.next}
          onClick={() => setPage((prevPage) => prevPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};
