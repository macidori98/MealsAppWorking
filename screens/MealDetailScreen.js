import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import CustomText from '../components/CustomText';
import {MEALS} from '../data/dummy-data';
import Meals from '../models/meal';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import Title from '../constants/Title';
import ListItem from '../components/ListItem';

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
    <ScrollView>
      <Image source={{uri: meal.imageUrl}} style={styles.image} />
      <View style={styles.details}>
        <CustomText>{meal.duration}m</CustomText>
        <CustomText>{meal.complexity.toUpperCase()}</CustomText>
        <CustomText>{meal.affordability.toUpperCase()}</CustomText>
      </View>
      <CustomText style={styles.title}>Ingredients:</CustomText>
      {meal.ingredients.map(m => (
        <ListItem key={m}>{m}</ListItem>
      ))}
      <CustomText style={styles.title}>Steps:</CustomText>
      {meal.steps.map((s, i) => (
        <ListItem key={s}>
          <Text style={{fontWeight: 'bold'}}>{i + 1}. </Text>
          {s}
        </ListItem>
      ))}
    </ScrollView>
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
  image: {
    width: '100%',
    height: Dimensions.get('screen').height * (1 / 3),
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 15,
  },
});

export default MealDetailScreen;
