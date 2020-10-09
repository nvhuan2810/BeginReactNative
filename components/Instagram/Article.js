import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { articles } from './Model/ArticleModel';
import Story from './Story';
import ArticleItem from './ArticleItem';

export default function Article() {

    const renderItem = ({ item, index }) => {
        if (index === 0) {
            return (
                <>
                    <Story />
                    <View style={styles.lineViewStype} />
                    <ArticleItem item={item} />
                </>
            )
        } else {
            return (
                <ArticleItem item={item} />
            )
        }
    }

    return (
        <FlatList key={renderItem.id} style={styles.container} data={articles} renderItem={renderItem} keyExtractor={renderItem => renderItem.id} />
    );

}

const styles = StyleSheet.create({

    container: {
        backgroundColor: "#fff",
    },

    lineViewStype: {
        height: 1,
        borderWidth: 1,
        borderColor: "#dbdbdb",
    },

}); 