import React from "react";
import { View, StyleSheet, Text, Pressable, Dimensions } from "react-native";
import colors from "../utils/colors";
import ImgBg from "./ImgBg";
import Para from "./Para";


function Head() {
    return <View style={styles.headContainer}>

        <View style={styles.heading}>
            <Text style={styles.title}>the tim ferriss show and now</Text>
            <Pressable onPress={() => console.log("go to author page")}>
                <Text style={styles.author}>tim ferriss</Text>
            </Pressable>
        </View>
        <View style={styles.img}>
            <ImgBg src={require("../assets/1.png")} />
        </View>
    </View>
}
export default function HeadPodcast() {
    return <View>
        <Head />
        <View style={{ padding: 20, backgroundColor: "red" }}>


            <Para txt="The fix to this warning is simpler than you think: get rid of the ScrollView,
            and places all the components that surround the FlatList inside ListFooterComponent and ListHeaderComponent.
            Let’s see how this works in practice. In this example, we have an app where the user can scroll through different recipes.
            The main view consists of a ScrollView and inside that view, we have a collection of components such as a header, a footer, some text, and a cover photo. It looks something like this:" />
            <Para txt="The main view consists of a ScrollView and inside that view, we have a collection of components such as a header, a footer, some text, and a cover photo. It looks something like this:" />
        </View>
    </View>
}

const styles = StyleSheet.create({
    headContainer: {
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between"

    },
    img: {
        width: 90,
        height: 90,
        backgroundColor: "#ddd",
        borderRadius: 10,
        overflow: "hidden"
    },
    heading: {
        flexDirection: "column",
        justifyContent: "center",
        maxWidth: Dimensions.get("screen").width - 120,
    },
    title: {
        fontSize: 23,
        color: colors.heading,
        textTransform: "capitalize",
        marginBottom: 10
    },
    author: {
        color: colors.primary,
        textTransform: "capitalize"
    }
})