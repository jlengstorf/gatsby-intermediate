import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const SEARCH_QUERY = gql`
  query($name: String!) {
    characters(filter: { name: $name }) {
      results {
        id
        name
        species
        origin {
          name
        }
        image
      }
    }
  }
`;

const Results = ({ name }) => {
  const { loading, error, data } = useQuery(SEARCH_QUERY, {
    variables: { name },
  });

  const hasResults = data && (data.characters.results || []).length > 0;

  return (
    <div style={{ maxWidth: 500, margin: '50px auto' }}>
      <h2>Search Results</h2>
      {loading && <p>Loading results...</p>}
      {error && (
        <pre style={{ overflowX: 'scroll' }}>
          {JSON.stringify(error, null, 2)}
        </pre>
      )}
      {hasResults
        ? data.characters.results.map(character => (
            <div
              key={character.id}
              style={{ display: 'flex', marginBottom: 40 }}
            >
              <div style={{ marginRight: 20, width: 100 }}>
                <img
                  src={character.image}
                  alt={character.name}
                  style={{ width: '100%' }}
                />
              </div>
              <div>
                <h3 style={{ fontSize: 20, marginTop: 0 }}>{character.name}</h3>
                <p>
                  <strong>Species:</strong> {character.species}
                </p>
                <p>
                  <strong>Origin:</strong> {character.origin.name}
                </p>
              </div>
            </div>
          ))
        : !loading && <p>No characters found matching “{name}”.</p>}
    </div>
  );
};

export default Results;
