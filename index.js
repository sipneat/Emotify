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
