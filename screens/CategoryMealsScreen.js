import React from 'react';
import MealList from '../components/MealList';
import {CATEGORIES, MEALS} from '../data/dummy-data';
import Category from '../models/category';
import Meals from '../models/meal';

const CategoryMealsScreen = props => {
  /**
   * @type {string}
   */
  const categoryId = props.navigation.getParam('categoryId');

  return (
    <MealList listData={getMeals(categoryId)} navigation={props.navigation} />
  );
};

/**
 * @param {string} categoryId
 * @returns {Meals[]}
 */
const getMeals = categoryId => {
  return MEALS.filter(meal => meal.categoryIds.includes(categoryId));
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
