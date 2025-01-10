'use client';

import {useState} from 'react';
import { login } from '@/actions/auth';
import Link from 'next/link';

export default function LoginPage() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const form = event.currentTarget.form;
    if (!form) return;

    const formData = new FormData(form);

    setIsLoading(true);
    setErrorMessage(null);

    try {
      await login(formData);
    } catch (error) {
      if(error instanceof Error) {
          setErrorMessage(error.message || 'Login failed. Please try again.');
      } else {
          setErrorMessage('An unexpected error occured. Please try again');
      }
    } finally {
      setIsLoading(false);
    }
  };

  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Welcome Back!</h2>

        {errorMessage && (
            <div className="mb-4 text-center text-red-500 text-sm font-medium">
                {errorMessage}
            </div>
        )}

        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 font-medium mb-2">Email:</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-300 text-black"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-600 font-medium mb-2">Password:</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-300 text-black"
            />
          </div>

          <div className="flex justify-between items-center mb-6">
            <button
              type="button"
              onClick={handleLogin}
              disabled={isLoading}
              className={`w-full py-2 px-4 rounded-md text-white ${
                isLoading
                  ? 'bg-indigo-400 cursor-not-allowed'
                  : 'bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500'
              }`}
            >
                {isLoading ? 'Logging in...' : 'Log in'}
            </button>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600">Don&apos;t have an account? 
              <Link
                href="/register"
                className="text-indigo-600 hover:underline"
              >
                Sign up
              </Link>

            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
