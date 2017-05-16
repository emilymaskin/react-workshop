import React from 'react';


const withDefaultCountPropNine = (Counter) => {
  return ({count}) => <Counter count={count || 9} />
}

export default withDefaultCountPropNine;
