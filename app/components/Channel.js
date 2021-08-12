import React from 'react';
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import colors from '../utils/colors';

export default function Channel({ item }) {

    return <View style={styles.container}>
        <ImageBackground source={item.img} resizeMode="cover" style={styles.image} ></ImageBackground>
    </View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.softGray,
        width: 72,
        height: 72,
        marginRight: 8,
        borderRadius: 8,
        overflow: "hidden"
    },
    image: {
        width: "100%",
        height: "100%"
    },
});