import React, { useState } from "react";
import { View, StyleSheet, Text, Pressable, Dimensions } from "react-native";
import colors from "../utils/colors";
import ImgBg from "./ImgBg";
import Para from "./Para";
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Seperator from "./Seperator";



function Head() {
    return <View style={styles.headContainer}>

        <View style={styles.img}>
            <ImgBg src={require("../assets/1.png")} />
        </View>
        <View style={styles.heading}>
            <Text style={styles.title}>the tim ferriss show and now</Text>
            <Pressable onPress={() => console.log("go to author page")}>
                <Text style={styles.author}>tim ferriss</Text>
            </Pressable>
        </View>
    </View>
}


export default function HeadPodcast() {

    const [showMore, setShowMore] = useState(false)
    const paras = [
        `The fix to this warning is simpler than you think: get rid of the Scroll View, and places all the components that surround the Flat List inside List Footer Component and ListHeader Component. Let’s see how this works in practice. In this example, we have an app where the user can scroll through different recipes.The main view consists of a ScrollView and inside that view, we have a collection of components such as a header, a footer, some text, and a cover photo. It looks something like this:`,
        `The main view consists of a ScrollView and inside that view, we have a collection of components such as a header, a footer, some text, and a cover photo. It looks something like this:`
    ]

    const getShortDesription = (paras) => {
        const maxChars = 225
        if (paras[0].length > maxChars) {
            return paras[0].substr(0, maxChars) + " ..."
        }
        return paras[0]

    }

    const onShowMore = () => setShowMore(!showMore)

    return <View>
        <View style={{ marginTop: 20 }}>

            <Head />
        </View>
        <View style={{ marginVertical: 20 }}>
            <View style={styles.headContainer}>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={[styles.SubscribeBtn, styles.seperateSpace]}>
                        <AntDesign name="plus" size={18} color={colors.primary} />
                        <Text style={{ marginLeft: 8 }}>Subscribe</Text>
                    </View>

                    <Ionicons
                        name="earth"
                        size={26}
                        color="black"
                        color={colors.primary}
                        style={styles.seperateSpace} />
                    <EvilIcons
                        name="share-google"
                        size={33}
                        color="black"
                        color={colors.primary}
                        style={styles.seperateSpace} />


                </View>


            </View>
        </View>
        <View style={styles.headContainer}>


            <View style={{ position: "relative", }}>

                {

                    showMore
                        ? paras.map((para, index) => <Para key={index} txt={para} />)
                        : <Para txt={getShortDesription(paras)} />
                }



                <View style={{ position: "absolute", bottom: 0, right: 0, }}>
                    <Pressable
                        onPress={onShowMore}
                    >
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ color: colors.primary, fontWeight: "bold", textTransform: "capitalize", }}>Show {showMore ? "Less" : "More"}</Text>
                            <EvilIcons name={showMore ? "chevron-up" : "chevron-down"} size={24} color={colors.primary} />
                        </View>
                    </Pressable>
                </View>
            </View>
        </View>



        <View style={styles.headContainer}>

            <View style={{ marginTop: 30, marginBottom: 10, flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <Text style={{ fontSize: 18, color: colors.text }} >150 Episodes</Text>
                <Pressable
                    onPress={() => {
                        console.log("pressed on nav eps")
                    }}>
                    <MaterialIcons name="filter-list" size={33}
                        color="black"
                        color={colors.text}
                        style={styles.seperateSpace}
                        style={{}} />
                </Pressable>
            </View>
        </View>

        <Seperator />
    </View>
}

const styles = StyleSheet.create({
    headContainer: {
        paddingHorizontal: 16,
        flexDirection: "row",
        justifyContent: "space-between"

    },
    img: {
        width: 100,
        height: 100,
        backgroundColor: "#ddd",
        borderRadius: 6,
        overflow: "hidden",
        marginRight: 10
    },
    heading: {
        flexDirection: "column",
        maxWidth: Dimensions.get("screen").width - 120,
    },
    title: {
        fontSize: 21,
        color: colors.heading,
        textTransform: "capitalize",
        marginBottom: 10
    },
    author: {
        color: colors.primary,
        textTransform: "capitalize"
    },
    SubscribeBtn: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: colors.muted,


    },
    seperateSpace: {
        marginRight: 20
    }
})