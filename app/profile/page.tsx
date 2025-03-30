"use client";
import React from "react";
import { Header } from '../components/Header';
import { useRouter } from 'next/navigation';
import { NavButton } from '../components/NavButton';
import profileData from '../data/profileData'; // Import profile data

const navLinks = [
  { text: "Profile", isButton: false, path: "/profile" }, // lowercase path
  { text: "Most Popular", isButton: false, path: "/popular"},
  { text: "Sign-in", isButton: true, path: "/signin" }
];

export default function ProfilePage() {
  const router = useRouter();
  
  // Get user data from the profileData import
  const user = profileData;
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8 mt-8 border-2 border-black">
          <div className="flex flex-col items-center">
            {/* Profile image */}
            <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center mb-6">
              <span className="text-4xl text-gray-500">
                {user.name.split(' ').map(part => part[0]).join('')}
              </span>
            </div>
            
            <h1 className="text-2xl font-bold text-gray-800 mb-4">{user.name}</h1>
            <p className="text-gray-600 mb-8">{user.email}</p>
            
            <div className="w-full border-t border-gray-200 pt-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <p className="text-sm text-gray-500">Member Since</p>
                  <p className="text-lg font-semibold">{user.joinDate}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-500">Favorite Places</p>
                  <p className="text-lg font-semibold">{user.favoritePlaces}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {user.recentActivity && user.recentActivity.map((activity, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-md">
                  <p className="text-gray-800">{activity.description}</p>
                  <p className="text-sm text-gray-500">{activity.timeAgo}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-8 flex justify-center">
            <button 
              className="px-6 py-2 bg-blue-500 text-white rounded-full text-sm font-medium hover:bg-blue-600 transition-colors"
              onClick={() => router.back()}
            >
              Exit Profile
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}