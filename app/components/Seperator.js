import React from 'react';
import { StyleSheet, View, } from "react-native";
import colors from '../utils/colors';
const Seperator = () => {
    return <View style={styles.seperator} />
}

const styles = StyleSheet.create({
    seperator: {
        width: "100%",
        height: 1,
        backgroundColor: colors.muted
    }
})
export default Seperator;