import React from 'react';
import { StyleSheet, Text, Button, FlatList, Platform, View } from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import Colors from '../constants/Colors';
import MealItem from '../components/MealItem';

const CategoryMealsScreen = (props) => {

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

  const categoryId = props.navigation.getParam('categoryId');

  const meals = MEALS.filter(
    meal => meal.categoryIds.indexOf(categoryId) >= 0
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={meals}
        renderItem={renderMealItem}
        style={{ width: '100%' }}
      >
      </FlatList>
    </View>
  );
}

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam('categoryId');
  const selectedCtegory = CATEGORIES.find(c => c.id === categoryId);

  return {
    headerTitle: selectedCtegory.title
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15
  }
});

export default CategoryMealsScreen;