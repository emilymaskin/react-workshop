import React from 'react';

const Preparation = ({
  preparation,
}) => {
  return (
    <div>
      {preparation.map(entry => <p key={entry}>{entry}</p>)}
    </div>
  );
}

export default Preparation;
