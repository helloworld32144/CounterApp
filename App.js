import React from "react";
import { Provider} from "react-redux";
import CounterApp from "./component/CounterApp";
import { configureStore } from "@reduxjs/toolkit";



const initialState = {
  counter: 0
}

const reducer = (state = initialState, action) => {
  switch(action.type)
  {
    case 'INCREASE_COUNTER':
      return {counter: state.counter+1}
    case 'DECREASE_COUNTER':
      return {counter: state.counter-1}
  }
  return state
}

const store = configureStore({reducer})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <CounterApp/>  
      </Provider>
    )
  }www
}