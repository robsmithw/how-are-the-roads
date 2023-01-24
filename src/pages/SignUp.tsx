import React, { useState } from "react";
import CustomInput from "../components/CustomInput";
import "./SignUp.css";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");

  return (
    <div className="App">
      <form>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <CustomInput
            type="text"
            id="first_name"
            placeholder="John"
            value={firstName}
            labelName="First Name"
            required
            onChange={(input) => {
              setFirstName(input.target.value);
            }}
          />
          <CustomInput
            type="text"
            id="last_name"
            placeholder="Doe"
            value={lastName}
            labelName="Last Name"
            required
            onChange={(input) => {
              setLastName(input.target.value);
            }}
          />
        </div>
        <div className="mb-6">
          <CustomInput
            type="email"
            id="email"
            placeholder="john.doe@company.com"
            value={email}
            labelName="Email Address"
            required
            onChange={(input) => {
              setEmail(input.target.value);
            }}
          />
        </div>
        <div className="mb-6">
          <CustomInput
            type="password"
            id="password"
            placeholder="•••••••••"
            value={password}
            labelName="Password"
            required
            onChange={(input) => {
              setPassword(input.target.value);
            }}
          />
        </div>
        <div className="mb-6">
          <CustomInput
            type="password"
            id="confirm_password"
            placeholder="•••••••••"
            value={confirmationPassword}
            labelName="Confirm password"
            required
            onChange={(input) => {
              setConfirmationPassword(input.target.value);
            }}
          />
        </div>
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              required
            />
          </div>
          <label
            htmlFor="remember"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            I agree with the{" "}
            <a
              href="#"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              terms and conditions
            </a>
            .
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;
