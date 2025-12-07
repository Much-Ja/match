"use client";

import React from "react";
import { FaXTwitter, FaInstagram, FaGlobe } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-16 border-t py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* ▼▼ MOBILE VERSION ▼▼ */}
        <div className="md:hidden text-gray-500">
          <p className="font-semibold text-gray-700">©2025 OnlyFans</p>

          {/* Contact */}
          <p className="mt-6 font-semibold text-gray-700">Contact</p>

          <div className="flex items-center gap-4 mt-3 text-2xl">
            <FaXTwitter />
            <FaInstagram />
          </div>

          {/* Language Selector */}
          <div className="mt-6 flex items-center gap-2 text-gray-700 font-semibold">
            <FaGlobe />
            <span>English</span>
            <FaChevronDown className="text-sm" />
          </div>

          {/* 3-Column Mobile Grid */}
          <div className="grid grid-cols-2 mt-10 gap-y-4">

            <div className="space-y-2">
              <p className="hover:text-black cursor-pointer">Help</p>
              <p className="hover:text-black cursor-pointer">Blog</p>
              <p className="hover:text-black cursor-pointer">Store</p>
              <p className="hover:text-black cursor-pointer">Privacy</p>
              <p className="hover:text-black cursor-pointer">Cookie Notice</p>
              <p className="hover:text-black cursor-pointer">USC 2257</p>
              <p className="hover:text-black cursor-pointer">
                Safety & Transparency Center
              </p>
              <p className="hover:text-black cursor-pointer">
                Acceptable Use Policy
              </p>
            </div>

            <div className="space-y-2">
              <p className="hover:text-black cursor-pointer">About</p>
              <p className="hover:text-black cursor-pointer">Branding</p>
              <p className="hover:text-black cursor-pointer">
                Terms of Service
              </p>
              <p className="hover:text-black cursor-pointer">
                Complaints Policy
              </p>
              <p className="hover:text-black cursor-pointer">DMCA</p>
              <p className="hover:text-black cursor-pointer">
                Contract between Fan and Creator
              </p>
              <p className="hover:text-black cursor-pointer">
                Anti-Slavery & Anti-Trafficking
              </p>
            </div>
          </div>
        </div>
        {/* ▲▲ MOBILE VERSION ▲▲ */}

        {/* ▼▼ DESKTOP VERSION ▼▼ */}
        <div className="hidden md:grid grid-cols-4 gap-10 text-gray-500">

          <div>
            <p className="font-semibold text-gray-700">©2025 OnlyFans</p>

            <p className="mt-3 font-semibold text-gray-900">Contact</p>

            <div className="flex items-center gap-4 text-2xl mt-4">
              <FaXTwitter />
              <FaInstagram />
            </div>

            <div className="mt-6 flex items-center gap-2 text-gray-700">
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
            <p className="hover:text-black cursor-pointer">
              Terms of Service
            </p>
            <p className="hover:text-black cursor-pointer">DMCA</p>
            <p className="hover:text-black cursor-pointer">
              Anti-Trafficking Policy
            </p>
          </div>

          <div classway="space-y-2">
            <p className="hover:text-black cursor-pointer">Blog</p>
            <p className="hover:text-black cursor-pointer">Privacy</p>
            <p className="hover:text-black cursor-pointer">USC 2257</p>
            <p className="hover:text-black cursor-pointer">Use Policy</p>
          </div>
        </div>
        {/* ▲▲ DESKTOP VERSION ▲▲ */}
      </div>
    </footer>
  );
}
