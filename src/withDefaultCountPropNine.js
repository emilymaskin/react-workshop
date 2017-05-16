import React from 'react';


const withDefaultCountPropNine = (Counter) => {
  return ({count}) => <Counter count={count || 9} />
  //return (props) => <Counter count={9} {...props} />
}

export default withDefaultCountPropNine;
