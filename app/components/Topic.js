import React from "react";
import { ImageBackground, StyleSheet, View, Text, Pressable } from "react-native";
import colors from "../utils/colors";

export default function Topic({ item }) {
    return <Pressable onPress={() => console.log("go to : ", item.link)}>
        <View style={styles.topic}>
            <View style={styles.img}>
                <ImageBackground
                    source={item.img}
                    style={{ width: "100%", height: "100%" }}
                />
            </View>
            <Text style={styles.title}>{item.title}</Text>
        </View>
    </Pressable>
}

const styles = StyleSheet.create({
    topic: {
        flexDirection: "row",
        borderColor: colors.softGray,
        borderWidth: 1,
        padding: 15,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10
    },
    img: {
        width: 40,
        height: 40,
        borderRadius: 4,
        backgroundColor: "red",
        overflow: "hidden"
    },
    title: {
        marginLeft: 10,
    }

})