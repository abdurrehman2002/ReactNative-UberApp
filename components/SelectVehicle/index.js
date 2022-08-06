import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import UIButton from "../UI/Button";


export default function SelectVehicle(props) {
    return (

        <> 
            <View style={{marginBottom:20 }}>
                <View style={{ backgroundColor: '#0d0d0e', justifyContent: 'center', flexDirection: 'row', }} >

                    <TouchableOpacity >
                        <View style={{ flexDirection: 'column', }}>
                            <Image source={require('../../assets/images/car.png')} resizeMode='contain' style={{ height: 50, }} />
                            <Text style={{ color: '#ffffff', fontWeight:"700", flex: 0.9, textAlign: 'center', marginTop: 10 }}>Economy</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity >
                        <View style={{ flexDirection: 'column', marginLeft: 20 }}>
                            <Image source={require('../../assets/images/luxCar.png')} resizeMode='contain' style={{ height: 50, }} />
                            <Text style={{ color: '#ffffff', fontWeight: "700", flex: 0.9, textAlign: 'center', marginTop: 10 }}>Luxury</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity >
                        <View style={{ flexDirection: 'column', marginLeft: 20 }}>
                            <Image source={require('../../assets/images/familyCar.png')} resizeMode='contain' style={{ height: 50, }} />
                            <Text style={{ color: '#ffffff', fontWeight: "700", flex: 0.9, textAlign: 'center', marginTop: 10 }}>Family</Text>
                        </View>
                    </TouchableOpacity>

                </View>

            </View>

            <UIButton onPress={() => { props.navigation.navigate('ConfirmVehicle') }} text={"Send Request"} />


        </>



    )
}