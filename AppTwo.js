import * as React from 'react';
import { Text, View, StyleSheet, Button, Image, TextInput,BackgroundImage } from 'react-native';
import Card from "./Card";

//import { View, Text } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default class AppTwo extends React.Component {

  constructor(props){ 
    super(props);
    this.state = {text:"", text1:""};
    this.state = {counter: 0};
    //this.state = 
  }

  render(){
    return(
      <View style={styles.container}>

      <ImageBackground source={require('./assets/background 1.png')} resizeMode="cover" style={styles.image}>
      </ImageBackground>

        <Text style={styles.header}>
          Here is the list of songs that should resonate with your feelings.
          {'\n'}
          {'\n'}
        </Text>

        <Card name = 'mood one [angry]'/>
        <Card name = 'mood two [happy]'/>
        <Card moreInfo = 'More Information'/>
        <Card openSpotify = 'Open in Spotify'/>
        <Card openAppleMusic = 'Open in Apple Music'/>

      </View>
    );
  }

  
}
const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: 'center',
    margin: 24,
  },
  input: {
    borderWidth: 1,
    height: 30,
    margin: 20,
    paddingLeft: 10,
    borderRadius: 100000,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    padding: 8,
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',

  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    justifyContent: 'center',
    height: 128,
    width: 300,
  }
});