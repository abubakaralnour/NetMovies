"use client";
import Link from "next/link";

import Image from "next/image";
import { useState } from "react";

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
  
    <div>
        
      
      {/* Background Image */}
    {/* Background Image (hidden on small screens) */}
<div className="absolute inset-0 h-full hidden md:block ">
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


      {/* Overlay */}
      <div className="overlay-larg fixed inset-0 bg-opacity-60 z-40 " />
    
      {/* Login Container */}
         <div className="p-6 absolute z-60">   
        
       <Link href="/">   <h1 className="text-2xl font-bold text-[#e50914]">    NETMOVIES  </h1></Link>
        
          </div>
      <div className="container-larg-ads fixed inset-0 z-50 flex justify-center p-8 pt-20">
  
        <div className="p-8 text-amber-50 bg-black opacity-80  rounded-lg shadow-lg w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl overflow-hidden">
          <h4 className="text-xl font-bold  p-2">Sign in</h4>

          <div className="flex flex-col justify-center items-center">
            {/* Email Field */}
            <input
              className="px-3 py-3 rounded-md border-1 w-1/2 mb-3 border-amber-50"
              type="text"
              placeholder="Email or mobile password"
            />

            {/* Password Field */}
            <input
              className="px-3 py-3 rounded-md border-1 w-1/2 mb-3 border-amber-50"
              type="password"
              placeholder="Password"
            />

            {/* Sign In Button */}
            <button className="mb-3 bg-red-600 text-white px-3 py-3 w-1/2 cursor-pointer rounded-md hover:bg-red-700 transition font-semibold">
              Sign in
            </button>

            <span>OR</span>

            {/* Sign In Code Button */}
            <button className="mb-3 bg-neutral-600 text-white px-3 py-3 w-1/2 cursor-pointer rounded-md hover:bg-neutral-700 transition font-semibold">
           <Link href="/component/Register"> Dont have an account? Sign up</Link> 
            </button>

            {/* Forgot Password */}
            <p className="underline hover:text-neutral-300 cursor-pointer">
              Forgot Password?
            </p>

            {/* Remember Me Checkbox */}
            <label className="flex items-center space-x-3 mb-4 mt-2 text-sm text-white">
              <input type="checkbox" id="remember" className="peer hidden" />
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

            {/* Sign up */}
            <p className="underline hover:text-neutral-300 cursor-pointer">
              New to Netflix? Sign up now.
            </p>

            {/* Collapse Section */}
            <div className="mt-4 text-xs text-center px-4">
           <p>
  This page is protected by Google reCAPTCHA to ensure youre not a bot.{" "}<br/>
  {!isOpen && (
    <span
      onClick={() => setIsOpen(true)}
      className="underline text-blue-600 cursor-pointer "
    >
      Learn more
    </span>
  )}
</p>



              {isOpen && (
                <div className="mt-2 p-3 rounded-md">
                  The information you submit will be processed by Google for security and spam prevention. Learn more at Google’s reCAPTCHA policy.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
