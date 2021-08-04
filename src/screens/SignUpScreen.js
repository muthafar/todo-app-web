import React, { useState } from "react";

const SignoutScreen = props => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  const renderErrormessage = () => {
    if (password !== confirmPassword) {
      return <div className="alert alert-danger">Password must match</div>;
    }
    if (!username) {
      return <div className="alert alert-danger">Please Enter a username</div>;
    }
    if (!password) {
      return <div className="alert alert-danger">Please Enter a password</div>;
    }
    if (!email) {
      return <div className="alert alert-danger">Please Enter a email</div>;
    }
    if (!confirmPassword) {
      return (
        <div className="alert alert-danger">Please Enter a confirmpassword</div>
      );
    }
  };

  const renderauthError = () => {
    return <div className="alert alert-danger">{props.error}</div>;
  };

  return (
    <>
      {props.error ? renderauthError() : ""}
      {renderErrormessage()}
      <form className="form-group">
        <div className="mt-3">
          <label className="form-label">Username:</label>
          <input
            value={username}
            onChange={e => {
              setUserName(e.target.value);
            }}
            type="text"
            className="form-control"
            required
          />
        </div>
        <div className="mt-3">
          <label className="form-label">Email:</label>
          <input
            value={email}
            onChange={e => {
              setEmail(e.target.value);
            }}
            type="email"
            className="form-control"
            required
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
            required
          />
        </div>
        <div className="mt-3">
          <label className="form-label">ConfirmPassword:</label>
          <input
            value={confirmPassword}
            onChange={e => {
              setConfirmPassword(e.target.value);
            }}
            type="password"
            className="form-control"
            required
          />
        </div>
        <div className="mt-3">
          <button
            className="btn btn-primary"
            onClick={e => {
              props.handleSignUpSubmit(e, username, email, password);
            }}
          >
            Sign UP
          </button>
        </div>
      </form>
    </>
  );
};

export default SignoutScreen;
