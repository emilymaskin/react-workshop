import React from 'react';


const withDefaultCountPropNine = (Counter, defaultCount) => {
  return ({count}) => <Counter count={count || defaultCount} />
  //return (props) => <Counter count={defaultCount} {...props} />
}

export default withDefaultCountPropNine;
