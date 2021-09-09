import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import CustomText from '../components/CustomText';
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
  const availableMeals = useSelector(
    /**@param {{meals: import('../store/reducers/meals').StateObj}} state */ state => {
      return state.meals.filteredMeals;
    },
  );

  const filteredMeals = getMeals(availableMeals, categoryId);

  if (filteredMeals.length > 0) {
    return <MealList listData={filteredMeals} navigation={props.navigation} />;
  } else {
    return (
      <View style={styles.content}>
        <CustomText>No meals found.</CustomText>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

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
