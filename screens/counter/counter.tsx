import * as React from 'react';
import { StyleSheet, Text, View, ViewStyle, Button } from 'react-native';
import { RootState } from '../../store';
import { connect } from 'react-redux';
import { counter } from '../../actions';
import { Counter } from '../../reducers';
import { ThunkDispatch } from 'redux-thunk';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
  withNavigation
} from 'react-navigation';
/**
 * The Details screen
 */

export interface OwnProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export interface DispatchProps {
  increment: () => void
}


export interface StateProps {
  counter: Counter
}

type Props = OwnProps & DispatchProps & StateProps;

export default class CounterScreen extends React.Component<Props> {
  constructor(prop:Props) {
    super(prop)
  }
  public increment() {
    this.props.increment()
  }
  public render() {
    return (
        <View style={styles.container}>
          <Text style={styles.text}>Current counter: {this.props.counter.value}</Text>
          <Button onPress={this.props.increment} title={this.props.counter.isUpdating ? 'Please wait.....' : 'Press to increment'} />
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

