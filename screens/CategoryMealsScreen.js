import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import CustomText from '../components/CustomText';
import MealCard from '../components/MealCard';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import Category from '../models/category';
import Meals from '../models/meal';

const CategoryMealsScreen = (props) => {
    /**
     * @type {string}
     */
    const categoryId = props.navigation.getParam('categoryId');

    /**
     * @type {Meals[]}
     */
    const meals = MEALS.filter(meal => meal.categoryIds.includes(categoryId))

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
                onSelectMeal={() => props.navigation.navigate({
                    routeName: 'MealDetail',
                    params: {
                        mealId: itemData.id,
                    },
                })} />
        );
    };

    return (
        <View
            style={styles.screen}>
            <FlatList
                data={meals}
                renderItem={(meal) => renderMealItem(meal.item)} />
        </View>
    );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
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

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
    },
});

export default CategoryMealsScreen;