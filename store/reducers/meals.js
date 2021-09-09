import {MEALS} from '../../data/dummy-data';
import Meals from '../../models/meal';
import {SET_FILTERS, TOGGLE_FAVORITE} from '../actions/meals';

/**
 * @typedef {{meals: Meals[], filteredMeals: Meals[], favoriteMeals: Meals[]}} StateObj
 * @typedef {{glutenFree: boolean, lactoseFree: boolean, vegan: boolean, vegeterian: boolean}} FilterObj
 */
/**
 * @type {StateObj}
 */
const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

/**
 *
 * @param {StateObj} state
 * @param {import('../actions/meals').Action} action
 * @returns {StateObj}
 */
const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(
        meal => meal.id === action.mealId,
      );
      if (existingIndex >= 0) {
        const updatedFavMeals = [...state.favoriteMeals];
        updatedFavMeals;
        updatedFavMeals.splice(existingIndex, 1);
        return {...state, favoriteMeals: updatedFavMeals};
      } else {
        const meal = state.meals.find(meal => meal.id === action.mealId);
        return {
          ...state,
          favoriteMeals: state.favoriteMeals.concat(meal),
        };
      }
    case SET_FILTERS:
      const appliedFilters = action.filters;
      const filteredMeals = state.meals.filter(meal => {
        if (appliedFilters.glutenFree && !meal.isGlutenFree) {
          return false;
        }

        if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
          return false;
        }

        if (appliedFilters.vegeterian && !meal.isVegeterian) {
          return false;
        }

        if (appliedFilters.vegan && !meal.isVegan) {
          return false;
        }

        return true;
      });

      return {...state, filteredMeals: filteredMeals};
    default:
      return state;
  }
};

export default mealsReducer;
