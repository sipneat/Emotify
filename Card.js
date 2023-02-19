import * as React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default class Card extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {showColor: false, counter: 0};

  }
  changeColor(){
    this.setState(state=> ({
      showColor: !state.showColor
    }))
  }

  increment(){
    this.setState(state => ({
      counter: state.counter +1
    }));
  } 

//why can i not just say "this.props.color" and change color in apps.js???
  render() {
    return <View style={styles.card}>
      <Button title = {this.props.name} color={this.state.showColor ? "#1ad75e" : "#000000"} onPress={() => {this.changeColor(); this.increment()}}></Button>
    </View>
  }  
}

const styles = StyleSheet.create({
  card: {
    fontSize: 30,
    margin: 10
  }
});
