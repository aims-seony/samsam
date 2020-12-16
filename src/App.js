import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Login from './component/user/Login';
import SignUp from './component/user/SignUp';
import FindPassword from './component/find/FindPassword';
import Peed from './component/main/Peed';
import "antd/dist/antd.css";

function App() {
  return (
    <Fragment>
      <Route path="/" exact component={Login} />
      <Route path="/SignUp" component={SignUp} />
      <Route path="/FindPassword" component={FindPassword} />
      <Route path="/Peed" component={Peed} />
    </Fragment>
  )
}

export default App