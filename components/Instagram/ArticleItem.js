import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

export default function ArticleItem({ item }) {

    const [isHeart, setIsHeart] = useState(false);
    const [isBookmark, setIsBookmark] = useState(false);
    
    function heartSwitch() {
        setIsHeart(!isHeart);
    }

    function bookmarkSwitch() {
        setIsBookmark(!isBookmark);
    }

    return (
        <View style={styles.itemParentStyle}>

            <View style={styles.topItemStyle}>

                <View style={styles.topLeftItemStyle}>

                    <TouchableOpacity>
                        <Image source={item.titleImage} style={styles.titleImageStyle} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={styles.titleTextStyle} numberOfLines={2}>{item.title}</Text>
                    </TouchableOpacity>

                </View>

                <TouchableOpacity style={styles.moreTouchableStyle}>
                    <Feather name="more-horizontal" size={22} color="#000000" />
                </TouchableOpacity>

            </View>

            <TouchableOpacity style={styles.bannerTouchableStyle}>
                <Image source={item.bannerImage} style={styles.bannerStyle} />
            </TouchableOpacity>

            <View style={styles.iconParentStyle}>

                <View style={styles.leftIconParentStyle}>

                    <TouchableOpacity onPress={() => heartSwitch(item)}>
                        <FontAwesome style={styles.iconStyle} name="heart-o" size={22} color={isHeart ? "red" : "black"} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <SimpleLineIcons style={styles.iconStyle} name="bubble" size={22} color="black" />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <SimpleLineIcons style={styles.iconStyle} name="paper-plane" size={22} color="black" />
                    </TouchableOpacity>

                </View>

                <TouchableOpacity style={styles.bookmarkTouchableStyle} onPress={() => bookmarkSwitch(item)}>
                    <FontAwesome style={styles.iconStyle} name="bookmark-o" size={22} color={isBookmark ? "red" : "black"} />
                </TouchableOpacity>

            </View>

            <Text style={styles.viewTextStyle} numberOfLines={1}>{item.viewCount + " lượt xem"}</Text>

            <Text style={styles.timeTextStyle} numberOfLines={1}>{item.time}</Text>

        </View>
    );
}

const styles = StyleSheet.create({

    itemParentStyle: {
        marginBottom: 25,
    },

    topItemStyle: {
        height: 60,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginStart: 15,
        marginEnd: 15,
    },

    topLeftItemStyle: {
        height: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginEnd: 15,
    },

    titleImageStyle: {
        width: 38,
        height: 38,
        resizeMode: "cover",
        borderRadius: 100,
    },

    titleTextStyle: {
        color: "#000000",
        fontSize: 15,
        fontWeight: "bold",
        marginStart: 10,
    },

    moreTouchableStyle: {
        height: "100%",
        width: 50,
        alignItems: "flex-end",
        justifyContent: "center",
    },

    bannerTouchableStyle: {
        height: 400,
        width: "100%",
    },

    bannerStyle: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },

    iconParentStyle: {
        height: 48,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginStart: 8,
        marginEnd: 8,
    },

    leftIconParentStyle: {
        height: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginEnd: 15
    },

    iconStyle: {
        marginStart: 7,
        marginEnd: 7,
    },

    bookmarkTouchableStyle: {
        height: "100%",
        alignItems: "flex-end",
        justifyContent: "center",
    },

    viewTextStyle: {
        color: "#000000",
        fontSize: 15,
        fontWeight: "bold",
        marginStart: 15,
    },

    timeTextStyle: {
        color: "#999999",
        fontSize: 14,
        marginStart: 15,
        marginTop: 5,
    },

});