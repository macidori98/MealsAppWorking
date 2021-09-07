import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';
import {HeaderButton} from 'react-navigation-header-buttons';

const CustomHeaderButton = props => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Icon}
      iconSize={23}
      color={Platform.OS === 'android' ? Colors.white : Colors.primaryColor}
    />
  );
};

const styles = StyleSheet.create({});

export default CustomHeaderButton;
