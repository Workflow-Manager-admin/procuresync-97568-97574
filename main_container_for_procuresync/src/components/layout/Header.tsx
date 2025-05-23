"use client";

import { useAppContext } from "@/context/AppContext";
import Image from "next/image";

// PUBLIC_INTERFACE
export default function Header() {
  const { sidebarOpen, setSidebarOpen, user } = useAppContext();

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-800 h-16 flex items-center px-4">
      <div className="flex flex-1 items-center justify-between">
        <div className="flex items-center">
          <button
            type="button"
            className="p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:bg-gray-800"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <span className="sr-only">Toggle sidebar</span>
          </button>
          <div className="ml-4">
            <h1 className="text-lg font-semibold text-gray-900 dark:text-white">ProcureSync</h1>
          </div>
        </div>

        {user && (
          <div className="flex items-center">
            <div className="mr-3 hidden md:block">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{user.name}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{user.role}</p>
            </div>
            <div className="relative">
              <button className="flex rounded-full bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <span className="sr-only">Open user menu</span>
                {user.avatar ? (
                  <div className="h-8 w-8 rounded-full overflow-hidden">
                    <Image
                      src={user.avatar}
                      alt={`${user.name}'s profile`}
                      width={32}
                      height={32}
                      className="h-8 w-8 rounded-full"
                    />
                  </div>
                ) : (
                  <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
                    {user.name.charAt(0)}
                  </div>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
