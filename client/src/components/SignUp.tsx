import React, { useState } from "react";
import GoogleIcon from "../assets/Google__G__logo.svg";
import FacebookIcon from "../assets/Facebook_icon_2013.svg";
import ReactSVG from "../assets/react.svg";

const SignUpForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg mx-auto px-4 py-6 bg-white rounded-lg shadow-lg md:mx-4"
    >
      <div className="text-center mb-6">
        <img src={ReactSVG} alt="Logo" className="mx-auto mb-4 h-20 w-20" />
      </div>
      <div className="md:flex md:space-x-4 mb-4">
        <div className="md:w-1/2">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="First Name"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <p className="text-red-500 text-xs italic h-4">{errors.firstName}</p>
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0">
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="Last Name"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <p className="text-red-500 text-xs italic h-4">{errors.lastName}</p>
        </div>
      </div>
      <div className="mb-4">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
          className="w-full p-2 border border-gray-300 rounded"
        />

        <p className="text-red-500 text-xs italic h-4">{errors.email}</p>
      </div>
      <div className="mb-4">
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Password"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          placeholder="Verify Password"
          className="w-full p-2 border border-gray-300 rounded"
        />
        {errors.confirmPassword && (
          <h2 className="text-red-600 text-sm">{errors.confirmPassword}</h2>
        )}
      </div>
      <div className="mb-4">
        <div className="w-full h-2 bg-gray-300 rounded">
          {/* Implement password strength slider logic */}
          <div className="h-full bg-green-500 rounded"></div>
        </div>
      </div>
      <div className="flex items-center my-6">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="px-4 text-gray-600">Or</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
      <div className="mb-4">
        <button
          type="button"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded flex items-center justify-center"
        >
          <img
            src={GoogleIcon}
            alt="Google"
            className="mr-2 w-[24px] h-[24px]"
          />
          Sign In with Google
        </button>
      </div>
      <div>
        <button
          type="button"
          className="w-full py-2 px-4 bg-blue-800 text-white rounded flex items-center justify-center"
        >
          <img
            src={FacebookIcon}
            alt="Facebook"
            className="mr-2 w-[24px] h-[24px]"
          />
          Sign In with Facebook
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
