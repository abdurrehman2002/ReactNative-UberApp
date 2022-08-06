import React from "react";
import { View, Text, TextInput } from "react-native";
import Background from "../UI/Background";
import UIButton from '../UI/Button';

const VerifyCode = (props) => {
    return (
        <Background >
            <View>
                <Text style={styles.codeText}>A code has been sent to</Text>
                <Text style={styles.codeNumberText}>+92 3051316618</Text>


                <View style={styles.viewText}>

                    <TextInput style={styles.inputText}
                        placeholder="6"
                        placeholderTextColor="white"
                    />

                    <TextInput style={styles.inputText}
                        placeholder="6"
                        placeholderTextColor="white"
                    />

                    <TextInput style={styles.inputText}
                        placeholder="6"
                        placeholderTextColor="white"
                    />

                    <TextInput style={styles.inputText}
                        placeholder="6"
                        placeholderTextColor="white"
                    />

                </View>



                <Text style={styles.sendCodeText}> Send another code</Text>

            </View>
            <UIButton onPress={() => { props.navigation.navigate('UserName') }} text={"VerifyCode"} mystyle={{ marginTop: 100 }}text={"Next"}></UIButton>
        </Background>
    )
}


const styles = {
    codeText: { fontSize: 20, color: 'white', marginLeft: 20, marginTop: 30 },
    codeNumberText: { fontSize: 20, color: 'white', marginLeft: 20, marginTop: 0 },
    viewText: { marginLeft: 50, marginRight: 50, marginTop: 80, justifyContent: 'space-between', flexDirection: 'row', },
    inputText: { fontSize: 25, color: 'white', borderRadius: 10, width: 60, backgroundColor: '#24293e', padding: 10, borderColor: 'white', textAlign: 'center' },
    sendCodeText: { fontSize: 18, color: '#ffff66', textAlign: 'center', marginTop: 20, },
}


export default VerifyCode;