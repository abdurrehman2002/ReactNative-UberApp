import React from "react";
import { View, Text, backgroundColor} from "react-native";
import Background from "../UI/Background";


export default function Notifications() {
    return (
        <Background>
        
        <View style={{marginBottom:30, backgroundColor:'#0d0d0d', padding:20, }}>
            <Text style={{fontSize:20, color:'#fff', fontWeight:'bold', marginBottom:15,}}>System</Text>
            <Text style={{ fontSize:15, color:'#fff',  }}>Your booking #1684635 has been successed!</Text>
        </View>

        <View style={{marginBottom:30, backgroundColor:'#0d0d0d', padding:20, }}>
            <Text style={{fontSize:20, color:'#fff', fontWeight:'bold', marginBottom:15,}}>Promotion</Text>
            <Text style={{ fontSize:15, color:'#fff',  }}>Invite friends! Get 03 coupons each.</Text>
        </View>
        
        <View style={{marginBottom:30, backgroundColor:'#0d0d0d', padding:20, }}>
            <Text style={{fontSize:20, color:'#fff', fontWeight:'bold', marginBottom:15,}}>System</Text>
            <Text style={{ fontSize:15, color:'#fff',  }}>Your booking  #2384435  has been successed!</Text>
        </View>

        <View style={{marginBottom:30, backgroundColor:'#0d0d0d', padding:20, }}>
            <Text style={{fontSize:20, color:'#fff', fontWeight:'bold', marginBottom:15,}}>Promotion</Text>
            <Text style={{ fontSize:15, color:'#fff',  }}>Invite friends! Get 03 coupons each.</Text>
        </View>


        

        <View style={{marginBottom:30, backgroundColor:'#0d0d0d', padding:20, }}>
            <Text style={{fontSize:20, color:'#fff', fontWeight:'bold', marginBottom:15,}}>System</Text>
            <Text style={{ fontSize:15, color:'#fff',  }}>Your booking #1684635 has been successed!</Text>
        </View>

        </Background>
    )

}