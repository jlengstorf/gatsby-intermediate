import React, { useState } from 'react';
import { navigate } from 'gatsby';

const Form = () => {
  const [value, setValue] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    const query = value
      .toLowerCase()
      .trim()
      .replace(/[^\w]/g, '')
      .replace(/\s+/g, '-');

    navigate(`/search/${query}`, { state: { query } });

    //TODO change the URL to match our search
  };
  const handleInput = e => {
    setValue(e.target.value);
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
