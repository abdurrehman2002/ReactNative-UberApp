import React from 'react';
import {  View, Text,  Image } from 'react-native';
import {  DrawerContentScrollView, DrawerItemList, DrawerItem, DrawerItems } from '@react-navigation/drawer';





export default function CustomDrawerContent(props) {
    return (
      <View style={{ flex: 1, backgroundColor: "#0d1724", padding: 10, color: '#fff' }}>
        <DrawerContentScrollView {...props}
          style={{ flex: 1, backgroundColor: "#0d1724", padding: 10, color: '#fff' }}
        // contentContainerStyle={{backgroundColor:"#8200d6"}}
        >
          {/* <ImageBackground source={require('../../assets/images/Car1.png')} 
          style={{ padding: 20, }} >
            </ImageBackground> */}
  
          <Image source={require('../../assets/images/user.jpg')}
            style={{
              marginLeft: 90, height: 80,
              width: 80, borderRadius: 40, marginBottom: 10,
            }}
          />
  
          <Text style={{
            textAlign: 'center',
            color: 'white',
            fontSize: 18, fontWeight: "900", marginBottom: 5
          }}>Bawa G</Text>
          <Text style={{ textAlign: 'center', color: 'white', }}>bawa@gmail.com</Text>
  
          <Text numberOfLines={1} style={{ color: '#ffff66', marginTop: 40, marginBottom:20, marginLeft: 25, }}>
            _________________________________
          </Text>
  
          <DrawerItemList {...props}  />
  
       
  
        </DrawerContentScrollView>
  
      </View>
  
    );
  }