import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchMainScreen from './SearchMainScreen'
import ProfileScreen from './ProfileScreen'
import colors from '../constants/colors';
import AppointmentScreen from './AppointmentScreen'
import ExploreScreen from './ExploreScreen'

const Tab = createBottomTabNavigator();

const BottomTabScreens = () => {
  return (
    <Tab.Navigator
      initialRouteName="Search"
      tabBarOptions={{
        activeTintColor: colors.primary,
      }}
    >
      <Tab.Screen name='Search' component={SearchMainScreen}
        options={{
          tabBarLabel:'Search',
          tabBarIcon:({color, size}) => (
            <Icon name='search' color={color} size={size}/>
          )
        }}
      />
      <Tab.Screen name='Appointments' component={AppointmentScreen}
        options={{
          tabBarLabel:'Appointments',
          tabBarIcon:({color, size}) => (
            <MaterialCommunityIcons name='clock-outline' color={color} size={size}/>
          )
        }}
      />
      <Tab.Screen name='Explore' component={ExploreScreen}
        options={{
          tabBarLabel:'Explore',
          tabBarIcon:({color, size}) => (
            <Icon name='compass' color={color} size={size}/>
          )
        }}
      />
      <Tab.Screen name='Profile' component={ProfileScreen}
        options={{
          tabBarLabel:'Profile',
          tabBarIcon:({color, size}) => (
            <Icon name='user-o' color={color} size={size}/>
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabScreens

const styles = StyleSheet.create({})
