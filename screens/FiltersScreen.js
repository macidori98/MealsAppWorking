import {TERMINATORLESS_TYPES} from '@babel/types';
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import Title from '../constants/Title';

const FiltersScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The filters screen</Text>
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
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FiltersScreen;
