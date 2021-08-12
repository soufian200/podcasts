import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Screen from './app/components/Screen';
import EpisodeScreen from './app/screens/EpisodeScreen';
import HomeScreen from './app/screens/HomeScreen';
import PodcastScreen from './app/screens/PodcastScreen';

export default function App() {
  return (
    <Screen>
      {/* <HomeScreen /> */}
      {/* <EpisodeScreen /> */}
      <PodcastScreen />
    </Screen>
  );
}

const styles = StyleSheet.create({

});
