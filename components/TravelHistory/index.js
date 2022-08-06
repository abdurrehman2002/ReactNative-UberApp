import React from 'react';
import { View, Text, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LocationCard from './LocationCard';
import Background from '../UI/Background';

export default function TravelHistory() {
    return (

        <>
            <Background mystyle={{backgroundColor: '#fff'}}>
            <HistoryCard />
            <HistoryCard />
            <HistoryCard />
            <HistoryCard />
            </Background>
        </>

    )
}

const HistoryCard = () => {
    return (

        <View style={{ backgroundColor: '#0d0d0e', flexDirection: 'column', marginBottom: 20 }} >

            <View style={{ padding: 20 }}>
                <LocationCard IconColor={"blue"} Title={"Pick Up"} Time={"11:30 am"} LocationName={"SpringWod"} />

                <Text numberOfLines={1} style={{ marginBottom: 20, marginTop: 20, marginLeft: 28, color: 'blue', }}>
                    _______________________________________________________
                </Text>

                <LocationCard IconColor={"green"} Title={"Drop OFF"} Time={"12:30 pm"} LocationName={"Bridge Farm"} />


            </View>




            <Image source={require('../../assets/images/HistoryCar.png')} resizeMode='contain' style={{ height: 80, marginBottom: 25 }} />

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 }}>
                <Text style={{ marginLeft: 30, color: '#fff', fontWeight: "700", fontSize: 20 }}>Audi Q7</Text>
                <Text style={{ marginRight: 30, color: '#fff', fontWeight: "700", fontSize: 20 }}>23$</Text>
            </View >




        </View>
    )
}