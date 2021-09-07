import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import {Platform} from 'react-native';
import Colors from '../constants/Colors';
import Title from '../constants/Title';
import FavoritesScreen from '../screens/FavoritesScreen';

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        headerTitle: Title.Categories,
      },
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor:
          Platform.OS === 'android' ? Colors.primaryColor : Colors.white,
      },
      headerTintColor:
        Platform.OS === 'android' ? Colors.white : Colors.primaryColor,
    },
  },
);

/*const MealsFavTabNavigator = createBottomTabNavigator({
  Meal: MealsNavigator,
  Fav: FavoritesScreen,
});*/

export default createAppContainer(MealsNavigator);
