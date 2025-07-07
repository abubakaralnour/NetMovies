"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const [message, setMessage] = useState(null);
  const [User, setUser] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUsers = JSON.parse(localStorage.getItem("formdata")) || [];
    const usersArray = Array.isArray(storedUsers) ? storedUsers : [storedUsers];

    const foundUser = usersArray.find(
      (user) =>
        user.email === User.email &&
        user.password === User.password
    );

    if (foundUser) {
      localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
      setMessage({ type: "success", text: "Login successful" });

      setTimeout(() => {
        router.push("/");
      }, 1000);
    } else {
      setMessage({ type: "error", text: "Email or password incorrect" });
    }
  };

  return (
    <div>
      {/* Notification Message */}
      {message && (
        <div
          className={`fixed top-5 right-5 z-50 px-4 py-3 rounded shadow-md transition-all duration-300 ${
            message.type === "success" ? "bg-green-500" : "bg-red-500"
          } text-white`}
        >
          {message.text}
        </div>
      )}

      {/* Background Image (desktop only) */}
      <div className="absolute inset-0 h-full hidden md:block">
        <Image
          src="https://i.imgur.com/ECKbXX9.jpeg"
          alt="background"
          layout="fill"
          objectFit="cover"
          className="z-0"
          unoptimized
        />
        <div className="absolute inset-0 bg-black opacity-40" />
      </div>

      {/* Logo */}
      <div className="p-6 absolute z-60">
        <Link href="/">
          <h1 className="text-2xl font-bold text-[#e50914]">NETMOVIES</h1>
        </Link>
      </div>

      {/* Login Box */}
      <div className="container-larg-ads fixed inset-0 z-50 flex justify-center p-8 pt-20">
        <div className="p-8 text-amber-50 bg-black opacity-80 rounded-lg shadow-lg w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl overflow-hidden">
          <h4 className="text-xl font-bold p-2">Sign in</h4>

          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            {/* Email Field */}
            <input
              name="email"
              value={User.email}
              onChange={handleChange}
              className="px-3 py-3 rounded-md border border-amber-50 w-1/2 mb-3 bg-transparent text-white"
              type="text"
              placeholder="Email or mobile number"
            />

            {/* Password Field */}
            <input
              name="password"
              value={User.password}
              onChange={handleChange}
              className="px-3 py-3 rounded-md border border-amber-50 w-1/2 mb-3 bg-transparent text-white"
              type="password"
              placeholder="Password"
            />

            {/* Sign In Button */}
            <button
              type="submit"
              className="mb-3 bg-red-600 text-white px-3 py-3 w-1/2 cursor-pointer rounded-md hover:bg-red-700 transition font-semibold"
            >
              Sign in
            </button>

            <span>OR</span>

            {/* Sign Up Link */}
            <Link href="/component/Register">
              <p className="underline hover:text-neutral-300 cursor-pointer mt-2">
                New to Netmovies? Sign up now.
              </p>
            </Link>

            {/* Remember Me */}
            <label className="flex items-center space-x-3 mb-4 mt-2 text-sm text-white">
              <input
                type="checkbox"
                name="remember"
                checked={User.remember}
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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Remember me</span>
            </label>

            {/* Forgot Password */}
            <p className="underline hover:text-neutral-300 cursor-pointer">
              Forgot Password?
            </p>

            {/* reCAPTCHA Notice */}
            <div className="mt-4 text-xs text-center px-4">
              <p>
                This page is protected by Google reCAPTCHA to ensure you’re not a bot.
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
                  The information you submit will be processed by Google for security and spam
                  prevention. Learn more at Googles reCAPTCHA policy.
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
