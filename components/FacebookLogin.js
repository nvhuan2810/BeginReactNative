import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Dimensions, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import BannerImage from "../assets/logo_facebook.png";

const screenWidth = Dimensions.get("window").width;
const screenHeight = (screenWidth * 463) / 757;

const marginStartOrEnd = 25;
const mainWidth = screenWidth - marginStartOrEnd * 2;

export default function FacebookLogin() {
    return (
        <View style={styles.container}>

            <StatusBar style='light' />

            <Image source={BannerImage} style={styles.bannerImageStype} />

            <SafeAreaView style={styles.safeAreaViewStype}>

                <View style={styles.mainViewStype}>

                    <View style={styles.emailTextInputViewStyle}>

                        <TextInput style={styles.textInputStyle} placeholder="Số điện thoại hoặc email" placeholderTextColor="#cccccc" />

                    </View>

                    <View style={styles.passwordTextInputViewStyle}>

                        <TextInput style={styles.textInputStyle} placeholder="Mật khẩu" placeholderTextColor="#cccccc" secureTextEntry={true} />

                    </View>

                    <TouchableOpacity style={styles.loginTouchStyle}>
                        <Text style={styles.loginTextStyle}>Đăng nhập</Text>
                    </TouchableOpacity>

                    <View style={styles.forgotPasswordViewStyle}>

                        <Button style={styles.buttonStyle} title="Quên mật khẩu?" />

                        <Button style={styles.buttonStyle} title="Quay lại" />

                    </View>

                </View>

                <View style={styles.footerViewStype}>

                    <View style={styles.lineViewStype}>
                        <Text style={styles.orTextStype}>HOẶC</Text>
                    </View>

                    <TouchableOpacity style={styles.newAccountTouchStyle}>
                        <Text style={styles.newAccountTextStyle}>Tạo tài khoản mới</Text>
                    </TouchableOpacity>

                </View>

            </SafeAreaView>
            
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: "center",
    },

    bannerImageStype: {
        width: screenWidth,
        height: screenHeight,
    },

    safeAreaViewStype: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
    },

    mainViewStype: {
        width: mainWidth,
        marginTop: 25,
        flexDirection: "column",
    },

    emailTextInputViewStyle: {
        height: 50,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        backgroundColor: "#fff",
        borderColor: "#cecece",
        borderWidth: 1,
        borderRadius: 2,
    },

    passwordTextInputViewStyle: {
        height: 50,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        backgroundColor: "#fff",
        borderColor: "#cecece",
        borderWidth: 1,
        borderRadius: 2,
        borderTopWidth: 0,
    },

    textInputStyle: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 18,
        paddingStart: 10,
    },

    loginTouchStyle: {
        width: "100%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1977f3",
        borderRadius: 8,
        marginTop: 15,
    },

    loginTextStyle: {
        color: "#b2c8f6",
        fontWeight: "normal",
        fontSize: 19,
    },

    forgotPasswordViewStyle: {
        margin: 20,
        flexDirection: "column",
    },

    buttonStyle: {
        color: "#1977f3",
        fontWeight: "normal",
        fontSize: 18,
        margin: 20,
    },

    footerViewStype: {
        width: mainWidth,
        flexDirection: "column",
        marginBottom: 15,
    },

    orTextStype: {
        color: "#000000",
        fontSize: 16,
        position: "absolute",
        paddingStart: 10,
        paddingEnd: 10,
        backgroundColor: "#fff",
    },

    lineViewStype: {
        height: 1,
        marginBottom: 30,
        marginStart: 40,
        marginEnd: 40,
        borderWidth: 1,
        borderColor: "#cdcdcf",
        justifyContent: "center",
        alignItems: "center"
    },

    newAccountTouchStyle: {
        width: "100%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e7f4ff",
        borderRadius: 8,
    },

    newAccountTextStyle: {
        color: "#1977f3",
        fontWeight: "normal",
        fontSize: 19,
    },

});