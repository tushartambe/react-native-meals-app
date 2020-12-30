import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from '../components/HeaderButton';

const FiltersScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text> FiltersScreen </Text>
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
    }
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default FiltersScreen;