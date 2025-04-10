"use client";
import { Bell } from "lucide-react";

export default function TopNav() {
  return (
    <div className="flex items-center justify-between bg-white dark:bg-gray-900 px-6 py-4 shadow">
      <h1 className="text-xl font-semibold">Appointments</h1>
      <div className="flex items-center space-x-4">
        {/* Notification Icon */}
        <button className="relative">
          <Bell className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full" />
        </button>

        {/* User Profile */}
        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
          U
        </div>
      </div>
    </div>
  );
}
