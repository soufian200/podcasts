import React from "react";
import { StyleSheet, Text, View } from "react-native";


export default function Para({ txt }) {
    return <Text style={styles.description}>{txt}</Text>
}

const styles = StyleSheet.create({
    description: {
        color: "#47494c",
        fontSize: 14,
        marginBottom: 20
    }
})