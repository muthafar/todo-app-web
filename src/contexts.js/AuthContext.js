import React, { useState, createContext } from "react";
import { useHistory } from "react-router-dom";
import { signIn, signUp } from "../apiService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const history = useHistory();
  const [authUser, setAuthUser] = useState(localStorage.getItem("token"));
  const [authError, setAuthError] = useState("");

  const handleSignUpSubmit = async (formValues) => {
    const { username, password, email } = formValues;
    try {
      const { data } = await signUp(username, password, email);

      localStorage.setItem("token", data.token);
      setAuthUser(data.token);
      history.push("/todos");
    } catch (err) {
      setAuthError(err.response.data.message);
    }
  };

  const handleSignInSubmit = async (formValues) => {
    const { username, password } = formValues;
    try {
      const { data } = await signIn(username, password);

      localStorage.setItem("token", data.token);
      setAuthUser(localStorage.getItem("token"));
      history.push("/todos");
    } catch (err) {
      setAuthError(err.response.statusText);
    }
  };
  const handleSignoutClick = () => {
    localStorage.removeItem("token");
    setAuthUser(localStorage.getItem("token"));
  };

  return (
    <AuthContext.Provider
      value={{
        authUser,
        authError,
        handleSignInSubmit,
        handleSignoutClick,
        handleSignUpSubmit,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
