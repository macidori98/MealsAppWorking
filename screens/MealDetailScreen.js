import React, {useCallback, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import CustomText from '../components/CustomText';
import Meals from '../models/meal';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import Title from '../constants/Title';
import ListItem from '../components/ListItem';
import {useDispatch, useSelector} from 'react-redux';
import {toggleFavorite} from '../store/actions/meals';

const MealDetailScreen = props => {
  /**
   * @type {string}
   */
  var mealId = props.navigation.getParam('mealId');

  /**
   * @type {Meals[]}
   */
  const availableMeals = useSelector(state => state.meals.meals);

  /**
   * @type {Meals}
   */
  const meal = availableMeals.find(m => m.id == mealId);

  /**
   * @type {boolean}
   */
  const currentMealsIsFavorite = useSelector(state =>
    state.meals.favoriteMeals.some(meal => mealId === meal.id),
  );

  const dispach = useDispatch();
  const toggleFavoriteHandler = useCallback(() => {
    dispach(toggleFavorite(mealId));
  }, [dispach, mealId]);

  useEffect(() => {
    props.navigation.setParams({toggleFav: toggleFavoriteHandler});
    //props.navigation.setParams({mealTitle: meal.title});
  }, [meal]);

  useEffect(() => {
    props.navigation.setParams({isFav: currentMealsIsFavorite});
  }, [currentMealsIsFavorite]);

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
  const mealTitle = navigationData.navigation.getParam('mealTitle');

  /**
   * @type {boolean}
   */
  const isFav = navigationData.navigation.getParam('isFav');

  const toggleFavorite = navigationData.navigation.getParam('toggleFav');
  return {
    headerTitle: mealTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title={Title.Favorites}
          iconName={isFav ? 'ios-star' : 'ios-star-outline'}
          onPress={() => {
            toggleFavorite();
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
