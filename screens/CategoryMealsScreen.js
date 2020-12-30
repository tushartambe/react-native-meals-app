import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import DefaultText from '../components/DefaultText';
import MealList from '../components/MealList';
import { CATEGORIES } from '../data/dummy-data';


const CategoryMealsScreen = (props) => {
  const availableMeals = useSelector(state => state.meals.filteredMeals);

  const categoryId = props.navigation.getParam('categoryId');

  const meals = availableMeals.filter(
    meal => meal.categoryIds.indexOf(categoryId) >= 0
  );

  if (meals.length === 0) {
    return (
      <View style={styles.content}>
        <DefaultText>
          No Meals Found! Check your filters!
      </DefaultText>
      </View>
    );
  }

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

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default CategoryMealsScreen;