import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import { StyleSheet } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons'
import Profile from '../screens/Profile';
import Chat from '../screens/Chat';
import Notifications from '../screens/Notifications';
import Test from '../screens/Test';
import Prescription from '../screens/Prescription';
import Revenues from '../screens/Revenues';
import Materials from '../screens/Materials';
import NewAppointment from '../screens/NewAppointment';

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
          tabBarButton: () => null,
        }}
      />

      <TabBottom.Screen
        name="Chat"
        component={ Chat }
        options={{
          tabBarButton: () => null,
        }}
      />

      <TabBottom.Screen
        name="Notifications"
        component={ Notifications }
        options={{
          tabBarButton: () => null,
        }}
      />


      <TabBottom.Screen
        name="Test"
        component={ Test }
        options={{
          
        }}
      />

      <TabBottom.Screen
        name="Prescription"
        component={ Prescription }
        options={{
          tabBarButton: () => null,
        }}
      />


      <TabBottom.Screen
        name="Revenues"
        component={ Revenues }
        options={{
          tabBarButton: () => null,
        }}
      />

      <TabBottom.Screen
        name="Materials"
        component={ Materials }
        options={{
          tabBarButton: () => null,
        }}
      />

      <TabBottom.Screen
        name="NewAppointment"
        component={ NewAppointment }
        options={{
          tabBarButton: () => null,
        }}
      />
    </TabBottom.Navigator>
  )
}

