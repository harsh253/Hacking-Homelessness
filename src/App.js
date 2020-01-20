import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {Provider} from 'react-redux'
import Organizations from './components/views/Organizations';
import OrganizationDetail from './components/container/OrganizationDetail';
import store from './store/store';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import './index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Donation from './components/views/Donation';
import Ideas from './components/views/Ideas';
import IdeaDetails from './components/container/IdeaDetails'
import News from './components/views/News'
import SubmitIdea from './components/container/SubmitIdea'
import NewsItemDetail from './components/container/NewsItemDetail';
import MonthlyArticles from './components/container/MonthlyArticles';

library.add(fab)

class App extends Component{
  render(){
    return(
      <Provider store={store}>
        <BrowserRouter>
          <Route exact path='/' component = {Organizations}></Route>
          <Route exact path='/organization/:id' component={OrganizationDetail}></Route>
          <Route exact path='/donate' component={Donation}></Route>
          <Route exact path='/ideas' component={Ideas}></Route>
          <Route exact path='/ideas/:id' component={IdeaDetails}></Route>
          <Route exact path='/submit-idea' component={SubmitIdea}></Route>
          <Route exact path='/news' component={News}></Route>
          <Route exact path='/news/:id' component={NewsItemDetail}></Route>
          <Route exact path='/monthly/:date' component={MonthlyArticles}></Route>
        </BrowserRouter>
      </Provider>
    )
  }
}
export default App;
