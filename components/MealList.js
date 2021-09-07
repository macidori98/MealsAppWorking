import React from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import Meals from '../models/meal';
import MealCard from './MealCard';

const MealList = props => {
  /**
   *
   * @param {Meals} itemData
   */
  const renderMealItem = itemData => {
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
