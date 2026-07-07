import React from "react";

const complaints = [
  {
    id: 1,
    student: "Rahul Sharma",
    complaint: "Water cooler on the 2nd floor is not working.",
    date: "03 Jul 2026",
  },
 
];

export default function ComplaintsPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-700">
        Complaints
      </h1>

      <div className="max-w-4xl mx-auto space-y-4">
        {complaints.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md p-5 border"
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold">{item.student}</h2>
              <span className="text-sm text-gray-500">{item.date}</span>
            </div>

            <p className="text-gray-700">{item.complaint}</p>
          </div>
        ))}
      </div>
    </div>
  );
}