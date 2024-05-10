import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import { StyleSheet } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons'
import Profile from '../screens/Profile';
import Chat from '../screens/Chat';
import Notifications from '../screens/Notifications';
import Test from '../screens/Test';

export default function TabBottom() {
  const TabBottom = createBottomTabNavigator();

  return (
    <TabBottom.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <TabBottom.Screen
        name="Home"
        component={ Home }
        options={{
          tabBarIcon: () => <Ionicons name='home-outline' size={25} /> 
        }}
      />

      <TabBottom.Screen
        name="Profile"
        component={ Profile }
        options={{
          tabBarIcon: () => <Ionicons name='person-outline' size={25} />,
          tabBarStyle: { display: 'none' }
        }}
      />

      <TabBottom.Screen
        name="Chat"
        component={ Chat }
        options={{
          tabBarStyle: { display: 'none' }
        }}
      />

      <TabBottom.Screen
        name="Notifications"
        component={ Notifications }
        options={{
          tabBarIcon: () => <Ionicons name='notifications-outline' size={25} />,
          tabBarStyle: { display: 'none' }
        }}
      />


      <TabBottom.Screen
        name="Test"
        component={ Test }
      />
    </TabBottom.Navigator>
  )
}

