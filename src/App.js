import "./App.css";
import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import LandingScreen from "./screens/LandingScreen";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import { AuthProvider } from "./contexts.js/AuthContext";

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
axios.defaults.headers.common["Content-Type"] = "application/json";

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers.authorization = token;

  return config;
});

function App(props) {
  return (
    <div className="container">
      <Router>
        <AuthProvider>
          <Header />

          <Route path="/" exact component={LandingScreen} />
          <Route path="/signin" exact component={SignInScreen} />
          <Route path="/signup" exact component={SignUpScreen} />
          <Route exact path="/todos" component={Home} />
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
