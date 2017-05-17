import { getIngredient, getIngredients } from '../models/Ingredient.js';
import { getRecipes } from '../models/Recipe.js';
/**
 * The root file that combines all of our resolvers
 */

// TODO: Write your resolvers
export default {
	Query: {
		recipes: (_, args) => getRecipes({
      vegetarian: args.vegetarian,
      ingredient: args.ingredient,
    }),
    ingredients: getIngredients,
    ingredient: (_, args) => getIngredient({_id: args._id}),
	},
  Recipe: {
    ingredients: (recipe) => recipe.ingredients.map(i => getIngredient(i))
  }
};
