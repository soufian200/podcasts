import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import colors from '../utils/colors';
import ActionBar from './ActionBar';
import Head from './Head';

export default function Podcast({ item, showImg = true, small }) {
    return <View style={styles.container}>
        {showImg && <Head img={item.img} small={small} />}
        {showImg || <Text style={styles.date}>2 days age</Text>}

        <View style={styles.body}>
            <Text style={styles.title}>Changer de camp (Switching Sides)</Text>
            <Text style={styles.description}>Andoh Ashu Rex thought he’d found his dream job working
                for an American company in Cameroon. But after learning ...</Text>
        </View>

        <ActionBar />

    </View>
}


const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 20
    },


    body: {
        marginVertical: 16
    },
    title: {
        color: colors.heading,
        fontSize: 17,
        fontWeight: "600",
    },
    description: {
        color: colors.gray,
        fontSize: 13,
    },
    date: {
        fontSize: 12,
        color: colors.gray,
    },
});