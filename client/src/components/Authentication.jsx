import React, { useState } from 'react'

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
  <div>
    <h2>Sign Up</h2>
    <input type="email" placeholder="Email Address" />
    <input type="password" placeholder="Password" />
    <input type="password" placeholder="Verify Password" />
    <button>Sign Up</button>
    <p onClick={onSignInClick}>Already have an account? Click here</p>
  </div>
);

const Authentication = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      {isLogin ? (
        <LoginComponent onSignUpClick={() => setIsLogin(false)} />
      ) : (
        <SignupComponent onSignInClick={() => setIsLogin(true)} />
      )}
    </div>
  );
};

export default Authentication;