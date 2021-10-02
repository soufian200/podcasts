import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { View, StyleSheet, ScrollView, TextInput, ImageBackground, Text } from "react-native";
import { EvilIcons } from '@expo/vector-icons';
import colors from '../utils/colors';
import Seperator from '../components/Seperator';
import img from "../assets/5.png"
import Podcast from '../components/Podcast';
import Txt from '../components/Txt';
import { Dimensions } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';



const getShort = (Txt, maxChars = 16) => {

    if (Txt.length > maxChars) {
        return Txt.substr(0, maxChars) + " ..."
    }
    return Txt

}

const Channel = ({ item }) => {

    const { title, creator, img } = item

    return <View style={{ marginRight: 4 }}>
        <View style={styles.img}>
            <ImageBackground
                source={img}
                style={{ width: "100%", height: "100%" }}
                resizeMode="cover"
            />
        </View>
        <View style={{ marginTop: 10, maxWidth: 110, }}>
            {/* {item.title} */}
            <Txt style={{ color: colors.text, fontSize: 14, flexWrap: "wrap", fontWeight: "700", TxtTransform: "capitalize" }}>{title}</Txt>
            <Txt style={{ color: colors.gray, fontSize: 11 }} >{getShort(creator)}</Txt>
        </View>
    </View>
}

const Channels = () => {
    const DATA = []

    const CHANNELS = [
        {
            id: 1,
            img: require("../assets/1.png"),
            title: "the ramsey show",
            creator: "ramsey network"
        },
        {
            id: 2,
            img: require("../assets/2.png"),
            title: "the daily show withtrevor noah",
            creator: "daily show"
        },
        {
            id: 3,
            img: require("../assets/3.png"),
            title: "the ramsey show",
            creator: "ramsey network"
        },
        {
            id: 4,
            img: require("../assets/4.jpg"),
            title: "the ramsey show",
            creator: "ramsey network"
        },
        {
            id: 5,
            img: require("../assets/5.png"),
            title: "the ramsey show",
            creator: "ramsey network"
        },
    ];



    return <>
        {/* <View style={styles.container}>
            <View style={{ marginTop: 20, marginBottom: 10 }}>
                <View style={styles.searchbox}>
                    <EvilIcons name="search" size={24} color={colors.text} />
                    <TextInput style={styles.searchTxt} placeholder="Seach" />
                </View>
            </View>
        </View>


        <Seperator /> */}


        {/* ################ */}

        <View style={{ marginTop: 20, marginBottom: 20 }}>
            <View style={styles.container}>

                {/* <Txt style={{ marginBottom: 15, TxtTransform: "capitalize", fontSize: 16, fontFamily: "Roboto_500Medium" }}>
                    
                    </Txt> */}
                <Txt
                    fontWeight="Roboto_500Medium"
                    style={{ marginBottom: 15, fontSize: 16, marginLeft: 10 }}
                >Top podcasts in Business</Txt>
            </View>
            <FlatList
                data={CHANNELS}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <Channel item={item} />}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{ paddingLeft: 20 }}

            />

        </View>
        <Seperator />

    </>
}

function Abc() {
    const windowWidth = Dimensions.get('window').width;
    return <View style={{ width: windowWidth }}>

        <FlatList
            ListHeaderComponent={Channels}
            data={[
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
            ]}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <Podcast small={true} item={item} />}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <Seperator />}
        />
    </View>
}



function ForYou() {





    return <View>

        {/* <View style={{ backgroundColor: "red" }}><Txt>hello world</Txt></View> */}

        <View>

            <FlatList
                data={
                    [
                        {
                            id: 1,
                            items: [
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
                            ]
                        },
                        {
                            id: 2,
                            items: [
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
                            ]
                        },
                    ]
                }
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <Abc item={item} />}
                showsVerticalScrollIndicator={false}
            />
        </View>

    </View>

}

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={() => <View><Text>home tab</Text></View>} />
            <Tab.Screen name="Settings" component={() => <View><Text>home tab</Text></View>} />
        </Tab.Navigator>
    );
}

function HomeScreen() {


    const TOPICS = [
        {
            topic: "For You",

        },
        {
            topic: "news",

        },
        {
            topic: "culture",

        },
        {
            topic: "education",

        },
        {
            topic: "history",

        },
        {
            topic: "business",

        },
    ]


    const renderItem = ({ item }) => <View
        style={{ marginRight: 10, padding: 10, }}>

        <Txt style={{ color: colors.text, TxtTransform: "capitalize", position: "relative" }}>{item.topic}</Txt>
        {
            item.topic.toLowerCase() === "for you" && <View style={{
                height: 3,
                width: 40,
                borderTopEndRadius: 5,
                borderTopStartRadius: 5,
                marginTop: 10,
                backgroundColor: colors.primary,
                position: "absolute",
                bottom: 0, left: 10,
            }} />
        }

    </View>

    return <Text>hello world</Text>


    // return <View>
    //     <View>

    //         <FlatList
    //             data={TOPICS}
    //             keyExtractor={(item, index) => index.toString()}
    //             renderItem={renderItem}
    //             horizontal={true}
    //             showsHorizontalScrollIndicator={false}

    //         />
    //     </View>
    //     <View>

    //         <FlatList
    //             data={
    //                 [1, 2, 3, 4]
    //             }
    //             keyExtractor={(item, index) => index.toString()}
    //             renderItem={() => <ForYou />}
    //             horizontal
    //             pagingEnabled

    //         />
    //     </View>
    // </View>
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 17
    },
    searchbox: {
        flexDirection: "row",
        alignItems: "center",
        padding: 8,
        borderWidth: 1,
        borderColor: colors.muted,
        borderRadius: 5
    },
    searchTxt: {
        marginLeft: 7,
        fontSize: 16,

    },
    img: {
        width: 100,
        height: 100,
        backgroundColor: colors.softGray,
        borderRadius: 10,
        marginRight: 10,
        overflow: "hidden"
    },
})