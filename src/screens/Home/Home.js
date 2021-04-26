import React from 'react';
import { View, Text, ImageBackground, Pressable } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import styles from './styles';

const Home = () => {
  return (
    <View>
      <ImageBackground
        source={require('../../../assets/images/wallpaper.jpg')}
        style={styles.image}
      >
        <Pressable
          style={styles.searchBar}
          onPress={() => console.warn('pressed')}
        >
          <Fontisto name="search" size={25} color={'#f15454'} />
          <Text style={styles.searchBarText}>Where are you going?</Text>
        </Pressable>
        <Text style={styles.title}>Go</Text>
        <Text style={styles.title}>Near</Text>
        <Pressable
          style={styles.button}
          onPress={() => console.warn('pressed')}
        >
          <Text style={styles.buttonText}>Explore nearby stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default Home;
