import React, { useState } from "react";
import { Helmet } from 'react-helmet';

const jobData = [
  {
    title: "Backend Developer",
    emoji: "💻",
    company: "Tech Corp",
    location: "India",
    description: "Builds APIs and handles server-side logic."
  },
  {
    title: "Frontend Developer",
    emoji: "🎨",
    company: "Designify",
    location: "Remote",
    description: "Creates UI/UX and interactive web apps."
  },
  {
    title: "Data Scientist",
    emoji: "📊",
    company: "DataX",
    location: "Bangalore",
    description: "Analyzes data and builds ML models."
  },
  {
    title: "DevOps Engineer",
    emoji: "⚙️",
    company: "CloudOps",
    location: "Hybrid",
    description: "Manages deployment and cloud infrastructure."
  }
];

export default function Carrerdetails() {
  
  const [jobs, setJobs] = useState(jobData);

  return (
    
    <section className="text-white text-xl border-2 justify-baseline m-12 mb-81">
      
      <h1 className="text-2xl text-center mb-8 text underline font-black mt-39 text-amber-500  ">
        Job Opportunities 🚀
      </h1>

      <Helmet>
                <title>Carrer info - Gen-Z Creative Agency</title>
                <meta
                  name="description"
                  content="Learn about Gen-Z, a creative-tech agency that builds bold digital experiences for the next generation of brands."
                />
              </Helmet>
      

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="bg-amber-600 p-4 rounded-xl shadow-lg hover:scale-105 transition duration-300"
          >
            <h2 className="text-xl font-semibold text-green-400 mb-2">
              {job.emoji} {job.title}
            </h2>

            <p className="text-sm text-gray-300">🏢 {job.company}</p>
            <p className="text-sm text-gray-300">📍 {job.location}</p>

            <p className="text-blue-950 mt-2">{job.description}</p>

            <p className="text-amber-950 font-semibold mt-3 mb-6">🔥 Hiring Now</p>
          </div>
        ))}
      </div>
    </section>
  );
}