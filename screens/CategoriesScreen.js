import React from 'react';
import {
  FlatList
} from 'react-native';
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CategoryGridTile from '../components/CategoryGridTile';
import HeaderButton from '../components/HeaderButton';
import { CATEGORIES } from '../data/dummy-data';


const CategoriesScreen = props => {
  const renderGridItem = itemData => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'CategoryMeals', params: {
              categoryId: itemData.item.id
            }
          });
        }}></CategoryGridTile>
    );
  };

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

CategoriesScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: 'Meal Categories',
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

export default CategoriesScreen;
