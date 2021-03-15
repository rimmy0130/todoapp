import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {UserProvider} from './context/UserContext';

import Todo from './pages/Todos';
import Checker from './pages/Checker';
import NoAuthorized from './pages/NoAuthorized';

function App() {
  return (
    <Todo />
    // <UserProvider>
    //   <div className="App">
    //     <BrowserRouter>
    //       <Switch>
    //         <Route path='/todos' exact component={Todo} />
    //         <Route path='/checker/:id/:targetId' component={Checker} />
    //         <Route path='/noauthorized' component={NoAuthorized} />
    //       </Switch>
    //     </BrowserRouter>
    //   </div>
    // </UserProvider>
  );
}
  
export default App;
