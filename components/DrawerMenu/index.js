import React from 'react';
import { View, Text,} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from './CustomDrawer';
// import MapScreen from '../MapView';
import MapScreen2 from '../MapView/MapView2';


import TravelHistory from '../TravelHistory';
import ScreenItem from './ScreenItem';
import SelectVehicle from '../SelectVehicle';
import Profile from '../ProfileScreen';
import Notifications from '../NotificationScreen';
import Reviews from '../ReviewScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';




const Drawer = createDrawerNavigator();



export default function DrawerMenu() {
  return (

    <Drawer.Navigator
    initialRouteName="Home"
     
      screenOptions={{
        headerStyle: {
          backgroundColor: '#ffff66',
          // headerTintColor: '#fff', //Set Header text color

        }
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={TravelHistory}
        options={{...ScreenItem({IconFrom:Ionicons, icon:"md-home"}), }}
        
         />

      <Drawer.Screen name="Travel History" component={TravelHistory}
        options={ScreenItem({IconFrom:FontAwesome5, icon:"history"})}
         />

        <Drawer.Screen name="Notifications" component={Notifications}
        options={ScreenItem({IconFrom:Ionicons, icon:"notifications-sharp"})}
         />

        <Drawer.Screen name="Settings" component={TravelHistory}
        options={ScreenItem({IconFrom:Ionicons, icon:"md-settings-sharp"})}
         />
        <Drawer.Screen name="Driver Profile" component={Profile}
        options={ScreenItem({IconFrom:AntDesign, icon:"profile"})}
         />
        <Drawer.Screen name="Reviews" component={Reviews}
        options={ScreenItem({IconFrom:MaterialIcons, icon:"rate-review"})}
         />

        <Drawer.Screen name="Log Out" component={TravelHistory}
        options={ScreenItem({IconFrom:AntDesign, icon:"logout"})}
         />

    

    </Drawer.Navigator>
   
  );
}

