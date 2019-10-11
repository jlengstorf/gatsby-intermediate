/** @jsx jsx */
import { useState } from 'react';
import { jsx } from 'theme-ui';
import honkify from 'honkify';

const Honker = () => {
  const initialState = { active: false, unregister: () => {} };
  const [honk, setHonk] = useState(initialState);
  const toggleHonk = () => {
    if (!honk.active) {
      const unregister = honkify();
      setHonk({ active: true, unregister });
    }

    if (honk.active) {
      honk.unregister();
      setHonk(initialState);
    }
  };

  return (
    <button
      className="no-honk"
      sx={{ variant: 'button.hollow' }}
      onClick={toggleHonk}
    >
      {honk.active ? 'unhonk' : 'honk!'}
    </button>
  );
};

export default Honker;
