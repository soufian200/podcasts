import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import ActionBar from "../components/ActionBar";
import Head from "../components/Head";
import Link from "../components/Link";
import Para from "../components/Para";
import Seperator from "../components/Seperator";
import Topic from "../components/Topic";
import colors from "../utils/colors";

export default function EpisodeScreen() {
    return <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
            <View style={{ marginVertical: 20 }}>
                <Head img={require("../assets/2.png")} ep />
            </View>
            <Text style={styles.title}>This is simple title for this podcasts</Text>
            <View style={styles.actionBarContainer}>
                <ActionBar ep />
            </View>
            <View style={styles.descriptionContainer}>
                <Para txt="The fix to this warning is simpler than you think: get rid of the ScrollView,
            and places all the components that surround the FlatList inside ListFooterComponent and ListHeaderComponent.
            Let’s see how this works in practice. In this example, we have an app where the user can scroll through different recipes.
            The main view consists of a ScrollView and inside that view, we have a collection of components such as a header, a footer, some text, and a cover photo. It looks something like this:" />
                <Para txt="The main view consists of a ScrollView and inside that view, we have a collection of components such as a header, a footer, some text, and a cover photo. It looks something like this:" />
                <Link link="https://www.youtube.com/watch?v=STEofSS99Ig" />
            </View>
        </View>
        <Seperator />
        <View style={styles.explore}>
            <Text style={styles.exploreTitle}>Explore topics in this episode</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 10, marginBottom: 20 }}>
                {
                    [
                        {
                            id: 1,
                            title: "tp 1",
                            img: require("../assets/1.png"),
                            link: "www.wiki.com"
                        },
                        {
                            id: 2,
                            title: "tp 2",
                            img: require("../assets/2.png"),
                            link: "www.wiki2.com"
                        },

                    ].map(i => <Topic key={i} item={i} />)
                }
                <View style={{ width: 40, height: 40, }} />
            </ScrollView>

        </View>
    </ScrollView>
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    title: {
        fontSize: 25,
        marginVertical: 10
    },
    actionBarContainer: {
        marginTop: 10,
        marginBottom: 30
    },
    descriptionContainer: {
        width: "100%",

    },
    explore: {

    },
    exploreTitle: {
        fontSize: 18,
        color: colors.text,
        marginBottom: 20,
        paddingHorizontal: 20,
        marginTop: 10
    }

})