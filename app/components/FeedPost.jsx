"use client";

import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function FeedPost({ avatar, name, username, time, text, image }) {
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md mb-6">
      {/* Top Section */}
      <div className="flex items-start p-4 gap-3">

        {/* Avatar */}
        <img
          src={avatar}
          alt="Avatar"
          className="w-12 h-12 rounded-full object-cover"
        />

        <div className="flex-1">
          {/* Name + Verified */}
          <div className="flex items-center gap-1">
            <h3 className="font-semibold">{name}</h3>
            <FaCheckCircle className="text-sky-500 text-md" />
          </div>

          {/* Username + Time */}
          <p className="text-gray-500 text-sm">
            @{username} · {time}
          </p>

          {/* Post Text */}
          <p className="mt-2 text-gray-800">{text}</p>
        </div>
      </div>

      {/* Post Image */}
      {image && (
        <img
          src={image}
          alt="post"
          className="w-full rounded-b-lg object-cover"
        />
      )}
    </div>
  );
}
