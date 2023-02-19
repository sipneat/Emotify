import * as React from 'react';
import MainPage from './index.js';
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
        <View>
        <SecondPage onSubmit = {() => this.change.bind("page3")}/>
        <Text style={styles.paragraph}>
          Music can help us connect with our feelings, and this is always best paired with some "me time", so while you listen to these songs, maybe go for a walk or do some drawing. We all have felt negative emotions, and you are not, and never will be, alone.
        </Text>
        </View>
        );
    } else{
      return (
        <View>
          <Text style = {styles.header}>
              dont be depressed
          </Text>
          <SecondPage onSubmit = {() => this.change("mainß")}/>
          
        </View>
        //<SecondPage onSubmit = {() => this.change("main")}/>
      );
    }
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
  logo: {
    justifyContent: 'center',
    height: 128,
    width: 300,
  }
});
