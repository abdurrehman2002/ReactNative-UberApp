import React from "react";
import { View, SafeAreaView, ScrollView } from "react-native";


const Background = (props) => {
    return (
        
        <SafeAreaView style={{ flex: 1, backgroundColor: '#0d1724', ...props.mystyle }} >
            <ScrollView>
                {props.children}

            </ScrollView>
        </SafeAreaView>
    )
}


export default Background;