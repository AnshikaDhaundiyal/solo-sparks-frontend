import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Onboarding = () => {
  const [mood, setMood] = useState("");
  const [personality, setPersonality] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Mood:", mood, "Personality:", personality);
    navigate("/home"); // Go to home after onboarding
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">
          🧠 Welcome to Solo Sparks!
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Let’s get to know you better before we begin your journey.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Current Mood
            </label>
            <input
              type="text"
              value={mood}
              onChange={(e) => setMood(e.target.value)}
              placeholder="e.g. Happy, Anxious, Curious"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Personality Type
            </label>
            <input
              type="text"
              value={personality}
              onChange={(e) => setPersonality(e.target.value)}
              placeholder="e.g. Introvert, Adventurous"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
          >
            🚀 Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default Onboarding;
