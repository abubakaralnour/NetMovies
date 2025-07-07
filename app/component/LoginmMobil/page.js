"use client";

import Link from "next/link";
import { useState } from "react";

const LoginMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [User, setUser] = useState({
    email: "",
    passwod: "",
    remmber: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted User:", User);
    // TODO: handle login logic
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="bg-black min-h-screen w-full px-4 pt-8 text-amber-50">
      <div className="w-full text-left mb-6">
        <h1 className="text-3xl font-bold text-[#e50914]">
          <Link href="/">NETMOVIES</Link>
        </h1>
      </div>

      <div className="w-full max-w-sm bg-black rounded-lg shadow-lg p-6 space-y-2">
        <h4 className="text-2xl font-bold pb-4 text-center">Sign in</h4>

        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <input
            name="email"
            value={User.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-amber-50 bg-transparent placeholder:text-sm mb-2"
            type="text"
            placeholder="Email or mobile password"
          />

          {/* Password Field */}
          <input
            name="passwod"
            value={User.passwod}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-amber-50 bg-transparent placeholder:text-sm mb-2"
            type="password"
            placeholder="Password"
          />

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition font-semibold"
          >
            Sign in
          </button>

          <div className="text-center text-sm py-1">OR</div>

          {/* Sign In Code Button */}
          <button
            type="button"
            className="w-full bg-neutral-600 text-white py-3 rounded-md hover:bg-neutral-700 transition font-semibold"
          >
            Use sign-in code
          </button>

          {/* Forgot Password */}
          <p className="text-center underline hover:text-neutral-300 cursor-pointer text-sm">
            Forgot Password?
          </p>

          {/* Remember Me Checkbox */}
          <label className="flex items-center space-x-3 text-sm text-white">
            <input
              type="checkbox"
              name="remmber"
              checked={User.remmber}
              onChange={handleChange}
              className="peer hidden"
            />
            <div className="w-5 h-5 rounded border-2 border-white bg-white peer-checked:bg-emerald-500 flex items-center justify-center transition">
              <svg
                className="w-3 h-3 text-black hidden peer-checked:block"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <span>Remember me</span>
          </label>

          {/* Sign Up */}
          <p className="text-center underline hover:text-neutral-300 cursor-pointer text-sm mt-2">
            New to Netflix? Sign up now.
          </p>

          {/* Collapse Section */}
          <div className="mt-4 text-xs text-center">
            <p>
              This page is protected by Google reCAPTCHA to ensure youre not a
              bot.
              {!isOpen && (
                <span
                  onClick={() => setIsOpen(true)}
                  className="underline text-blue-600 cursor-pointer ml-1"
                >
                  Learn more
                </span>
              )}
            </p>

            {isOpen && (
              <div className="mt-2 p-3 bg-gray-100 text-black rounded-md text-left">
                The information you submit will be processed by Google for
                security and spam prevention. Learn more at Google’s reCAPTCHA
                policy.
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginMobile;
