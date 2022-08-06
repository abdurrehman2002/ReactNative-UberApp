import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View, Linking } from "react-native";

import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Geolocation from 'react-native-geolocation-service';
import * as Location from 'expo-location';


//  import {check, PERMISSIONS, RESULTS} from 'react-native-permissions';
import * as Permissions from 'expo-permissions';


import GetStarted from "./components/GetStarted";
import UserMobile from "./components/UserMobile";
import VerifyCode from "./components/VerifyCode";
import UserName from "./components/UserName";
import HomeScreen from "./components/HomeScreen";
import ConfirmVehicle from "./components/ConfirmVehicle";
import SelectVehicle from "./components/SelectVehicle";

const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};


const App = () => {

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  // useEffect(() => {
  //   permissionFlow().then(resp => console.log("permission flow end"))
  // })


  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
  
      setLocation(location);
    })();
  }, []);

  return (

    <>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator initialRouteName="GetStarted">
          <Stack.Screen name="GetStarted" component={GetStarted} />
          <Stack.Screen name="UserMobile" component={UserMobile} />
          <Stack.Screen name="VerifyCode" component={VerifyCode} />
          <Stack.Screen name="UserName" component={UserName} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="ConfirmVehicle" component={ConfirmVehicle} />
          <Stack.Screen name="SelectVehicle" component={SelectVehicle} />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <VerifyCode /> */}
      {/* <GetStarted /> */}
      {/* <UserMobile /> */}
      {/* <UserName /> */}
      {/* <HomeScreen /> */}


    </>



  );
};


export default App;

