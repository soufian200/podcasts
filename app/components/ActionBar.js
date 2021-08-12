import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../utils/colors';


export default function ActionBar({ ep }) {
    return <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={[styles.playBtn, styles.seperateSpace]}>
            <MaterialIcons name="play-circle-outline" size={30} color={colors.primary} />
            <Text style={styles.duration}>21 min</Text>
        </View>


        <MaterialIcons name="playlist-add" size={30} color={colors.primary} style={styles.seperateSpace} />
        <MaterialCommunityIcons name="download-circle-outline" size={30} color={colors.primary} style={styles.seperateSpace} />
        {
            ep &&
            <MaterialCommunityIcons name="share-outline" size={30} color={colors.primary} style={styles.seperateSpace} />
        }
    </View>
}

const styles = StyleSheet.create({
    playBtn: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        paddingHorizontal: 7,
        paddingVertical: 1,
        borderWidth: 1,
        borderColor: colors.muted
    },
    duration: {
        marginHorizontal: 5,
        fontWeight: "bold"
    },
    seperateSpace: {
        marginRight: 20
    }
})