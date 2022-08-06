import React from "react";
import { View, Text,} from "react-native"
import PercentageCircle from '../../libs/PercentageCircle'
import AntDesign from 'react-native-vector-icons/AntDesign';


export default function Stars() {
    return (

                <View style={{flexDirection:'row', marginTop:8}}>
                <AntDesign name={"heart"} size={18} color={'#ffff66'} style={{marginLeft:20}} 
                />
                <AntDesign name={"heart"} size={18} color={'#ffff66'}  style={{marginLeft:5}} 
                />
                <AntDesign name={"heart"} size={18} color={'#ffff66'}  style={{marginLeft:5}} 
                />
                <AntDesign name={"heart"} size={18} color={'#ffff66'}  style={{marginLeft:5}} 
                />
                <AntDesign name={"hearto"} size={18} color={'#ffff66'} style={{marginLeft:5}}
                />
                </View>
            

    )

}