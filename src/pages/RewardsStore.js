import React from "react";
import { toast } from "react-toastify";

const rewards = [
  {
    id: 1,
    title: "🌟 Profile Boost",
    description: "Get featured on the homepage for 7 days.",
    points: 50,
  },
  {
    id: 2,
    title: "🔐 Hidden Content Access",
    description: "Unlock exclusive journal prompts & tips.",
    points: 30,
  },
  {
    id: 3,
    title: "🎉 Surprise Token",
    description: "Mystery bonus to enhance your spark journey.",
    points: 20,
  },
];

// ✅ Handles redeem logic
const handleRedeem = (reward) => {
  const current = parseInt(localStorage.getItem("sparkPoints") || 0);
  const redeemed = JSON.parse(localStorage.getItem("redeemedRewards") || "[]");

  if (redeemed.includes(reward.id)) {
    toast.info("You have already redeemed this reward.");
    return;
  }

  if (current >= reward.points) {
    localStorage.setItem("sparkPoints", current - reward.points);
    localStorage.setItem(
      "redeemedRewards",
      JSON.stringify([...redeemed, reward.id])
    );
    toast.success(`🎉 Redeemed "${reward.title}"! -${reward.points} points`);
    window.location.reload(); // Refresh to show updated UI
  } else {
    toast.error("Not enough Spark Points to redeem this reward.");
  }
};

const isRedeemed = (id) => {
  const redeemed = JSON.parse(localStorage.getItem("redeemedRewards") || "[]");
  return redeemed.includes(id);
};

const RewardsStore = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50 p-6 flex items-center justify-center">
      <div className="max-w-5xl w-full">
        <h2 className="text-3xl font-bold text-center text-pink-700 mb-8">
          🎁 Rewards Store
        </h2>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {rewards.map((reward) => (
            <div
              key={reward.id}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {reward.title}
                </h3>
                <p className="text-gray-600 mb-4">{reward.description}</p>
              </div>

              <div className="mt-auto flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  Cost: <strong>{reward.points}</strong> points
                </span>

                <button
                  onClick={() => handleRedeem(reward)}
                  disabled={isRedeemed(reward.id)}
                  className={`${
                    isRedeemed(reward.id)
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-pink-600 hover:bg-pink-700"
                  } text-white px-4 py-1.5 rounded-md transition`}
                >
                  {isRedeemed(reward.id) ? "Redeemed" : "Redeem"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RewardsStore;
