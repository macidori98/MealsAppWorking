import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import CategoryGridTile from '../components/CategoriGridTile';
import CustomText from '../components/CustomText';
import { CATEGORIES } from '../data/dummy-data';
import Category from '../models/category';
import Icon from 'react-native-vector-icons/Ionicons';

const CategoriesScreen = (props) => {
    const [screenWidth, setScreenWidth] = useState(Math.floor(Dimensions.get('screen').width / 150));

    /**
    * @param {Category} itemData 
    */
    const renderGridItem = (itemData) => {
        return (<CategoryGridTile
            title={itemData.title}
            color={itemData.color}
            onSelect={() => {
                props.navigation.navigate({
                    routeName: 'CategoryMeals',
                    params: {
                        //as many key-value pairs as i want
                        categoryId: itemData.id,
                    }
                })
            }} />
        );
    };

    return (
        <View>
            <FlatList
                numColumns={screenWidth}
                data={CATEGORIES}
                renderItem={(item) => renderGridItem(item.item)} />
        </View>

    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CategoriesScreen;