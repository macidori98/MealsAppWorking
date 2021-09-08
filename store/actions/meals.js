export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITES';
export const SET_FILTERS = 'SET_FILTERS';

/**
 *
 * @param {string} id
 * @returns {{type: string, mealId: string}}
 */
export const toggleFavorite = id => {
  return {type: TOGGLE_FAVORITE, mealId: id};
};
