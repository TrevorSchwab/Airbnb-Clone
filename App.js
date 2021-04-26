import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import Home from './src/screens/Home/Home';

export default function App() {
  return (
    <>
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </>
  );
}
