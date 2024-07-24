import React, { useState } from "react";

const LoginComponent = ({ onSignUpClick }) => (
  <div>
    <h2>Login</h2>
    <input type="email" placeholder="Email Address" />
    <input type="password" placeholder="Password" />
    <button>Login</button>
    <p onClick={onSignUpClick}>Sign Up</p>
  </div>
);

const SignupComponent = ({ onSignInClick }) => (
  <div class="flex items-center flex-col h-screen">
    <div class="flex flex-col items-center max-w-[500px]">
      <h2 class="m-2">Sign In</h2>
      <div class="flex w-full">
        <div>
          <input
            type="first-name"
            placeholder="First Name"
            class="border m-2 mb-0 p-2 rounded-lg"
          />
          <p class="text-red-500 text-xs italic h-4 ml-2"></p>
        </div>
        <div>
          <input
            type="last-name"
            placeholder="Last Name"
            class="border m-2 mb-0 p-2 rounded-lg"
          />
          <p class="text-red-500 text-xs italic h-4 ml-2"></p>
        </div>
      </div>
      <input
        type="email"
        placeholder="Email Address"
        class="border m-2 w-full"
      />
      <input type="password" placeholder="Password" class="border m-2" />
      <input type="password" placeholder="Verify Password" class="border m-2" />
      <button class="border m-2 p-2 rounded-lg">Sign Up</button>
      <p onClick={onSignInClick}>Already have an account? Click here</p>
    </div>
  </div>
);

const Authentication = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      {isLogin ? (
        <LoginComponent onSignUpClick={() => setIsLogin(false)} />
      ) : (
        <SignupComponent onSignInClick={() => setIsLogin(true)} />
      )}
    </>
  );
};

export default Authentication;
