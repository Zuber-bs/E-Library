import React from 'react';
import { View, StyleSheet } from 'react-native'
import BottomTabNavigator from './navigation/BottomTabNavigator';

export default class App extends React.Component {
  render() {
    return (
      <BottomTabNavigator />
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});