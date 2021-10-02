import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';

export default function Screen({ children }) {
    return <View style={styles.container}>
        <StatusBar style="auto" />
        {children}
    </View>
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        width: "100%",
        flex: 1,
    },
});