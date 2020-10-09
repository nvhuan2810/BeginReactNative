import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import InstagramImage from "../../assets/Instagram/img_instagram.jpg";
import CameraIcon from "../../assets/Instagram/ic_camera.png";
import SendIcon from "../../assets/Instagram/ic_send.png";

export default function Header() {
    return (
        <View style={styles.container}>

            <TouchableOpacity style={styles.headerTouchStyle}>
                <Image source={CameraIcon} style={styles.headerImageStype} />
            </TouchableOpacity>

            <Image source={InstagramImage} style={styles.instagramImageStype} />

            <TouchableOpacity style={styles.headerTouchStyle}>
                <Image source={SendIcon} style={styles.headerImageStype} />
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        height: 52,
        paddingStart: 15,
        paddingEnd: 15,
        backgroundColor: '#fff',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    instagramImageStype: {
        width: 120,
        height: 28,
        resizeMode: "contain"
    },

    headerTouchStyle: {
        width: 28,
        height: 28,
    },

    headerImageStype: {
        width: 28,
        height: 28,
    },
    
});