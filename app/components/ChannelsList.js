import React from 'react';
import { Text, View, StyleSheet, FlatList } from "react-native";
import Channel from './Channel';
import colors from "../utils/colors";


export default function ChannelsList() {
    const DATA = [
        {
            id: 1,
            img: require("../assets/1.png")
        },
        {
            id: 2,
            img: require("../assets/2.png")
        },
        {
            id: 3,
            img: require("../assets/3.png")
        },
        {
            id: 4,
            img: require("../assets/4.jpg")
        },
        {
            id: 5,
            img: require("../assets/5.png")
        },
        {
            id: 6,
            img: require("../assets/3.png")
        },
    ];

    const renderItem = ({ item }) => <Channel item={item} />
    return <View style={styles.container}>
        <FlatList
            style={styles.list}
            horizontal data={DATA}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            showsHorizontalScrollIndicator={false}
            ListFooterComponent={<View style={{ width:20,height: 20 }} />}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
    list: {
        padding: 20,
        borderBottomColor: colors.muted,
        borderBottomWidth: 1
    }
});