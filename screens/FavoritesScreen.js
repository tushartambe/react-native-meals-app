import React from 'react';
import { StyleSheet, View } from 'react-native';
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from 'react-redux';
import DefaultText from '../components/DefaultText';
import HeaderButton from '../components/HeaderButton';
import MealList from '../components/MealList';

const FavoritesScreen = (props) => {
  const favoriteMeals = useSelector(state => state.meals.favoriteMeals);
  if (favoriteMeals.length === 0 || !favoriteMeals) {
    return (<View style={styles.content}>
      <DefaultText>
        No favorites found. Start adding some!
      </DefaultText>
    </View>)
  }
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

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default FavoritesScreen;