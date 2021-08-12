import React from 'react';
import { Text, View, StyleSheet, ScrollView } from "react-native";
import ChannelsList from '../components/ChannelsList';
import PodcastsList from '../components/PodcastsList';

export default function HomeScreen() {
    return <View style={styles.container}>
        
        <PodcastsList />
        
    </View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
        width: "100%",
    },
});