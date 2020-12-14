import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Login from './component/user/Login';
import SignUp from './component/user/SignUp';
import "antd/dist/antd.css";

function App() {
  return (
    <Fragment>
      <Route path="/" exact component={Login} />
      <Route path="/SignUp" component={SignUp} />
    </Fragment>
  )
}

export default App