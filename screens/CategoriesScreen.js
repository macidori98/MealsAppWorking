import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import CategoryGridTile from '../components/CategoriGridTile';
import CustomText from '../components/CustomText';
import {CATEGORIES} from '../data/dummy-data';
import Category from '../models/category';
import Icon from 'react-native-vector-icons/Ionicons';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {Header} from 'react-native/Libraries/NewAppScreen';
import CustomHeaderButton from '../components/HeaderButton';

const CategoriesScreen = props => {
  const [screenWidth, setScreenWidth] = useState(
    Math.floor(Dimensions.get('screen').width / 150),
  );

  /**
   * @param {Category} itemData
   */
  const renderGridItem = itemData => {
    return (
      <CategoryGridTile
        title={itemData.title}
        color={itemData.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'CategoryMeals',
            params: {
              //as many key-value pairs as i want
              categoryId: itemData.id,
            },
          });
        }}
      />
    );
  };

  return (
    <View>
      <FlatList
        numColumns={screenWidth}
        data={CATEGORIES}
        renderItem={item => renderGridItem(item.item)}
      />
    </View>
  );
};

CategoriesScreen.navigationOptions = navData => {
  return {
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoriesScreen;
