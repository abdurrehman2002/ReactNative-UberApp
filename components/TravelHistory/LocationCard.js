import React from 'react';
import { View, Text, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const LocationCard = (props) => {
    return (
        <>
        <View style={{ flexDirection: 'row', }}>
        <Ionicons name="location-sharp" size={25} color={props.IconColor} />
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', }} >
            <Text style={{ color: '#fff', fontWeight: "700", fontSize: 20 }}>{props.Title}</Text>
            <Text style={{ color: '#fff', fontWeight: "700", fontSize: 20 }}>{props.Time}</Text>
        </View>
    </View >
    <Text style={{ marginLeft: 28, color: '#fff', fontWeight: "700", fontSize: 20 }}>{props.LocationName}</Text>
    
    </>
    
    )
}

export default LocationCard;



