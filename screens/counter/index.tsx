import { RootState } from '../../store';
import { connect } from 'react-redux';
import { counter } from '../../actions';
import { Counter } from '../../reducers';
import { ThunkDispatch } from 'redux-thunk';
import CounterScreen, {StateProps, DispatchProps, OwnProps} from './counter';


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
