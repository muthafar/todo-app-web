import React, { useState } from "react";

const SignInScreen = props => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const renderError = () => {
    return (
      <div className="alert alert-danger">
        <strong>{props.error}</strong>
      </div>
    );
  };

  return (
    <>
      {props.error ? renderError() : ""}
      <form
        onSubmit={e => {
          props.handleSignInSubmit(e, username, password);
        }}
        className="form-group"
      >
        <div className="mt-3">
          <label className="form-label">Username:</label>
          <input
            value={username}
            onChange={e => {
              setUserName(e.target.value);
            }}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mt-3">
          <label className="form-label">Password:</label>
          <input
            value={password}
            onChange={e => {
              setPassword(e.target.value);
            }}
            type="password"
            className="form-control"
          />
        </div>
        <div className="mt-3">
          <button className="btn btn-primary ">Sign In</button>
        </div>
      </form>
    </>
  );
};

export default SignInScreen;
