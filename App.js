import * as React from 'react';
import MainPage from './index.js';
import SecondPage from './AppTwo.js'
import { Text, View, StyleSheet, Button, Image, TextInput } from 'react-native';
import Card from "./Card";

//import { View, Text } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {pageProp: 'main'};
    //this.state = 
  }

  change(page){
    this.setState({pageProp: page})
  }

  render() {
    if(this.state.pageProp === 'main'){
      return(
        <MainPage onSubmit = { () => this.change("page2")}/>
      );
    }else if (this.state.pageProp === 'page2'){
      return (
        <SecondPage onSubmit = {() => this.change.bind("page3")}/>
        
        );
    }
    else {
      return(
        <View>
          <SecondPage onSubmit = {() => this.change("main")}/>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontWeight:"bold",
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
})