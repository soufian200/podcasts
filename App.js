import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Screen from './app/components/Screen';
import EpisodeScreen from './app/screens/EpisodeScreen';
import HomeScreen from './app/screens/HomeScreen';
import PodcastScreen from './app/screens/PodcastScreen';
import ExploreScreen from './app/screens/ExploreScreen';
import useRobotoFont from "./app/hooks/useRobotoFont"
import roboto from './app/constants/robot';




export default function App() {



  const isFontsLoaded = useRobotoFont()


  return (
    <Screen>
      {/* <HomeScreen /> */}
      {/* <EpisodeScreen /> */}
      {/* <PodcastScreen /> */}
      <ExploreScreen />
    </Screen>
  );
}