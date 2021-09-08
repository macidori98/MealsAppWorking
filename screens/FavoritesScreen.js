import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import MealList from '../components/MealList';
import {useSelector} from 'react-redux';
import Meals from '../models/meal';
import CustomText from '../components/CustomText';

const FavoritesScreen = props => {
  /**
   * @type {Meals[]}
   */
  const fav = useSelector(state => state.meals.favoriteMeals);

  if (fav.length > 0) {
    return <MealList listData={fav} navigation={props.navigation} />;
  } else {
    return (
      <View style={styles.content}>
        <CustomText>No favorite meals found. Start Adding some!</CustomText>
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
