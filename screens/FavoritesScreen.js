import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import MealList from '../components/MealList';
import {MEALS} from '../data/dummy-data';

const FavoritesScreen = props => {
  const fav = MEALS.filter(meal => meal.id === 'm2');
  return <MealList listData={fav} navigation={props.navigation} />;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

FavoritesScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Your favorites',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default FavoritesScreen;
