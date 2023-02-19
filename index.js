import * as React from 'react';
import { Text, View, StyleSheet, Button, Image, TextInput, AppRegistry, ImageBackground } from 'react-native';
import Card from "./Card";

//import { View, Text } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';

AppRegistry.registerComponent('Emotify', () => App);

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {text2: []};
    this.state = {counter: 0};
    //this.state = 
  }

  async getAPI() {
    try {
      const response = await fetch('http://10.0.2.2:3000/api');
      const json = await response.json();
      this.setState({text2: json.message})
    } catch (error) {
      console.error(error);
    }
  }

  componentDidMount() {
    this.getAPI();
  }

  increment() {
    this.setState(state => ({
      counter: state.counter + 1
    }));
  }

  render() {
    const text2 = this.state;
    return (
      //why is this button not a card but a real button??
      // why can i not put name in between a start and a end card thingie???
      <View style={styles.container}>
      <ImageBackground source={require('./assets/sparkle.png')} resizeMode="cover" style={styles.image}>
      </ImageBackground>
      <Image style={styles.logo} source={require('./assets/thing.png')} />
      <Text >
        Welcome to Emotify!
        {'\n'}
        {'\n'}
        Music is an important part of mental health, and sometimes a playlist curated to your mood is the perfect remedy to a bad day.
        {'\n'}
        {'\n'}
        I would like to know what brings you here today.
        How are you feeling at the moment? 
        Any answer you choose is beautiful.
  
        Thank you for sharing that. Press next to generate your playlist.
      </Text>

        <Button title='Submit' style={styles.paragraph} />

        <Text text2={text2}>
          API cal: {text2.message}
        </Text>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: 'center',
    fontFamily: 'verdana',
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

/* button and increment
        <Text>
          Counter: {this.state.counter}
        </Text>

        <Button title='Incremement counter' onPress={()=> this.increment()}/>

        <Card name = 'button 1 :(' color = "green"/>
        <Card name = 'button 2'/>
        <Card name = 'button 3 !'/>
*/
