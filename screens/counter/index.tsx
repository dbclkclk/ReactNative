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
interface State {
}

interface OwnProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

interface DispatchProps {
  increment: () => void
}


interface StateProps {
  counter: Counter
}

type Props = OwnProps & DispatchProps & StateProps;

interface Style {
  container: ViewStyle;
  button: ViewStyle;
  text: ViewStyle
}

class CounterScreen extends React.Component<Props, State> {
  constructor(prop:Props) {
    super(prop)
    this.state = {
    }
  }
  public render() {
    return (
        <View style={styles.container}>
          <Text style={styles.text}>Current counter: {this.props.counter.value}</Text>
          <Button style={styles.button} onPress={() => this.props.increment()} title={this.props.counter.isUpdating ? 'Please wait.....' : 'Press to increment'} />
        </View>
    );
  }
};

const styles = StyleSheet.create<Style>({ 

    container: {
      flex: 1,
      flexDirection: "column"
    },
    button: {
      textAlign: 'center'
    },
    text: {
      fontSize: 18,
      textAlign: 'center'
    }
});

const mapStateToProps = (states: RootState, ownProps: OwnProps): Counter => {
  return {
    counter: states.session.counter
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>, ownProps: OwnProps): DispatchProps => {
  return {
    increment: async () => {
      await dispatch(counter())
    }
  }
}

export default connect<StateProps, DispatchProps, OwnProps>(mapStateToProps, mapDispatchToProps)(CounterScreen);
