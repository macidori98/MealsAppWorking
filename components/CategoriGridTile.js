import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
} from 'react-native';
import Colors from '../constants/Colors';
import CustomText from './CustomText';

const CategoryGridTile = props => {
  let TouchableComponent = TouchableOpacity;
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  } else {
    TouchableComponent = TouchableOpacity;
  }

  return (
    <View style={{...styles.gridItem}}>
      <TouchableComponent style={{...styles.gridItem}} onPress={props.onSelect}>
        <View style={{...styles.container, ...{backgroundColor: props.color}}}>
          <CustomText style={styles.text}>{props.title}</CustomText>
        </View>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 10,
    height: 150,
    borderRadius: 20,
    overflow:
      Platform.OS === 'android' && Platform.Version >= 21
        ? 'hidden'
        : 'visible',
    elevation: 3,
  },
  container: {
    flex: 1,
    borderRadius: 20,
    shadowColor: Colors.black,
    shadowOpacity: 0.4,
    shadowOffset: {width: 0, height: 3},
    shadowRadius: 10,
    elevation: 3,
    justifyContent: 'flex-end', //fel le
    alignItems: 'flex-end', //jobbra balra
  },
  text: {
    paddingEnd: 10,
    paddingBottom: 10,
    fontSize: 20,
    maxWidth: '80%',
    textAlign: 'right',
  },
});

export default CategoryGridTile;
