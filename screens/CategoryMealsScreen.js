import React from 'react';
import { useSelector } from 'react-redux';
import MealList from '../components/MealList';
import { CATEGORIES } from '../data/dummy-data';


const CategoryMealsScreen = (props) => {
  const availableMeals = useSelector(state => state.meals.filteredMeals);

  const categoryId = props.navigation.getParam('categoryId');

  const meals = availableMeals.filter(
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