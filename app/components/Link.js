import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../utils/colors";


export default function Link({ link }) {
    return <Text style={styles.link}>{link}</Text>
}

const styles = StyleSheet.create({
    link: {
        color: colors.primary,
        fontSize: 14,
        marginBottom: 25
    }
})