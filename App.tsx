import * as React from 'react';
import MainPage from './main.js';
import SecondPage from './AppTwo.js'
import { Text, View, StyleSheet, Button, Image, TextInput } from 'react-native';
import Card from "./Card";

//import { View, Text } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default class App extends React.Component<any, any> {

  constructor(props: any){
    super(props);
    this.state = {pageProp: 'main'};
    //this.state = 
  }

  change(){
    this.setState({pageProp: 'AppTwo'})
  }

  render() {
    if(this.state.pageProp === 'main'){
      return(
        <MainPage onSubmit = { this.change.bind(this)}/>
      );
    }else{
      return (
        <SecondPage onSubmit = {this.change.bind(this)}/>
        );
    }
  }
}