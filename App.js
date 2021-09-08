import React from 'react';
import {StyleSheet} from 'react-native';
import MealsNavigator from './navigation/MealsNavigator';
import {enableScreens} from 'react-native-screens';
import mealsReducer from './store/reducers/meals';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

enableScreens();

const rootReducer = combineReducers({
  meals: mealsReducer,
});

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
