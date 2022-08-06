import React from "react";
import { View, Text, TouchableOpacity } from "react-native";


const UIButton = (props) => {
  return (
    <View style={{ alignItems: 'center', }} >
      <TouchableOpacity {...props} style={{ ...styles.TouchableOpacityText, ...props.mystyle }}>
        <Text style={styles.Text}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = {
  TouchableOpacityText: { width: 310, height: 50, backgroundColor: '#ffff66', marginBottom: 10, borderRadius: 20, },
  Text: { paddingTop: 12, textAlign: 'center', fontSize: 20, fontWeight: "900", color: '#080182' },

}



export default UIButton;