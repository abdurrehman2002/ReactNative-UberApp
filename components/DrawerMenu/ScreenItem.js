import React from 'react';
import {  View, Text,  Image } from 'react-native';


export default function ScreenItem ({IconFrom, icon}) {
    return {
         drawerLabelStyle: styles.drawerLabelStyle, 
          drawerActiveTintColor:'#bfbfbf',
          drawerIcon: ({focused, size}) => (
            <IconFrom
               name={icon}
               size={size}
               color={focused ? '#ffff66' : '#ffff66'}
            />
         ),
        
    }
}

const styles = {
    drawerLabelStyle: { color: '#fff', fontSize:16, fontWeight: "900"  }
  }