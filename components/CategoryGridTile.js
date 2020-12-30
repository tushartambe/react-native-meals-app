import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform, TouchableNativeFeedback } from 'react-native';

const CategoryGridTile = (props) => {
  let TouchbleCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchbleCmp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.gridItem}>
      <TouchbleCmp
        style={{ flex: 1 }}
        onPress={props.onSelect}>
        <View style={{ ...styles.tile, ...{ backgroundColor: props.color } }}>
          <Text style={styles.title}>{props.title}</Text>
        </View>
      </TouchbleCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: Platform.OS === 'android' && Platform.Version >= 21 ? 'hidden' : 'visible',
    elevation: 5

  },
  tile: {
    flex: 1,
    borderRadius: 10,

    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',

    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'right'
  }
});

export default CategoryGridTile;
