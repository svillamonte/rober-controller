import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

import styles from './Styles';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      roverGoing: false
    };

    this.toggleRover = this.toggleRover.bind(this);
  }

  toggleRover() {
    this.setState({ 
      roverGoing: !this.state.roverGoing 
    });
  }
  
  render() {
    const { roverGoing } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Press to {roverGoing ? 'stop' : 'go'}
        </Text>
        <Button title={roverGoing ? 'Stop rover' : 'Start rover'}  
          onPress={this.toggleRover} />
      </View>
    );
  }
}

export default App;