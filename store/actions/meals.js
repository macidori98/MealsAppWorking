export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITES';
export const SET_FILTERS = 'SET_FILTERS';

/**
 * @typedef {TOGGLE_FAVORITE|SET_FILTERS} Type
 * @typedef {string|import("../reducers/meals").FilterObj} Data
 * @typedef {{type: Type, mealId: string}} Fav
 * @typedef {{type: Type, filters: import("../reducers/meals").FilterObj}} Fil
 * @typedef {Fav|Fil} Action
 */

/**
 * @param {string} id
 * @returns {Fav}
 */
export const toggleFavorite = id => {
  return {type: TOGGLE_FAVORITE, mealId: id};
};

/**
 * @param {import("../reducers/meals").FilterObj} filterSettings
 * @returns {Fil}
 */
export const setFilters = filterSettings => {
  return {type: SET_FILTERS, filters: filterSettings};
};
