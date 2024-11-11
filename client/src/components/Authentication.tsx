import { useState } from 'react';
import SignInForm from './SignInForm';
import Registration from './Registration';
const Authentication = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleAuthMode = () => setIsSignIn(!isSignIn);

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left section - visible only on md and larger screens */}
      <div className="hidden md:flex md:w-2/3 bg-gradient-to-br from-blue-500 to-purple-600">
        <div className="flex flex-col justify-center px-12 text-white">
          <h1 className="text-4xl font-bold mb-6">Welcome to Our Platform</h1>
          <p className="text-xl mb-4">
            Your one-stop solution for managing products and inventory with ease.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Effortless product management</li>
            <li>Real-time inventory tracking</li>
            <li>Secure authentication system</li>
            <li>User-friendly interface</li>
          </ul>
        </div>
      </div>

      {/* Right section - Authentication forms */}
      <div className="w-full md:w-1/3 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              {isSignIn ? 'Sign In' : 'Create Account'}
            </h2>
            <p className="text-gray-600 mt-2">
              {isSignIn 
                ? 'Welcome back! Please sign in to continue.' 
                : 'Get started with your free account'}
            </p>
          </div>

          {isSignIn ? <SignInForm /> : <Registration />}

          <div className="mt-6 text-center">
            <button
              onClick={toggleAuthMode}
              className="text-sm text-blue-600 hover:text-blue-500"
            >
              {isSignIn 
                ? "Don't have an account? Sign up" 
                : "Already have an account? Sign in"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;

