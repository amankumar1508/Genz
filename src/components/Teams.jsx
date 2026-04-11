import React from 'react'
import { teams } from '../assets/assets'

export default function Teams() {
  return (
    <div className="w-full flex flex-wrap justify-center gap-6 p-6 bg-gray-50">

      {teams.map((team) => (
        <div
          key={team.name}
          className="w-64 bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center p-5"
        >

          {/* Image */}
          <img
            src={team.image}
            alt={team.name}
            className="w-24 h-24 rounded-full object-cover border-4 border-amber-400"
          />

          {/* Text */}
          <h3 className="mt-4 text-lg font-semibold text-gray-800">
            {team.name}
          </h3>

          <p className="text-sm text-gray-500">
            {team.designation}
          </p>

        </div>
      ))}
    </div>
  )
}
