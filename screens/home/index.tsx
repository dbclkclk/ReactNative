import * as React from 'react';
import { StyleSheet, Text, View, ViewStyle, Button} from 'react-native';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState
} from 'react-navigation';

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export class HomeScreen extends React.Component<Props> {
   constructor(prop:Props) {
    super(prop);
  }
  public render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome</Text>
        <Button title="Next" onPress={() => this.props.navigation.navigate('Counter')} />
      </View>
    );
  }
};

const styles = StyleSheet.create({ 

    container: {
      flex: 1,
      flexDirection: 'column'
    },
    button: {
      textAlign: 'center'
    },
    text: {
      fontSize: 18,
      textAlign: 'center'
    }
});

export default HomeScreen;