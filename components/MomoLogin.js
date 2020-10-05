import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons'

const marginStartOrEnd = 25;
const screenWidth = Dimensions.get("window").width;
const widthTouchable = screenWidth - marginStartOrEnd * 2;
const heightTouchable = 52;

export default function MomoLogin() {
  return (
    <SafeAreaView style={styles.container}>

      <StatusBar style='light' />

      <View style={styles.infoStype}>
        <Text style={styles.textBoldStyle}>Xin chào!</Text>
        <Text style={styles.textNormalStyle}>Ngô Văn Huân</Text>
        <Text style={styles.textNormalStyle}>0944219286</Text>
      </View>

      <View style={styles.passwordViewStyle}>

        <Feather style={styles.featherStype} name="lock" size={18} ab />

        <TextInput style={styles.passwordTextInputStyle} placeholder="Nhập mật khẩu" placeholderTextColor="#929292" secureTextEntry={true} />

      </View>

      <TouchableOpacity style={styles.loginTouchStyle}>
        <Text style={styles.loginTextStyle}>ĐĂNG NHẬP</Text>
      </TouchableOpacity>

      <View style={styles.moreViewStyle}>

        <TouchableOpacity>
          <Text style={styles.moreTextStyle}>QUÊN MẬT KHẨU</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.moreTextStyle}>THOÁT TÀI KHOẢN</Text>
        </TouchableOpacity>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#af006e',
    alignItems: "center",
  },

  infoStype: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 150,
  },

  textBoldStyle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 5,
  },

  textNormalStyle: {
    color: "#fbfcff",
    fontWeight: "normal",
    fontSize: 20,
    marginTop: 10,
  },

  passwordViewStyle: {
    width: widthTouchable,
    height: heightTouchable,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 200,
    marginTop: 35,
    marginStart: marginStartOrEnd,
    marginEnd: marginStartOrEnd,
  },

  passwordTextInputStyle: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
  },

  featherStype: {
    color: "#929292",
    position: "absolute",
    left: 20,
  },

  loginTouchStyle: {
    width: widthTouchable,
    height: heightTouchable,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8d005a",
    borderRadius: 200,
    marginTop: 15,
    marginStart: marginStartOrEnd,
    marginEnd: marginStartOrEnd,
  },

  loginTextStyle: {
    color: "#fff",
    fontWeight: "normal",
    fontSize: 18,
  },

  moreViewStyle: {
    width: widthTouchable,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
    marginStart: marginStartOrEnd,
    marginEnd: marginStartOrEnd,
  },

  moreTextStyle: {
    color: "#fff",
    fontWeight: "normal",
    fontSize: 18,
  },

});
