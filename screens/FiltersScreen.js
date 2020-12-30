import React, { useState, useEffect, useCallback } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Switch } from 'react-native-gesture-handler';
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';

const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{ false: "#767577", true: Colors.primary }}
        thumbColor={Platform.OS === 'android' ? Colors.primary : ''}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  )
}

const FiltersScreen = (props) => {
  const { navigation } = props;
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian
    }
    console.log(appliedFilters);
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

  useEffect(() => {
    navigation.setParams({
      save: saveFilters
    });
  }, [saveFilters])

  return (
    <View style={styles.screen}>
      <Text style={styles.title}> Apply Filters </Text>
      <FilterSwitch
        label='Gluten-free'
        state={isGlutenFree}
        onChange={setIsGlutenFree}></FilterSwitch>

      <FilterSwitch
        label='Lactose-free'
        state={isLactoseFree}
        onChange={setIsLactoseFree}></FilterSwitch>

      <FilterSwitch
        label='Vegan'
        state={isVegan}
        onChange={setIsVegan}></FilterSwitch>

      <FilterSwitch
        label='Vegetarian'
        state={isVegetarian}
        onChange={setIsVegetarian}></FilterSwitch>

    </View>
  );
}

FiltersScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: 'Filters',
    headerLeft: () => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item title="Menu" iconName='ios-menu' onPress={() => {
            navigationData.navigation.toggleDrawer();
          }} />
        </HeaderButtons>
      )
    },
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item title="Save" iconName='ios-save' onPress={
            navigationData.navigation.getParam('save')
          } />
        </HeaderButtons>
      )
    }
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center',
    margin: 20
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 15
  }
});

export default FiltersScreen;