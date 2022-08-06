import React from "react";
import { View, Text, TextInput, Image } from "react-native"
import Background from "../UI/Background";
import UIButton from "../UI/Button";
// import PercentageCircle from 'react-native-percentage-circle';
import PercentageCircle from '../../libs/PercentageCircle'


export default function Profile() {
    return (
        <Background>
            <View style={{ flex: 1, padding: 20, }}>
                <Image source={require('../../assets/images/user.jpg')}
                    style={styles.ImageStyle}
                />


                <TextInput style={styles.Namestyle}
                    placeholder="Rehman"
                    placeholderTextColor="white"
                />
                <Text style={styles.EmailStyle}>+92 3051316618 | bawa@gmail.com</Text>


                <View style={{  flexDirection: 'row', justifyContent:'space-around', marginBottom:30 }}>
                    <View>
                        <PercentageCircle radius={70} percent={62} color={"#ffff66"}
                            borderWidth={10}
                            innerColor={'#dadb76'}
                        >
                            <Text style={{ fontSize: 15, color: '#0f0977', textAlign: 'center', fontWeight: "900" }} >62 Kilometers traveled</Text>
                        </PercentageCircle>
                    </View>

                    <View>
                        <PercentageCircle radius={70} percent={23} color={"#ffff66"}
                            borderWidth={10}
                            innerColor={'#dadb76'}
                        >
                            <Text style={{ fontSize: 15, color: '#0f0977', textAlign: 'center', fontWeight: "900" }} >23 Happy Reviews</Text>
                        </PercentageCircle>
                    </View>
                </View>





                <Text style={styles.InputLabel}>ABOUT DRIVER</Text>
                <TextInput style={styles.InputText}
                    placeholder="My name is Rehman who drives a upercar.
                    Find me when you feel depressed or want to un
                    happily. Fast but safe will greet you and don't
                    worry. I drive better then anyone. Thank you."
                    placeholderTextColor="white"
                    multiline={true}
                    numberOfLines={5}
                />

                <Text style={styles.InputLabel}>VEHICLE</Text>
                <TextInput style={styles.InputText}
                    placeholder="Maserati - KL 06 BN 1456"
                    placeholderTextColor="white"
                />

                <Text style={styles.InputLabel}>CAREER</Text>
                <TextInput style={styles.InputText}
                    placeholder="1 Year"
                    placeholderTextColor="white"
                />



                <UIButton onPress={() => { props.navigation.navigate('') }} text={"Edit Profile"} />



            </View>


        </Background>
    )

}

const styles = {
    InputText: { fontSize: 20, color: '#fff', borderBottomWidth: 1, borderColor: 'white', marginBottom: 50, },
    InputLabel: { color: 'white', fontSize: 18, fontWeight: "900", marginBottom: 5 },
    ImageStyle: {
        height: 80,
        marginLeft: "auto",
        marginRight: "auto",
        width: "50%",
        width: 80, borderRadius: 40, marginBottom: 20,
    },
    Namestyle: { fontWeight: "900", fontSize: 20, textAlign: 'center', color: '#fff' },
    EmailStyle: { fontWeight: "900", fontSize: 18, textAlign: 'center', color: '#fff', marginBottom: 40, }

}