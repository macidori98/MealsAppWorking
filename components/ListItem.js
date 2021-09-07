import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Colors from '../constants/Colors';

const ListItem = props => {
  return (
    <View style={styles.listItem}>
      <Text>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    marginVertical: 10,
    marginHorizontal: 30,
    borderWidth: 1,
    padding: 10,
    borderColor: Colors.grey,
  },
});

export default ListItem;
