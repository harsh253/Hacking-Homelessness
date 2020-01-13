import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {Provider} from 'react-redux'
import Organizations from './components/container/Organizations';
import store from './store/store';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

class App extends Component{
  render(){
    return(
      <Provider store={store}>
        <BrowserRouter>
          <Route exact path='/' component = {Organizations}></Route>
        </BrowserRouter>
      </Provider>
    )
  }
}
export default App;
