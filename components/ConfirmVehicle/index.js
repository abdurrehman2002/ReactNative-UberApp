import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Background from "../UI/Background";
import UIButton from "../UI/Button";


export default function ConfirmVehicle(props) {
    return (

        <>
            <View style={{marginBottom:20 }}>

                <View style={{ backgroundColor: '#0d0d0e',flexDirection: 'column',   }} >

                     <Text style={{ marginLeft:30, color:'#fff', fontWeight: "700", fontSize:20, marginBottom:25}} >Select Your Uber Taxi</Text>
                     <Image source={require('../../assets/images/SelectedCar.png')} resizeMode='contain' style={{ height: 50, marginBottom:25 }} />

                     <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:15}}>
                         <Text style={{ marginLeft:30, color:'#fff',fontWeight: "700", fontSize:20}}>Audi Q7</Text>
                         <Text style={{marginRight:30 , color:'#fff',fontWeight: "700", fontSize:20}}>23$</Text>
                     </View >

                     <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:15}}>
                         <Text style={{marginLeft:30 , color:'#fff',fontWeight: "700", fontSize:20}}>Seat Availability</Text>
                         <Text style={{marginRight:30 , color:'#fff',fontWeight: "700", fontSize:20}}>4 Person</Text>
                     </View >

                     <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:15}}>
                         <Text style={{marginLeft:30,  color:'#fff',fontWeight: "700", fontSize:20}}>Distance</Text>
                         <Text style={{marginRight:30 , color:'#fff',fontWeight: "700", fontSize:20}}>6.5 kms</Text>
                     </View >

                     <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:15}}>
                         <Text style={{marginLeft:30,  color:'#fff', fontWeight: "700", fontSize:20}}>Time</Text>
                         <Text style={{marginRight:30 , color:'#fff', fontWeight: "700", fontSize:20}}>25mins</Text>
                     </View >
                     

                </View>
            </View>

            <UIButton onPress={() => { props.navigation.navigate('') }} text={"Confirm"} />


        </>



    )
}