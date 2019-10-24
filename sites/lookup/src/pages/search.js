import React from 'react';
import Form from '../../components/form';
import Results from '../../components/results';

const Index = () => (
  <>
    <h1>Seach for Rick & Morty Character</h1>
    <p>
      Trying to remeber which Rick you're talking about? Try out this search
      interface
    </p>
    <Form />
    <Results name="rick" />
  </>
);

export default Index;
