"use client";

import React, { useState } from "react";
import { FaXTwitter, FaFingerprint } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({ email: "", password: "" });

  const validateForm = (e) => {
    let valid = true;
    let newErrors = { email: "", password: "" };

    // Email validation
    if (!email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Enter a valid email address";
      valid = false;
    }

    // Password validation
    if (!password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }

    // If invalid — stop form submission
    if (!valid) {
      e.preventDefault();
    }

    setErrors(newErrors);
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Side */}
      <div className="hidden md:flex w-1/2 bg-sky-500 items-center justify-center text-white">
        <div className="max-w-md p-8">
          <div className="flex flex-row items-center gap-3">
            <img
              src="/avatar.jpg"
              alt="Logo"
              className="w-12 h-12 object-cover rounded-full"
            />
            <h1 className="text-4xl font-bold mb-4">OnlyFans</h1>
          </div>

          <p className="text-2xl font-semibold leading-snug">
            Sign up to support your favorite creators
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex w-full md:w-1/2 items-center justify-center bg-white">
        <div className="w-full max-w-md p-8">
          <h2 className="text-lg font-semibold mb-4">Log in</h2>

          {/* Login Form */}
          <form
            className="space-y-4"
            action=""
            method="POST"
            onSubmit={validateForm}
          >
            {/* Email Input */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password Input */}
            <div>
              <input
                type="password"
                name="words"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-gray-200 text-gray-400 font-semibold py-3 rounded-full cursor-pointer"
            >
              LOG IN
            </button>
          </form>

          {/* Terms and Links */}
          <p className="text-xs text-gray-500 mt-3">
            By logging in and using this site, you agree to our{" "}
            <a href="#" className="text-sky-500">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-sky-500">
              Privacy Policy
            </a>
            , and confirm that you are at least 18 years old.
          </p>

          <div className="flex justify-center text-sm text-sky-500 mt-4 space-x-2">
            <a href="#">Forgot password?</a>
            <span>•</span>
            <a href="#">Sign up for an account</a>
          </div>

          {/* Social Buttons */}
          <div className="mt-6 space-y-3">
            <button className="w-full flex gap-2 bg-sky-500 text-white font-semibold py-3 rounded-full hover:bg-sky-600 transition relative">
              <div className="ml-0.5 -mt-2.5 py-[13.3px] px-2 absolute left-0 rounded-l-full">
                <FaXTwitter className="text-lg" />
              </div>
              <div className="w-full flex items-center justify-center">
                SIGN IN WITH X
              </div>
            </button>

            <button className="w-full flex gap-2 bg-blue-600 text-white font-semibold py-3 rounded-full hover:bg-blue-700 transition relative">
              <div className="bg-white ml-0.5 -mt-2.5 py-[13.3px] px-2 absolute left-0 rounded-l-full">
                <FcGoogle className="text-lg" />
              </div>
              <div className="w-full flex items-center justify-center">
                SIGN IN WITH GOOGLE
              </div>
            </button>

            <button className="w-full flex gap-2 bg-sky-400 text-white font-semibold py-3 rounded-full hover:bg-sky-500 transition relative">
              <div className="ml-0.5 -mt-2.5 py-[13.3px] px-2 absolute left-0 rounded-l-full">
                <FaFingerprint className="text-lg" />
              </div>
              <div className="w-full flex items-center justify-center">
                PASSWORDLESS SIGN IN
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
