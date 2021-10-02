import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import HeadPodcast from "../components/HeadPodcast";
import Podcast from "../components/Podcast";
import PodcastsList from "../components/PodcastsList";
import Seperator from "../components/Seperator";

export default function PodcastScreen() {
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
    ];
    const renderItem = ({ item }) => <Podcast item={item} showImg={false} />


    return <View style={styles.container}>


        <View>

            <FlatList
                ListHeaderComponent={HeadPodcast}
                data={DATA}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <Seperator />}
            />
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})