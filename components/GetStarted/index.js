import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import UIButton from "../UI/Button";
import Background from "../UI/Background";
import UserMobile from "../UserMobile";

const GetStarted = (props) => {
    return (
        <> 
            <Background>

                <View style={styles.viewText} >
                    <Text style={styles.uberText}>Uber</Text>
                    {/* <Text style={styles.getThereText}>Get there.</Text> */}
                    <Image style={{ marginLeft: 160, position: 'absolute' }} source={require('../../assets/images/Car1.png')} />
                    <Image style={{ marginLeft: 100, position: 'relative' }} source={require('../../assets/images/shadow.png')} />
                </View>

                <View style={{ flex: 1, backgroundColor: "#0d1724" }} />

                <UIButton onPress={()=> { props.navigation.navigate('UserMobile')  }} mystyle={{ marginTop: 120 }} text={"Get Started"}/>


            </Background>





        </>

    );
};


const styles = {
    viewText:{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flex: 4, borderBottomStartRadius: 50, borderBottomEndRadius: 50, backgroundColor: "#ffff66" },
    uberText:{ fontSize: 60, fontWeight: "900", color: '#080182', paddingTop: 80, },
    getThereText:{ fontSize: 30, fontWeight: "700", color: '#080182', },
}




export default GetStarted;

