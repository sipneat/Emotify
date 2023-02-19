import * as React from 'react';
import { Text, View, StyleSheet, Button, Image, TextInput } from 'react-native';

export default class AppTwo extends React.Component {
  constructor(props){
    super(props);
    this.state = {text:"", text1:""};
    this.state = {pageProp: 'AppTwo'};
  }

  change(){
    this.setState({pageProp: 'AppTwo'})
  }

  render() {
    if(this.state.pageProp === 'AppTwo'){
        return(
          <View style={styles.container}>
          <Text style = {styles.header}>
            Here are 5 happy songs that are proven to decrease cortisol levels and increase dopamine!
          </Text>

          <Text style = {styles.paragraph}>
            Dont Stop Me Now - Queen
            Dancing Queen - Abba
            Good Vibrations - The Beach Boys
            Uptown Girl - Billie Joel
            Eye of The Tiger - Survivor
            I will Survive - Gloria Gaynor
          </Text>

          <Button title='More Info' style={styles.paragraph} onPress={() => this.props.onSubmit()} color={'#1ad75e'}/>

        </View>
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
    backgroundColor: '#90EE90',
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