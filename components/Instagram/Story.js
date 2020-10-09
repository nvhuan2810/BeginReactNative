import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { stories } from './Model/StoryModel';
import addImage from "../../assets/Instagram/ic_add.png";

export default function Story() {
    
    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.articleItem}>
            <View style={item.id === "4" ? styles.bgBrownImageStyle : styles.bgImageStyle}>
                <Image source={item.image} style={styles.imageStyle} />
                <Image source={addImage} style={item.id === "1" ? styles.addImageStyle : styles.noneImageStyle} />
            </View>
            <Text style={styles.textStyle} numberOfLines={1}>{item.title}</Text>
        </TouchableOpacity>
    )

    return (
        <FlatList key={renderItem.id} style={styles.container} horizontal={true} data={stories} renderItem={renderItem} keyExtractor={renderItem => renderItem.id} showsHorizontalScrollIndicator={false}/>
    );
    
}

const styles = StyleSheet.create({

    container: {
        height: 100,
        paddingStart: 12,
        backgroundColor: '#fafafa',
    },

    articleItem: {
        width: 80,
        marginTop: 15,
        flexDirection: "column",
        alignItems: "center",
    },

    bgImageStyle: {
        width: 54,
        height: 54,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
        backgroundColor: "#fff",
        borderColor: "#c7359d",
        borderWidth: 1,
    },

    bgBrownImageStyle: {
        width: 54,
        height: 54,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
        backgroundColor: "#fff",
        borderColor: "#999999",
        borderWidth: 1,
    },

    imageStyle: {
        width: 48,
        height: 48,
        resizeMode: "cover",
        borderRadius: 100,
    },

    addImageStyle: {
        width: 20,
        height: 20,
        position: "absolute",
        right: 0,
        bottom: 0,
    },

    noneImageStyle: {
        width: 0,
        height: 0,
        position: "absolute",
        right: 0,
        bottom: 0,
    },

    textStyle: {
        marginTop: 3,
        color: "#333333",
        fontSize: 13,
        textAlign: "center",
    },

});