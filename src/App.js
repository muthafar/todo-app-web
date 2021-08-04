import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import { Router, Route, Redirect, useHistory } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import LandingScreen from "./screens/LandingScreen";
import SignInScreen from "./screens/SignInScreen.js";
import SignUpScreen from "./screens/SignUpScreen";
import { signIn, signUp } from "./apiService";

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
axios.defaults.headers.common["Content-Type"] = "application/json";

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }
});

function App() {
  const [authUser, setAuthUser] = useState(localStorage.getItem("token"));
  const [authError, setAuthError] = useState("");
  const [signOutM, setSignOutM] = useState("");
  const history = useHistory();

  const handleSignInSubmit = async (e, username, password) => {
    e.preventDefault();
    try {
      const { data } = await signIn(username, password);
      setAuthUser(data.token);
      setAuthError("");
      setSignOutM("");
      localStorage.setItem("token", data.token);

      history.push("/todos");
    } catch (err) {
      setAuthError(err.response.statusText);
    }
  };

  const handleSignUpSubmit = async (e, username, email, password) => {
    try {
      e.preventDefault();
      const { data } = await signUp(email, username, password);
      setAuthUser(data.token);
      setAuthError("");
      setSignOutM("");
      localStorage.setItem("token", data.token);

      history.push("/todos");
    } catch (err) {
      setAuthError(err.response.data.message);
    }
  };

  const handleSignoutClick = async () => {
    setAuthUser(localStorage.removeItem("token"));
  };

  return (
    <div className="container">
      <Router>
        <Header authUser={authUser} handleSignoutClick={handleSignoutClick} />

        <Route path="/" exact component={LandingScreen} />
        <Route
          path="/signin"
          exact
          render={props => (
            <SignInScreen
              {...props}
              handleSignInSubmit={handleSignInSubmit}
              error={authError}
            />
          )}
        />
        <Route
          path="/signup"
          exact
          render={props => (
            <SignUpScreen
              {...props}
              error={authError}
              handleSignUpSubmit={handleSignUpSubmit}
            />
          )}
        />

        <Route
          path="/todos"
          exact
          render={props =>
            authUser ? (
              <Home {...props} />
            ) : (
              <Redirect to={{ pathname: "/signin" }} />
            )
          }
        />
      </Router>
    </div>
  );
}

export default App;
