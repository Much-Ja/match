"use client";

import React from "react";
import { FaXTwitter, FaInstagram, FaGlobe } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-16 border-t py-10 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 text-gray-500">

        <div>
          <p className="font-semibold">©2025 OnlyFans</p>

          <p className="mt-2 font-semibold text-black">Contact</p>

          <div className="flex items-center gap-4 text-2xl mt-4">
            <FaXTwitter />
            <FaInstagram />
          </div>

          <div className="mt-6 flex items-center gap-2 text-black">
            <FaGlobe />
            <span>English</span>
            <FaChevronDown />
          </div>
        </div>

        <div className="space-y-2">
          <p className="hover:text-black cursor-pointer">Help</p>
          <p className="hover:text-black cursor-pointer">Store</p>
          <p className="hover:text-black cursor-pointer">Cookie Notice</p>
          <p className="hover:text-black cursor-pointer">
            Safety & Transparency Center
          </p>
        </div>

        <div className="space-y-2">
          <p className="hover:text-black cursor-pointer">About</p>
          <p className="hover:text-black cursor-pointer">Terms of Service</p>
          <p className="hover:text-black cursor-pointer">DMCA</p>
          <p className="hover:text-black cursor-pointer">
            Anti-Trafficking Policy
          </p>
        </div>

        <div className="space-y-2">
          <p className="hover:text-black cursor-pointer">Blog</p>
          <p className="hover:text-black cursor-pointer">Privacy</p>
          <p className="hover:text-black cursor-pointer">USC 2257</p>
          <p className="hover:text-black cursor-pointer">Use Policy</p>
        </div>
      </div>
    </footer>
  );
}
