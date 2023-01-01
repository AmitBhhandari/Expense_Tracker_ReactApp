import React, { useContext } from "react";
import "./App.css";

import { Route, Redirect } from "react-router-dom";
import LoginContext, { LoginContextProvider,} from "./Components/Context/LoginContext";
import Welcome from "./Components/Pages/Welcome";
import IncompleteProfile from "./Components/Pages/IncompleteProfile";
import ForgotPassword from "./Components/Pages/ForgetPassword";
import Expenses from "./Components/Pages/Expenses";

import SignUp from "./Components/Pages/SignUp";
import SignIn from "./Components/Pages/SignIn";
import Header from "./Components/Layout/Header";

function App() {
  const loginCtx = useContext(LoginContext);
  const isLoggedIn = loginCtx.isLoggedIn;
  return (
    <React.Fragment>
      <Header />
      {/*<Route path="*">
          <Redirect to="/signUp" />
  </Route>*/}

      <Route path="/signUp">
        <SignUp />
      </Route>

      <Route path="/signIn">
        <SignIn />
      </Route>

      <Route path="/welcome">
        <Welcome />
      </Route>

      <Route path="/incompleteProfile">
        <IncompleteProfile />
      </Route>

      <Route path="/forgotPassword">
        <ForgotPassword />
      </Route>

      <Route path="/expenses">
        {isLoggedIn ? <Expenses /> : <Redirect to="/signIn" />}
      </Route>

    </React.Fragment>
  );
}

export default App;
