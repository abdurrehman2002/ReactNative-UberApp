import React from "react";
import { View, Text, TextInput } from "react-native";
import Background from "../UI/Background";
import UIButton from '../UI/Button';

const UserMobile = (props) => {
    return (
        <Background >
            <View>
                <Text style={styles.mobileText}>Enter your Mobile Number</Text>

                <TextInput style={styles.mobileInput}
                    placeholder="+92 3051316618"
                    placeholderTextColor="white"
                />

                <Text style={styles.confirmText} >By countinuing,I confirm i have</Text>

                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <Text style={styles.readText}>read the</Text>
                    <Text style={styles.privacyText}> Privacy Policy</Text>
                </View>

            </View>
            <UIButton onPress={() => { props.navigation.navigate('VerifyCode') }} mystyle={{ marginTop: 120 }} text={"Accept & Continue"}></UIButton>
        </Background>
    )
}

const styles = {
    mobileText: { fontSize: 20, color: 'white', marginLeft: 20, marginTop: 30 },
    mobileInput: { marginTop: 80, fontSize: 20, color: 'white', margin: 12, borderBottomWidth: 0.5, padding: 10, borderColor: 'white' },
    confirmText: { fontSize: 18, color: 'white', marginLeft: 20, marginTop: 30 },
    readText: { fontSize: 18, color: 'white', marginLeft: 20 },
    privacyText: { fontSize: 18, color: '#ffff66', },
}


export default UserMobile;