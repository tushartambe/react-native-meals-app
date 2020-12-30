import React, { useEffect } from 'react';
import { ScrollView, Image, StyleSheet, Text, View } from 'react-native';
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { MEALS } from '../data/dummy-data';
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';
import { useSelector } from 'react-redux';


const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>);
}

const MealDetailsScreen = (props) => {
  const availableMeals = useSelector(state => state.meals.meals);

  const mealId = props.navigation.getParam('mealId');
  const selectedMeal = availableMeals.find(meal => meal.id === mealId);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{selectedMeal.duration}m</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.textTitle}>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredient, index) => (
        <ListItem key={index} > { ingredient}</ListItem>
      ))}
      <Text style={styles.textTitle}>Steps</Text>
      {
        selectedMeal.steps.map((step, index) => (
          <ListItem key={index}>{step}</ListItem>
        ))
      }
    </ScrollView >
  );
}

MealDetailsScreen.navigationOptions = (navigationData) => {
  const mealTitle = navigationData.navigation.getParam('mealTitle');
  return {
    headerTitle: mealTitle,
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item title="Favorite" iconName='ios-star' onPress={() => {
            console.log("works");
          }} />
        </HeaderButtons>
      )
    }
  };
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around'
  },
  textTitle: {
    fontFamily: 'open-sans-bold',
    textAlign: 'center'
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10
  }
});

export default MealDetailsScreen;