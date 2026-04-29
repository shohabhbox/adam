import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomTabBar from './CustomTabBar';
import Icon, { Icons } from '@/components/Icon';
import HomeScreen from '@/screens/Home/HomeScreen';
import SavedScreen from '@/screens/Saved/SavedScreen';
import TripsScreen from '@/screens/Trips/TripsScreen';
import OfflineScreen from '@/screens/Offline/OfflineScreen';

const Tab = createBottomTabNavigator();

const tabs = [
  { name: 'Home', icon: 'map-outline', screen: HomeScreen },
  { name: 'Trips', icon: 'compass-outline', screen: TripsScreen },
  { name: 'Add', icon: 'add-circle-outline', screen: HomeScreen },
  { name: 'Saved', icon: 'location-outline', screen: SavedScreen },
  { name: 'Offline', icon: 'wifi', screen: OfflineScreen },
];

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
      }}
    >
      {tabs.map(tab => (
        <Tab.Screen key={tab.name} name={tab.name} component={tab.screen} />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
