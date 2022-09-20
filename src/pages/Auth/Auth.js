import React, { useState, useContext } from "react";

import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../utils/validators";
import { useForm } from "../../hooks/form-hook";
import { useHttpClient } from "../../hooks/http-hook";
import { AuthContext } from "../../context/auth-context";
import Input from "../../UI/Input";
import "./Auth.css";

export default function Auth() {
  const auth = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const { sendRequest } = useHttpClient();

  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          firstName: undefined,
          lastName: undefined,
          phoneNumber: undefined,
        },
        formState.inputs.email.isValid &&
          formState.inputs.password.isValid &&
          formState.inputs.firstName.isValid &&
          formState.inputs.lastName.isValid &&
          formState.inputs.phoneNumber.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          firstName: {
            value: "",
            isValid: false,
          },
          lastName: {
            value: "",
            isValid: false,
          },
          phoneNumber: {
            value: "",
            isValid: false,
          },
        },
        false
      );
    }
    setIsLoginMode((prevMode) => !prevMode);
  };

  const authSubmitHandler = async (event) => {
    event.preventDefault();

    if (isLoginMode) {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + "/users/login",
          "POST",
          JSON.stringify({
            email: formState.inputs.email.value,
            password: formState.inputs.password.value,
          }),
          {
            "Content-Type": "application/json",
          }
        );

        localStorage.setItem("username", responseData.firstName);
        auth.login(
          responseData.userId,
          responseData.token,
          null,
          responseData.role
        );
      } catch (err) {}
    } else {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + "/users/signup",
          "POST",
          JSON.stringify({
            firstName: formState.inputs.firstName.value,
            lastName: formState.inputs.lastName.value,
            phoneNumber: formState.inputs.phoneNumber.value,
            email: formState.inputs.email.value,
            password: formState.inputs.password.value,
            points: 0,
          }),
          {
            "Content-Type": "application/json",
          }
        );

        auth.login(responseData.userId, responseData.token);
      } catch (err) {}
    }
  };

  return (
    <div className="container-fluid auth-container p-0">
      <div className="row w-100">
        <div className="col-lg-6 d-flex align-items-center justify-content-center flex-column">
          <div className="auth-page-header">
            <img
              src="https://img.icons8.com/fluency/58/000000/automatic-car-wash.png"
              alt="logo"
            />
            <h1 className="text-capitalize text-center">washing app</h1>
          </div>
          <div className="mt-4 container d-flex align-items-center justify-content-center flex-column">
            <form onSubmit={authSubmitHandler} className="auth-form">
              {!isLoginMode && (
                <>
                  <Input
                    element="input"
                    id="firstName"
                    type="text"
                    label="First Name"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter your first name."
                    onInput={inputHandler}
                    noBorder
                  />
                  <Input
                    element="input"
                    id="lastName"
                    type="text"
                    label="Last Name"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter your last name."
                    onInput={inputHandler}
                    noBorder
                  />
                  <Input
                    element="input"
                    id="phoneNumber"
                    type="tel"
                    label="Phone Number"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter your phone number."
                    onInput={inputHandler}
                    noBorder
                  />
                </>
              )}
              <Input
                element="input"
                id="email"
                type="email"
                label="Email"
                validators={[VALIDATOR_EMAIL()]}
                errorText="Please enter a valid email address."
                onInput={inputHandler}
                noBorder
              />
              <Input
                element="input"
                id="password"
                type="password"
                label="Password"
                validators={[VALIDATOR_MINLENGTH(6)]}
                errorText="Please enter a valid password, at least 6 characters."
                onInput={inputHandler}
                noBorder
              />

              <button
                className="btn btn-primary ms-2"
                type="submit"
                disabled={!formState.isValid}
              >
                {isLoginMode ? "LOGIN" : "SIGNUP"}
              </button>
            </form>
            <hr className="mt-5 w-50" />
            <div className="sign-up-btn-container">
              {isLoginMode && <small>Don't have an account |</small>}
              {!isLoginMode && <small>Alread have an account |</small>}
              <button className="btn switch-btn" onClick={switchModeHandler}>
                SWITCH TO {isLoginMode ? "SIGNUP" : "LOGIN"}
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-bg">
          <lottie-player
            src="https://assets1.lottiefiles.com/packages/lf20_gjmecwii.json"
            background="transparent"
            speed="1"
            style={{ width: "600px", height: "600px" }}
            loop
            autoplay
          ></lottie-player>
        </div>
      </div>
    </div>
  );
}
