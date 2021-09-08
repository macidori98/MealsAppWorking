import React from 'react';
import {useSelector} from 'react-redux';
import MealList from '../components/MealList';
import {CATEGORIES} from '../data/dummy-data';
import Category from '../models/category';
import Meals from '../models/meal';

const CategoryMealsScreen = props => {
  /**
   * @type {string}
   */
  const categoryId = props.navigation.getParam('categoryId');

  /**
   * @type {Meals[]}
   */
  const availableMeals = useSelector(state => {
    return state.meals.filteredMeals;
  });

  return (
    <MealList
      listData={getMeals(availableMeals, categoryId)}
      navigation={props.navigation}
    />
  );
};

/**
 * @param {Meals[]} meals
 * @param {string} categoryId
 * @returns {Meals[]}
 */
const getMeals = (meals, categoryId) => {
  return meals.filter(meal => meal.categoryIds.includes(categoryId));
};

CategoryMealsScreen.navigationOptions = navigationData => {
  /**
   * @type {string}
   */
  const categoryId = navigationData.navigation.getParam('categoryId');

  /**
   * @type {Category}
   */
  const selectedCategory = CATEGORIES.find(cat => cat.id == categoryId);

  return {
    headerTitle: selectedCategory.title,
  };
};

export default CategoryMealsScreen;
