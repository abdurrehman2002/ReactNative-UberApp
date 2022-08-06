import React from "react";
import { View, Text, TextInput, Image } from "react-native"
import Background from "../UI/Background";
import UIButton from "../UI/Button";
import PercentageCircle from '../../libs/PercentageCircle'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Stars from "./Stars";


export default function Reviews() {
    return (
        <Background>



            <View style={{ alignItems: 'center', marginBottom: 20, marginTop: 10 }}>
                <PercentageCircle radius={55} percent={23} color={"#ffff66"} 
                    borderWidth={10}
                    innerColor={'#dadb76'}
                >
                    <Text style={styles.ReviewText} >23 Happy Reviews</Text>
                </PercentageCircle>
            </View>
            <TextInput style={styles.Namestyle}
                placeholder="Rehman"
                placeholderTextColor="white"
            />
            <Text style={styles.EmailStyle}>+92 3051316618 | bawa@gmail.com</Text>


            <ReviewCard />
            <ReviewCard />
            <ReviewCard />

        </Background>
    )

}


const ReviewCard = () => {
    return (

        <>
            <View style={{ flexDirection: 'row', paddingLeft: 20, paddingRight: 20 }}>
                <Image source={require('../../assets/images/user.jpg')}
                    style={{ height: 60, width: 60, borderRadius: 40, }}
                />
                <View style={{ flex: 1, }}>
                    <Text style={styles.InputLabel}>Ann Marry</Text>
                    <Stars />
                </View>
                <Text style={{ fontSize: 15, color: '#fff', }} >12/02/2021</Text>

            </View>

            <View style={{ paddingLeft: 20, paddingRight: 20, marginLeft: 80 }}>
                <Text style={styles.InputText}>Thank you for taking me home safely late at
                    at night.And it was really fun while i went here
                    see you</Text>
                    <Text numberOfLines={1} style={styles.LineText}>
                    _________________________________________
                </Text>
            </View >

        </>
    )

}

const styles = {
    ReviewText:{ fontSize: 15, color: '#0f0977', textAlign: 'center', fontWeight: "900" },
    InputLabel: { color: 'white', fontSize: 18, fontWeight: "bold", marginLeft: 20 },
    InputText: {fontSize: 16, color: '#fff',  },
    LineText:{marginBottom: 20, marginTop: 5,  color: '#ffff66', },


    Namestyle: { fontWeight: "bold", fontSize: 20, textAlign: 'center', color: '#fff' },
    EmailStyle: { fontSize: 18, textAlign: 'center', color: '#fff', marginBottom: 50, }

}