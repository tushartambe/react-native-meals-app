import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import MealItem from './MealItem';

const MealList = (props) => {

  const renderMealItem = itemData => {
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        affordability={itemData.item.affordability}
        complexity={itemData.item.complexity}
        image={itemData.item.imageUrl}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: 'MealDetails',
            params: {
              mealId: itemData.item.id
            }
          })
        }}
      ></MealItem>
    );
  }

  return (
    <View style={styles.list}>
      <FlatList
        data={props.meals}
        renderItem={renderMealItem}
        style={{ width: '100%' }}
      >
      </FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15
  }
});

export default MealList;
