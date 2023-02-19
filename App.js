import * as React from 'react';
import MainPage from './index';
import SecondPage from './AppTwo.js'
import { Text, View, StyleSheet, Button, Image, TextInput } from 'react-native';
export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {pageProp: 'main'};
  }

  change(page){
    this.setState({pageProp: page})
  
  }

  render() {
    if(this.state.pageProp === 'main'){
      return(
        <MainPage onSubmit = { () => this.change("page2") }/>
      );
    }else if (this.state.pageProp ==='page2'){
      return (
        <SecondPage onSubmit = {() => this.change("page3")}/>
        );
    } else{
      return (
        <View>

          <Text style = {styles.header}>
              Music can help us connect with our own feelings, and this is always best paired with some “Me Time”. So while you listen to these songs, maybe go for a walk and look at some cool leaves, or try to draw a portrait of your best friend. We have all felt negative emotions, and you are not, and never will be alone.
              
          Below are your songs:





          </Text>

          <SecondPage onSubmit = {() => this.change("main")}/>
          
        </View>
        //<SecondPage onSubmit = {() => this.change("main")}/>
      );
    }
  }
}
const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: 'center',
    margin: 24,
  },
});
