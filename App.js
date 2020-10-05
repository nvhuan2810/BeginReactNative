import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MomoLogin from "./components/MomoLogin"
import FacebookLogin from "./components/FacebookLogin"
import TheLight from "./components/TheLight"

export default function App() {
  return <MomoLogin />;
  //return <FacebookLogin />;
  //return <TheLight />
}
