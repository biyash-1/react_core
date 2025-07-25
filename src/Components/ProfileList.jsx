import React from 'react'

import ProfileCard from './ProfileCard';
const users = [
  {
    name: "Alice Johnson",
    age: 28,
    bio: "Frontend Developer from New York.",
    avatarUrl: "https://i.pravatar.cc/150?img=1"
  },
  {
    name: "Bob Smith",
    age: 34,
    bio: "Loves backend development and Node.js.",
    avatarUrl: "https://i.pravatar.cc/150?img=2"
  },
  {
    name: "Carol Martinez",
    age: 24,
    bio: "UI/UX designer with a passion for color theory.",
    avatarUrl: "https://i.pravatar.cc/150?img=3"
  }
];
const ProfileList = () => {
  return (
    <div className='flex flex-wrap gap-6 items-center'>
      {
        users.map((user,index) => (
            <ProfileCard
            key= {index}
            name = {user.name}
            age =  {user.age}
            bio =  {user.bio}
            avatarUrl = {user.avatarUrl}
            />

            
        ))
      }
    </div>
  )
}

export default ProfileList
