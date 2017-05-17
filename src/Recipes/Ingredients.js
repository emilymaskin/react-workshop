import React from 'react';

const Preparation = ({
  ingredients,
}) => {
  return (
    <div>
      {ingredients.map(ingredient => (
        <div key={ingredient._id}>
          {ingredient.name}
        </div>
      ))}
    </div>
  );
}

export default Preparation;
