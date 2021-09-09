import React, {useState, useEffect, useCallback} from 'react';
import {View, StyleSheet} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {useDispatch} from 'react-redux';
import CustomText from '../components/CustomText';
import FilterSwitch from '../components/FiltersSwitch';
import CustomHeaderButton from '../components/HeaderButton';
import Title from '../constants/Title';
import {setFilters} from '../store/actions/meals';

const FiltersScreen = props => {
  const {navigation} = props;
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegeterian, setIsVegeterian] = useState(false);

  const dispach = useDispatch();

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegeterian: isVegeterian,
    };

    dispach(setFilters(appliedFilters));
  }, [isGlutenFree, isLactoseFree, isVegeterian, isVegan, dispach]);

  useEffect(() => {
    navigation.setParams({save: saveFilters});
  }, [saveFilters, navigation]);

  return (
    <View style={styles.screen}>
      <CustomText style={styles.title}>
        Available Filter / Restrictions
      </CustomText>
      <FilterSwitch
        label="Gluten-free"
        state={isGlutenFree}
        onChange={value => setIsGlutenFree(value)}
      />
      <FilterSwitch
        label="Lactose-free"
        state={isLactoseFree}
        onChange={value => setIsLactoseFree(value)}
      />
      <FilterSwitch
        label="Vegan"
        state={isVegan}
        onChange={value => setIsVegan(value)}
      />
      <FilterSwitch
        label="Vegeterian"
        state={isVegeterian}
        onChange={value => setIsVegeterian(value)}
      />
    </View>
  );
};

FiltersScreen.navigationOptions = navData => {
  return {
    headerTitle: Title.Filters,
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
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Save"
          iconName="save-outline"
          onPress={() => {
            navData.navigation.getParam('save')();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    margin: 20,
  },
});

export default FiltersScreen;
