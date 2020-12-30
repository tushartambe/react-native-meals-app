import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';

const FavoritesScreen = (props) => {
  const favoriteMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');
  return (
    <MealList meals={favoriteMeals} navigation={props.navigation}></MealList>
  );
}

FavoritesScreen.navigationOptions = {
  headerTitle: 'Your Favorites'
}

export default FavoritesScreen;