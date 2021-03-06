import React, {Component} from 'react';
import {render} from 'react-dom';   //navegador

import  { BrowserRouter as Router , Switch, Route, Link } from 'react-router-dom';

import App from         './components/App/App.jsx';
import Board from       './components/board/board.jsx';
import InsertMovie from './components/insert/insertmovie.jsx';
import EditMovie   from './components/edit/editmovie.jsx';
import Page404     from './components/page404/page404.jsx';

render(
    <Router >
         <App>
               <Switch>
                    <Route exact path="/insertmovie"  component={InsertMovie}/>
                    <Route exact path="/editmovie"  component={EditMovie}/>
                    <Route exact path="/"  component={Board}/>
                    <Route  component={Page404}/>
               </Switch>
         </App>
       </Router>
    , document.getElementById('app'));




// render(
//     <Prueba />,
//     document.getElementById('app')
// )
