import * as React from 'react';
import { StyleSheet, Text, View, ViewStyle, Button} from 'react-native';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
  withNavigation
} from 'react-navigation';

interface Style {
  container: ViewStyle;
  button: ViewStyle;
  text: ViewStyle
}

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

class HomeScreen extends React.Component<Props> {
  public render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome</Text>
        <Button styles={styles.button} title="Next" onPress={() => this.props.navigation.navigate('Counter')} />
      </View>
    );
  }
};

const styles = StyleSheet.create<Style>({ 

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

export default withNavigation(HomeScreen);