/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 * 
 * @format
 */
import { Provider } from 'react-redux';
import * as React from 'react';
import RootContainer from './navigation';
import store from './store';


export default class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    );
  }
}