import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold text-purple-700 mb-4">
        🌟 Welcome to Solo Sparks
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        Discover yourself one quest at a time. Accept the challenge, reflect, and grow!
      </p>

      <Link
        to="/reflect"
        className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg transition"
      >
        ✍️ Submit a Reflection
      </Link>

      <Link
        to="/dashboard"
        className="mt-4 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded-lg transition"
      >
        📊 View Spark Points
      </Link>

      <Link
        to="/rewards"
        className="mt-4 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-6 rounded-lg transition"
      >
        🎁 Visit Rewards Store
      </Link>
    </div>
  );
};

export default Home;
