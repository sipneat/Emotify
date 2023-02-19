import * as React from 'react';
import { Text, View, StyleSheet, Button, Image, TextInput } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {text:"", text1:""};
  }
  render() {
    return (
      <View style={styles.container}>
      <Image style={styles.logo} source={require('./assets/thing.png')} />
        <TextInput placeholder="How are you feeling?" style={styles.input}
          value={this.state.text2} onChangeText = {(text2) => this.setState({text2: text2})}
        />
        <Button title='Submit' style={styles.paragraph} onPress={() => this.props.onSubmit()} color={'#1ad75e'}/>
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
  logo: {
    justifyContent: 'center',
    height: 128,
    width: 300,
  }
});








  
 /*         <Text>
          Counter: {this.state.counter}
        </Text>

                <Text>
          You entered: {this.state.text2}
        </Text>  
*/ 
/* button and increment
        <Text>
          Counter: {this.state.counter}
        </Text>

        <Button title='Incremement counter' onPress={()=> this.increment()}/>

        <Card name = 'button 1 :(' color = "green"/>
        <Card name = 'button 2'/>
        <Card name = 'button 3 !'/>
*/
        /*
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

        */


/* button and increment
        <Text>
          Counter: {this.state.counter}
        </Text>

        <Button title='Incremement counter' onPress={()=> this.increment()}/>

        <Card name = 'button 1 :(' color = "green"/>
        <Card name = 'button 2'/>
        <Card name = 'button 3 !'/>
*/
