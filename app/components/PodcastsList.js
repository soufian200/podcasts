import React from 'react';
import { FlatList, StyleSheet, View, Text } from "react-native";
import ChannelsList from './ChannelsList';
import Logo from './Logo';
import Podcast from "./Podcast";
import Seperator from './Seperator';





export default function PodcastsList() {

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

    const renderItem = ({ item }) => <Podcast item={item} />
    const renderHeaderComponent = () => <><Logo /><ChannelsList /></>
    return <View>

        <FlatList
            ListHeaderComponent={renderHeaderComponent}
            data={DATA}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <Seperator />}
        />
    </View>
}

const styles = StyleSheet.create({

})