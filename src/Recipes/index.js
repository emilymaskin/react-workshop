import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { withRouter } from 'react-router'
import { compose, withState } from 'recompose';
import withLoading from '../withLoading';
import Preparation from './Preparation';
import Ingredients from './Ingredients';

const Query = gql`
  query RecipeQuery($vegetarian: Boolean, $ingredient: String) {
    recipes(vegetarian: $vegetarian, ingredient: $ingredient) {
      _id
      title
      ingredients {
        _id
        name
      }
      preparation
      vegetarian
    }
    ingredients {
      _id
      name
    }
  }
`;


const Recipes = ({
  data,
  vegetarianFilter,
  setVegetarianFilter,
  ingredientFilter,
  setIngredientFilter
}) => {
  return (
    <div>
      <h3>Vegetarian Filter</h3>
      <div>
        <button
          style={{ background: vegetarianFilter === null ? '#ccc' : '#fff' }}
          onClick={() => setVegetarianFilter(null)}
        >
          Off
        </button>
        <button
          style={{ background: vegetarianFilter === true ? '#ccc' : '#fff' }}
          onClick={() => setVegetarianFilter(true)}
        >
          Yes
        </button>
        <button
          style={{ background: vegetarianFilter === false ? '#ccc' : '#fff' }}
          onClick={() => setVegetarianFilter(false)}
        >
          No
        </button>
      </div>
      <h3>Ingredient Filter</h3>
      <div>
        <select
          value={ingredientFilter}
          onChange={({ target }) => {
            setIngredientFilter(target.value ? target.value : undefined);
          }}
        >
          <option value={''}>Not active</option>
          {data.ingredients.map(ingredient => (
            <option value={ingredient._id} key={ingredient._id}>
              {ingredient.name}
            </option>
          ))}
        </select>
      </div>
      <h1>Recipes</h1>
      {data.recipes.map(({ title, preparation, ingredients, _id }) => (
        <div key={_id}>
          <h2>{title}</h2>
          <h3>Preparation</h3>
          <Preparation preparation={preparation} />
          <h3>Ingredients</h3>
          <Ingredients ingredients={ingredients} />
        </div>
      ))}
    </div>
  )
}

const enhance = compose(
  withState('vegetarianFilter', 'setVegetarianFilter', null),
  withState('ingredientFilter', 'setIngredientFilter', null),
  graphql(Query, {
    options: props => {
      return {
        variables: {
          vegetarian: props.vegetarianFilter,
          ingredient: props.ingredientFilter,
        },
      }
    }
  }),
  withLoading,
  withRouter
);

export default enhance(Recipes);
