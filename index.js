import * as React from 'react';
import { Text, View, StyleSheet, Button, Image, TextInput, AppRegistry } from 'react-native';
import Card from "./Card";

//import { View, Text } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';

AppRegistry.registerComponent('Emotify', () => App);

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {text:"", text1:""};
    this.state = {counter: 0};
    //this.state = 
  }

  increment() {
    this.setState(state => ({
      counter: state.counter + 1
    }));
  }


  render() {
    return (
      //why is this button not a card but a real button??
      // why can i not put name in between a start and a end card thingie???
      <View style={styles.container}>
      <Image style={styles.logo} source={require('./assets/thing.png')} />
      <Text >
        Welcome to Emotify!
        {'\n'}
        {'\n'}
        Music is an important part of mental health, and sometimes a playlist curated to your mood is the perfect remedy to a bad day.
        {'\n'}
        {'\n'}
      </Text>
      
      <TextInput placeholder="Enter your Spotify Username" style={styles.input}
          value={this.state.text} onChangeText = {(text) => this.setState({text: text})}
        />
        <Text>
          You entered: {this.state.text}
        </Text>        


        <TextInput placeholder="Enter your Spotify Password" style={styles.input}
          value={this.state.text1} onChangeText = {(text1) => this.setState({text1: text1})}
        />
        <Text>
          You entered: {this.state.text1}
        </Text>        

      <Text>
        How are you feeling?
      </Text>

        <TextInput placeholder="Enter a short description of your mood" style={styles.input}
          value={this.state.text2} onChangeText = {(text2) => this.setState({text2: text2})}
        />
        <Text>
          You entered: {this.state.text2}
        </Text>  

        <Button title='Submit' style={styles.paragraph} onPress={() => this.props.onSubmit()} color={'#1ad75e'}/>

        <Text>
          Counter: {this.state.counter}
        </Text>

      </View>
    );
  }
/* button and increment
        <Text>
          Counter: {this.state.counter}
        </Text>

        <Button title='Incremement counter' onPress={()=> this.increment()}/>

        <Card name = 'button 1 :(' color = "green"/>
        <Card name = 'button 2'/>
        <Card name = 'button 3 !'/>
*/

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
