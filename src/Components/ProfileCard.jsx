import React from 'react'

const ProfileCard = ({name,age,bio,avatarUrl}) => {
  return (
     <div className="border p-4 rounded-lg shadow-md w-64 text-center">
      <img
        src={avatarUrl}
        alt={name}
        className="w-24 h-24 mx-auto rounded-full mb-4"
      />
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-sm text-gray-600">Age: {age}</p>
      <p className="mt-2 text-gray-700">{bio}</p>
    </div>
  )
}

export default ProfileCard
