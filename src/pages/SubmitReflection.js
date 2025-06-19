import React, { useState } from "react";
import { toast } from "react-toastify";

const SubmitReflection = () => {
  const [text, setText] = useState("");
  const [photo, setPhoto] = useState(null);
  const [audio, setAudio] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reflection Submitted:", { text, photo, audio });

    toast.success("Reflection submitted successfully! 💡");

    // Clear form
    setText("");
    setPhoto(null);
    setAudio(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-xl rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-bold text-purple-700 mb-4 text-center">
          ✍️ Submit Your Reflection
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Text Reflection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Thoughts
            </label>
            <textarea
              className="w-full border border-gray-300 rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-purple-400"
              rows="5"
              placeholder="Write something meaningful..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
            />
          </div>

          {/* Photo Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload a Photo (optional)
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setPhoto(e.target.files[0])}
              className="block w-full border border-gray-300 rounded-lg px-3 py-2"
            />
          </div>

          {/* Audio Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload an Audio Message (optional)
            </label>
            <input
              type="file"
              accept="audio/*"
              onChange={(e) => setAudio(e.target.files[0])}
              className="block w-full border border-gray-300 rounded-lg px-3 py-2"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded-lg transition"
            >
              ➡️ Submit Reflection
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubmitReflection;
