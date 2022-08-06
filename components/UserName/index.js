import React from "react";
import { View, Text, TextInput } from "react-native";
import Background from "../UI/Background";
import UIButton from '../UI/Button';

const UserName = (props) => {
    return (
        <Background >
            <View>
                <Text style={styles.UseNameText}>Great!</Text>
                <Text style={styles.NameText}>And last, what is your name?</Text>

                <TextInput style={styles.UserNameInput}
                    placeholder="Bawa G"
                    placeholderTextColor="white"
                />



            </View>
            <UIButton onPress={() => { props.navigation.navigate('HomeScreen') }} text={"UserName"} mystyle={{ marginTop: 120 }} text={"Get a Uber Taxi"}></UIButton>
        </Background>
    )
}

const styles = {
    UseNameText: { fontSize: 20, color: 'white', marginLeft: 20, marginTop: 30, fontWeight: "900" },
    NameText: { fontSize: 16, color: 'white', marginLeft: 20, marginTop: 10 ,fontWeight: "900" },
    UserNameInput: {  marginTop: 80, fontSize: 20, color: 'white', margin: 12, borderBottomWidth: 0.5, padding: 10, borderColor: 'white',fontWeight: "900" },
    confirmText: { fontSize: 18, color: 'white', marginLeft: 20, marginTop: 30 },

}


export default UserName;