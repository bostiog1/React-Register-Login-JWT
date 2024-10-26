import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-screen bg-blue-500 flex items-center justify-center p-4 font-['Nunito'] text-lg text-white">
      <div className="w-full max-w-md bg-black bg-opacity-40 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
        {/* Add your login form here */}
        <p className="mt-6 text-center">
          Don't have an account?{' '}

          <Link to="/register" className="text-white hover:underline font-semibold">
          
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
