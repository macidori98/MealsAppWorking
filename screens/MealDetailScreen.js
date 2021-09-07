import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import CustomText from '../components/CustomText';
import {MEALS} from '../data/dummy-data';
import Meals from '../models/meal';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import Title from '../constants/Title';

const MealDetailScreen = props => {
  /**
   * @type {string}
   */
  var mealId = props.navigation.getParam('mealId');

  /**
   * @type {Meals}
   */
  const meal = MEALS.find(m => m.id == mealId);

  return (
    <View style={styles.screen}>
      <CustomText>{meal.title}</CustomText>
    </View>
  );
};

MealDetailScreen.navigationOptions = navigationData => {
  /**
   * @type {string}
   */
  var mealId = navigationData.navigation.getParam('mealId');

  /**
   * @type {Meals}
   */
  const meal = MEALS.find(m => m.id == mealId);

  return {
    headerTitle: meal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title={Title.Favorites}
          iconName="ios-star-outline"
          onPress={() => {
            console.log('pressed');
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MealDetailScreen;
