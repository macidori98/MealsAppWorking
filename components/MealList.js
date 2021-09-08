import React from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import Meals from '../models/meal';
import MealCard from './MealCard';
import {useSelector} from 'react-redux';

const MealList = props => {
  /**
   * @type {Meals[]}
   */
  const favoriteMeals = useSelector(state => state.meals.favoriteMeals);

  /**
   *
   * @param {Meals} itemData
   */
  const renderMealItem = itemData => {
    const isFavorite = favoriteMeals.some(meal => meal.id === itemData.id);

    return (
      <MealCard
        title={itemData.title}
        duration={itemData.duration.toString()}
        complexity={itemData.complexity}
        imageUrl={itemData.imageUrl}
        affordability={itemData.affordability}
        onSelectMeal={() =>
          props.navigation.navigate({
            routeName: 'MealDetail',
            params: {
              mealId: itemData.id,
              mealTitle: itemData.title,
              isFav: isFavorite,
            },
          })
        }
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        renderItem={meal => renderMealItem(meal.item)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});

export default MealList;
