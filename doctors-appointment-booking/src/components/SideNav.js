"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-100 p-4 min-h-screen">
      <h2 className="text-xl font-semibold mb-6">Test Side Nac</h2>
      <ul className="space-y-4">
        <li>
          <Link href="/" className="text-blue-600 font-medium">Appointments</Link>
        </li>
        <li>
          <Link href="#" className="text-gray-700">Doctors</Link>
        </li>
        <li>
          <Link href="#" className="text-gray-700">Pathology Results</Link>
        </li>
        <li>
          <Link href="#" className="text-gray-700">Chats</Link>
        </li>
        <li>
          <Link href="#" className="text-gray-700">Settings</Link>
        </li>
        <li>
          <Link href="#" className="text-red-500">Logout</Link>
        </li>
      </ul>
    </div>
  );
}
