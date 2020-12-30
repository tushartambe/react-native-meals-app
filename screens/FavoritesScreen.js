import React from 'react';
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from '../components/HeaderButton';
import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';

const FavoritesScreen = (props) => {
  const favoriteMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');
  return (
    <MealList meals={favoriteMeals} navigation={props.navigation}></MealList>
  );
}

FavoritesScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: 'Your Favorites',
    headerLeft: () => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item title="Menu" iconName='ios-menu' onPress={() => {
            navigationData.navigation.toggleDrawer();
          }} />
        </HeaderButtons>
      )
    }
  }
}

export default FavoritesScreen;