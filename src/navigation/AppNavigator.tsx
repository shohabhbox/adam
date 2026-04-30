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
import ArchivedTripScreen from '@/screens/TravelTimeline/ArchivedTripScreen';
import UpgradePremiumScreen from '@/screens/Subscription/UpgradePremiumScreen';
import SettingsScreen from '@/screens/Settings/SettingsScreen';
import NotificationsScreen from '@/screens/Notifications/NotificationsScreen';
import DeleteAccountScreen from '@/screens/Settings/DeleteAccountScreen';
import HelpSupportScreen from '@/screens/Settings/HelpSupportScreen';
import PendingInvitesScreen from '@/screens/Friends/PenddingInvites/PendingInvites';
import RemovedScreen from '@/screens/Friends/RemovedFriend/RemovedScreen';
import ProcessingScreen from '@/screens/ImportLocation/ProcessingScreen';
import ImportResultsScreen from '@/screens/ImportLocation/location/ImportResultsScreen';
import ImportLocationDetailScreen from '@/screens/ImportLocation/LocationDetail/LocationDetailScreen';
import AddToTripScreen from '@/screens/Trips/AddToTrip/AddToTripScreen';
import NewCategoryScreen from '@/screens/Category/NewCategory';

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
        name={SCREENS.NewCategoryScreen}
        component={NewCategoryScreen}
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
        name={SCREENS.AddToTripScreen}
        component={AddToTripScreen}
      />
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
      <Stack.Screen
        name={SCREENS.FriendsProfileScreen}
        component={FriendsProfileScreen}
      />
      <Stack.Screen
        name={SCREENS.AddFriendScreen}
        component={AddFriendScreen}
      />
      <Stack.Screen
        name={SCREENS.InvitationsScreen}
        component={InvitationsScreen}
      />
      <Stack.Screen
        name={SCREENS.PendingInvitesScreen}
        component={PendingInvitesScreen}
      />
      <Stack.Screen name={SCREENS.RemovedScreen} component={RemovedScreen} />
      <Stack.Screen
        name={SCREENS.TravelTimelineScreen}
        component={TravelTimelineScreen}
      />
      <Stack.Screen
        name={SCREENS.ArchivedTripScreen}
        component={ArchivedTripScreen}
      />
      <Stack.Screen
        name={SCREENS.UpgradePremiumScreen}
        component={UpgradePremiumScreen}
      />
      <Stack.Screen name={SCREENS.SettingsScreen} component={SettingsScreen} />
      <Stack.Screen
        name={SCREENS.NotificationsScreen}
        component={NotificationsScreen}
      />
      <Stack.Screen
        name={SCREENS.DeleteAccountScreen}
        component={DeleteAccountScreen}
      />
      <Stack.Screen
        name={SCREENS.HelpSupportScreen}
        component={HelpSupportScreen}
      />
      <Stack.Screen
        name={SCREENS.ProcessingScreen}
        component={ProcessingScreen}
      />
      <Stack.Screen
        name={SCREENS.ImportResultsScreen}
        component={ImportResultsScreen}
      />
      <Stack.Screen
        name={SCREENS.ImportLocationDetailScreen}
        component={ImportLocationDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
