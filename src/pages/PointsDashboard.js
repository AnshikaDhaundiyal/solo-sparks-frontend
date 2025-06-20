import React, { useEffect, useState } from "react";

const PointsDashboard = () => {
  const [points, setPoints] = useState(0);
  const [reflections, setReflections] = useState([]);

  useEffect(() => {
    const pts = parseInt(localStorage.getItem("sparkPoints") || 0);
    const refls = JSON.parse(localStorage.getItem("reflections") || "[]");
    setPoints(pts);
    setReflections(refls);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-gradient-to-br from-green-100 to-blue-100">
      <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">📊 Points Dashboard</h2>

        <div className="text-lg text-gray-700 mb-4">
          <p>✨ Total Spark Points: <strong>{points}</strong></p>
          <p>📝 Reflections Submitted: <strong>{reflections.length}</strong></p>
        </div>

        <div className="h-4 w-full bg-gray-200 rounded-full mt-4">
          <div
            className="h-4 bg-green-500 rounded-full transition-all duration-500"
            style={{ width: `${Math.min(points, 100)}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default PointsDashboard;
