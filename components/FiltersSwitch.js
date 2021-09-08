import React from 'react';
import {
  Dimensions,
  Platform,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';
import Colors from '../constants/Colors';

const FilterSwitch = props => {
  return (
    <View style={styles.filterContainer}>
      <Text style={{fontFamily: 'OpenSans-Regular'}}>{props.label}</Text>
      <Switch
        trackColor={{true: Colors.primaryColor}}
        thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}
        value={props.state}
        onValueChange={newValue => props.onChange(newValue)}></Switch>
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: Dimensions.get('screen').width - 100,
    marginBottom: 30,
  },
});

export default FilterSwitch;
