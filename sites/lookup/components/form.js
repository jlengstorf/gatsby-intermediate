import React, { useState } from 'react';
import { navigate } from 'gatsby';

const Form = () => {
  const [value, setValue] = useState('');

  const handleInput = event => setValue(event.target.value);
  const handleSubmit = event => {
    event.preventDefault();

    const query = value
      .toLowerCase()
      .trim()
      .replace(/[^\w ]/g, '')
      .replace(/\s+/g, '-');

    navigate(`/search/${query}`, { state: { query } });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Search by name:
        <input type="text" name="name" value={value} onChange={handleInput} />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default Form;
