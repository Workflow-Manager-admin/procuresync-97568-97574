"use client";

import React from "react";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";

interface DashboardCardProps {
  title: string;
  description: string;
  path: string;
  icon: React.ReactNode;
}

const DashboardCard = ({ title, description, path, icon }: DashboardCardProps) => {
  const { setCurrentModule } = useAppContext();
  
  return (
    <Link 
      href={path}
      onClick={() => setCurrentModule(path.replace('/', ''))}
      className="bg-white dark:bg-gray-900 rounded-lg shadow hover:shadow-md transition-shadow p-6 border border-gray-100 dark:border-gray-800 flex flex-col"
    >
      <div className="flex items-center mb-4">
        <div className="mr-3 text-blue-600 dark:text-blue-400">
          {icon}
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-gray-500 dark:text-gray-400 text-sm">{description}</p>
    </Link>
  );
};

// PUBLIC_INTERFACE
export default function DashboardModule() {
  const { user } = useAppContext();

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "requests":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25-2.25V8.625c0-.621-.504-1.125-1.125-1.125H16.5Z" />
          </svg>
        );
      case "approvals":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
          </svg>
        );
      case "suppliers":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
          </svg>
        );
      case "orders":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
          </svg>
        );
      case "stock":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
          </svg>
        );
      case "reports":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        );
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
        <h2 className="text-2xl font-semibold mb-2">Welcome to ProcureSync</h2>
        {user && (
          <p className="text-gray-600 dark:text-gray-400">
            Hello, {user.name}. Here's your procurement dashboard.
          </p>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <DashboardCard
          title="Purchase Requests"
          description="Create and manage purchase requests for your organization."
          path="/requests"
          icon={getIcon("requests")}
        />
        <DashboardCard
          title="Approvals"
          description="Review and approve pending procurement requests."
          path="/approvals"
          icon={getIcon("approvals")}
        />
        <DashboardCard
          title="Suppliers"
          description="Manage supplier information and relationships."
          path="/suppliers"
          icon={getIcon("suppliers")}
        />
        <DashboardCard
          title="Order Tracking"
          description="Track the status of orders and deliveries."
          path="/orders"
          icon={getIcon("orders")}
        />
        <DashboardCard
          title="Stock Management"
          description="Monitor and manage inventory levels."
          path="/stock"
          icon={getIcon("stock")}
        />
        <DashboardCard
          title="Reports"
          description="Generate procurement analytics and reports."
          path="/reports"
          icon={getIcon("reports")}
        />
      </div>
      
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4">System Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-md">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">12</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Pending Requests</div>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-md">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">24</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Approved Orders</div>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-md">
            <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">5</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Low Stock Items</div>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-md">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">32</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Active Suppliers</div>
          </div>
        </div>
      </div>
    </div>
  );
}
