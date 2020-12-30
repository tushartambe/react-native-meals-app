import React from 'react';
import { StyleSheet, Text, Button, FlatList, Platform, View } from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import Colors from '../constants/Colors';
import MealList from '../components/MealList';

const CategoryMealsScreen = (props) => {
  const categoryId = props.navigation.getParam('categoryId');

  const meals = MEALS.filter(
    meal => meal.categoryIds.indexOf(categoryId) >= 0
  );

  return (
    <MealList meals={meals} navigation={props.navigation}>
    </MealList>
  );
}

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(c => c.id === categoryId);

  return {
    headerTitle: selectedCategory.title
  }
}


export default CategoryMealsScreen;