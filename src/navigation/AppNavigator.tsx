import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SCREENS } from '@/constant';
import HomeScreen from '@/screens/Home/HomeScreen';

const Stack = createNativeStackNavigator();

import BottomTabNavigator from './BottomTabNavigator';
import SearchScreen from '@/screens/Search/SearchScreen';
import LocationDetailScreen from '@/screens/Location/LocationDetailScreen';
import SelectCategoryScreen from '@/screens/Category/SelectCategoryScreen';
import SavedLocationDetail from '@/screens/Saved/SaveLocationDetail';
import CreateTripScreen from '@/screens/Trips/CreateTripScreen';
import TripDetailScreen from '@/screens/Trips/TripDetail/TripDetailScreen';
import ManageMembersScreen from '@/screens/Members/ManageMembersScreen';
import EditTripScreen from '@/screens/Trips/EditTrip/EditTripScreen';
import ReorderScreen from '@/screens/Trips/Reorder/ReorderScreen';
import TripPlaces from '@/screens/Trips/Places/TripPlaceScreen';
import AISuggestionsScreen from '@/screens/Trips/AISuggestions/AISuggestionsScreen';
import ProfileScreen from '@/screens/Profile/ProfileScreen';
import FilterTabs from '@/screens/Friends/FilterTabs';
import FriendsScreen from '@/screens/Friends/FriendsScreen';
import FriendsProfileScreen from '@/screens/Friends/FriendsProfileScreen';
import AddFriendScreen from '@/screens/Friends/AddFriendScreen';
import InvitationsScreen from '@/screens/Invitations/Invitations';
import TravelTimelineScreen from '@/screens/TravelTimeline/TravelTimelineScreen';

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTabs" component={BottomTabNavigator} />

      <Stack.Screen name={SCREENS.SearchScreen} component={SearchScreen} />
      <Stack.Screen
        name={SCREENS.LocationDetailScreen}
        component={LocationDetailScreen}
      />
      <Stack.Screen
        name={SCREENS.SelectCategoryScreen}
        component={SelectCategoryScreen}
      />
      <Stack.Screen
        name={SCREENS.SavedLocationDetail}
        component={SavedLocationDetail}
      />
      <Stack.Screen
        name={SCREENS.CreateTripScreen}
        component={CreateTripScreen}
      />
      <Stack.Screen name={SCREENS.EditTripScreen} component={EditTripScreen} />
      <Stack.Screen
        name={SCREENS.TripDetailScreen}
        component={TripDetailScreen}
      />
      <Stack.Screen name={SCREENS.ReorderScreen} component={ReorderScreen} />
      <Stack.Screen name={SCREENS.TripPlaces} component={TripPlaces} />
      <Stack.Screen
        name={SCREENS.AISuggestions}
        component={AISuggestionsScreen}
      />

      <Stack.Screen
        name={SCREENS.ManageMembersScreen}
        component={ManageMembersScreen}
      />

      <Stack.Screen name={SCREENS.ProfileScreen} component={ProfileScreen} />
      <Stack.Screen name={SCREENS.FriendsScreen} component={FriendsScreen} />
      <Stack.Screen name={SCREENS.FriendsProfileScreen} component={FriendsProfileScreen} />
      <Stack.Screen name={SCREENS.AddFriendScreen} component={AddFriendScreen} />
      <Stack.Screen name={SCREENS.InvitationsScreen} component={InvitationsScreen} />
      <Stack.Screen name={SCREENS.TravelTimelineScreen} component={TravelTimelineScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
