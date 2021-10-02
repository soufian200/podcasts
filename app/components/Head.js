import React from "react"
import { ImageBackground, StyleSheet, View, Text } from "react-native"
import colors from "../utils/colors"

export default function Head({ img, title, date, ep, small = false }) {
    return <View style={styles.head}>
        <View style={[styles.img, { width: small ? 40 : 70, height: small ? 40 : 70 }]}>
            <ImageBackground
                source={img}
                style={{ width: "100%", height: "100%" }}
                resizeMode="cover"
            />
        </View>
        <View >
            <Text style={[styles.channelName, { color: ep ? colors.primary : colors.text }]}>Duolingo French Podcast</Text>
            <Text style={styles.date}>2 days age</Text>
        </View>
    </View >
}

const styles = StyleSheet.create({
    head: {
        flexDirection: "row",
    },
    img: {
        width: 70,
        height: 70,
        backgroundColor: colors.softGray,
        borderRadius: 4,
        marginRight: 10,
        overflow: "hidden"
    },
    channelName: {
        fontSize: 14,
        textTransform: "capitalize",
        color: colors.text,
    },
    date: {
        fontSize: 12,
        color: colors.gray,
    },
})