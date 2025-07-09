import React from "react";
import AttemptedTestCard from "../components/AttemptedTests/AttemptedTestCard";

const mockAttemptedTests = [
  {
    id: 1,
    testName: "SSC CGL Tier-1 Mock Test",
    attemptDate: "2025-06-10",
    score: "78/100",
  },
  {
    id: 2,
    testName: "SBI Clerk Prelims Test",
    attemptDate: "2025-06-15",
    score: "65/100",
  },
  {
    id: 3,
    testName: "IBPS PO Prelims Test",
    attemptDate: "2025-06-20",
    score: "82/100",
  },
];

const AttemptedTestsPage = () => (
  <div className="max-w-2xl mx-auto p-6">
    <h2 className="text-2xl font-bold mb-6">Attempted Tests</h2>
    {mockAttemptedTests.map(test => (
      <AttemptedTestCard
        key={test.id}
        testName={test.testName}
        attemptDate={test.attemptDate}
        score={test.score}
        onReattempt={() => alert(`Re-attempting ${test.testName}`)}
      />
    ))}
  </div>
);

export default AttemptedTestsPage;

