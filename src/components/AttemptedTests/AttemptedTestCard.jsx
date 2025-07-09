import React from "react";

const AttemptedTestCard = ({ testName, attemptDate, score, onReattempt }) => (
  <div className="bg-white shadow-md rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between mb-4">
    <div>
      <h3 className="text-lg font-semibold">{testName}</h3>
      <p className="text-sm text-gray-500">Attempted on: {attemptDate}</p>
      <p className="text-sm text-gray-700">Score: <span className="font-bold">{score}</span></p>
    </div>
    <button
      className="mt-2 md:mt-0 bg-violet-600 text-white px-4 py-2 rounded hover:bg-violet-700 transition"
      onClick={onReattempt}
    >
      Re-attempt Test
    </button>
  </div>
);

export default AttemptedTestCard;
