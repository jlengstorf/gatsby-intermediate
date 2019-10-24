import React from 'react';
import { Link } from 'gatsby';

const Index = () => (
  <>
    <h1>Rick & Morty Character Lookup</h1>
    <p>
      Look up your favorite characters from <em>Rick and Morty</em> using the
      <a href="https://rickandmortyapi.com"> Rick and Morty api</a>
    </p>
    <Link to="/search">Search</Link>
  </>
);

export default Index;
