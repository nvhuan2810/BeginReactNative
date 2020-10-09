import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Dimensions, Image, SafeAreaView, StyleSheet, Switch} from "react-native";
import OnLightImage from "../assets/light/bulb-on.jpg";
import OffLightImage from "../assets/light/bulb-off.jpg";

const screenWidth = Dimensions.get("window").width;
const screenHeight = (screenWidth * 925) / 631;

export default function TheLight() {
    const [isEnabled, setIsEnabled] = useState(false);
    //const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    function toggleSwitch(number) {
        setIsEnabled(!isEnabled);
    }

    return (
        <SafeAreaView style={styles.container}>

            <StatusBar style="light" />

            <Image source={isEnabled ? OnLightImage : OffLightImage} style={styles.lightImageStype}/>

            <Switch
                // trackColor={{ false: "#767577", true: "#81b0ff" }}
                // thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                // ios_backgroundColor="#3e3e3e"
                onValueChange={() => toggleSwitch(1)}
                value={isEnabled}
            />
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
    },

    lightImageStype: {
        width: screenWidth,
        height: screenHeight,
    }

  });