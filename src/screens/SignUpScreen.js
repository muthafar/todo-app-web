import React, { useContext } from "react";
import { Form, Field } from "react-final-form";
import { AuthContext } from "../contexts.js/AuthContext";

const SignUpScreen = (props) => {
  const { handleSignUpSubmit, authError } = useContext(AuthContext);

  const renderInput = ({ input, label, meta }) => {
    return (
      <div className="mb-3">
        <label className="form-label">{label}</label>
        <input
          className="form-control"
          {...input}
          type={
            input.name === "password"
              ? "password"
              : "text" && input.name === "confirm"
              ? "password"
              : ""
          }
        />
        {meta.touched && meta.error ? (
          <span className="text-danger">{meta.error}</span>
        ) : (
          ""
        )}
      </div>
    );
  };

  const renderAuthError = () => {
    return (
      <div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>{authError}</strong>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    );
  };

  const validate = (values) => {
    const errors = {};

    if (!values.username) {
      errors.username = "You must provide a username";
    }
    if (!values.email) {
      errors.email = "You must provide an email";
    }
    if (!values.password) {
      errors.password = "You must provide a password";
    }
    if (!values.confirm) {
      errors.confirm = "You must provide a confirm password";
    }

    if (values.password !== values.confirm) {
      errors.confirm = "Password must match";
    }

    return errors;
  };

  return (
    <div>
      {authError ? renderAuthError() : ""}
      <Form onSubmit={handleSignUpSubmit} validate={validate}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field label="Username" name="username" component={renderInput} />
            <Field label="Email" name="email" component={renderInput} />
            <Field label="Password" name="password" component={renderInput} />
            <Field
              label="Confirm Password"
              name="confirm"
              component={renderInput}
            />
            <button className="btn btn-primary">Submit</button>
          </form>
        )}
      </Form>
    </div>
  );
};

export default SignUpScreen;
