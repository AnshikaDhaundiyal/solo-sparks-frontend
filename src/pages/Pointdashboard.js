import React from "react";

const PointsDashboard = () => {
  const totalPoints = 120; // Replace with dynamic value later
  const reflectionsSubmitted = 8;
  const progressPercent = 60;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-green-700 text-center mb-6">
          📊 Spark Points Dashboard
        </h2>

        <div className="space-y-4">
          <div className="bg-green-100 text-green-800 rounded-lg p-4 shadow-sm">
            <p className="text-lg font-semibold">✨ Total Spark Points:</p>
            <p className="text-2xl font-bold">{totalPoints}</p>
          </div>

          <div className="bg-blue-100 text-blue-800 rounded-lg p-4 shadow-sm">
            <p className="text-lg font-semibold">✍️ Reflections Submitted:</p>
            <p className="text-2xl font-bold">{reflectionsSubmitted}</p>
          </div>

          <div className="bg-purple-100 text-purple-800 rounded-lg p-4 shadow-sm">
            <p className="text-lg font-semibold mb-1">🌱 Growth Progress:</p>
            <div className="w-full bg-purple-200 h-4 rounded-full">
              <div
                className="bg-purple-600 h-4 rounded-full transition-all duration-700"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
            <p className="text-sm mt-1">{progressPercent}% to next level</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PointsDashboard;
