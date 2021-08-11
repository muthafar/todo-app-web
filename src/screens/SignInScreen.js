import React, { useContext } from "react";
import { Form, Field } from "react-final-form";
import { AuthContext } from "../contexts.js/AuthContext";

const SignInScreen = (props) => {
  const { handleSignInSubmit, authError } = useContext(AuthContext);
  const renderInput = ({ input, label, meta }) => {
    return (
      <div className="mb-3">
        <label className="form-label">{label}</label>
        <input
          className="form-control"
          {...input}
          type={input.name === "password" ? "password" : "text"}
        />
        {meta.touched && meta.error ? (
          <span className="text-danger">{meta.error}</span>
        ) : (
          ""
        )}
      </div>
    );
  };

  return (
    <div>
      {authError ? <span className="text-danger">{authError}</span> : ""}
      <Form onSubmit={handleSignInSubmit} validate={validate}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field label="Username" name="username" component={renderInput} />
            <Field label="Password" name="password" component={renderInput} />
            <button className="btn btn-primary">Submit</button>
          </form>
        )}
      </Form>
    </div>
  );
};

const validate = (values) => {
  const errors = {};

  if (!values.username) {
    errors.username = "You must enter a username";
  }
  if (!values.password) {
    errors.password = "You must enter a password";
  }

  return errors;
};

export default SignInScreen;
