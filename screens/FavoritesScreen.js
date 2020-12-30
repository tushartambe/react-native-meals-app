import React from 'react';
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from 'react-redux';
import HeaderButton from '../components/HeaderButton';
import MealList from '../components/MealList';

const FavoritesScreen = (props) => {
  const favoriteMeals = useSelector(state => state.meals.favoriteMeals);
  return (
    <MealList meals={favoriteMeals} navigation={props.navigation} />
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