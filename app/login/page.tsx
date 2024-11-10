'use client';

import { login } from '@/actions/auth';
import Link from 'next/link';

export default function LoginPage() {
  const handleLogin = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const form = event.currentTarget.form;
    if (!form) return;

    const formData = new FormData(form);

    try {
      await login(formData);
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Welcome Back!</h2>

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
              className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Log in
            </button>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600">Don&apos;t have an account? 
              <Link
                href="/signup"
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
