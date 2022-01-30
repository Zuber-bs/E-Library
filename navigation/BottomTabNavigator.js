import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import TransactionScreen  from '../screens/TransactionScreen';
import SearchScreen from '../screens/SearchScreen';

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends React.Component {
  render() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Transaction" component={TransactionScreen}/>
                <Tab.Screen name="Search" component={SearchScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
  }
}


