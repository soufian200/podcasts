import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HeadPodcast from "../components/HeadPodcast";

export default function PodcastScreen() {
    return <View style={styles.container}>
        <HeadPodcast />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})