import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Header from "./Header";
import Article from "./Article";

export default function Instagram() {

    return (
        <SafeAreaView style={styles.container}>

            <StatusBar style='dark' />

            <Header />

            <View style={styles.lineViewStype} />

            <Article />

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    lineViewStype: {
        height: 1,
        borderWidth: 1,
        borderColor: "#dbdbdb",
    },

});
