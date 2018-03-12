import React, {Component} from 'react';
import {render} from 'react-dom';   //navegador

import  { BrowserRouter as Router , Switch, Route, Link, browserHistory } from 'react-router-dom';

import App from         './components/App/App.jsx';
import Board from       './components/board/board.jsx';
import InsertMovie from './components/insert/insertmovie.jsx';
import InsertMobx  from './components/insert/insertmobx.jsx';
import EditMovie   from './components/edit/editmovie.jsx';
import Page404     from './components/page404/page404.jsx';
import store       from './components/store/TodoStore.jsx';

render(
    <Router history={browserHistory}>
         <App store={store}>
               <Switch>
                    <Route exact path="/insertmovie"  render={()=><InsertMovie store={store}/>} />
                    <Route exact path="/editmovie"    render={()=><EditMovie store={store}  />} />
                    <Route exact path="/insertmobx"   render={()=><InsertMobx store={store} />} />
                    <Route exact path="/"             component={Board}/>
                    <Route  component={Page404}/>
               </Switch>
         </App>
     </Router>
    , document.getElementById('app'));
