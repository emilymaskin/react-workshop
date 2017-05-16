import React from 'react';


const withDefaultCountPropNine = (Counter, defaultCount) => {
  return ({count}) => <Counter count={count || defaultCount} />
}

export default withDefaultCountPropNine;
