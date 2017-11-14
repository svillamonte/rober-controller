import React, { Component } from 'react';
import { Text, View } from 'react-native';

import styles from './Styles';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native guacho!
        </Text>
      </View>
    );
  }
}

export default App;