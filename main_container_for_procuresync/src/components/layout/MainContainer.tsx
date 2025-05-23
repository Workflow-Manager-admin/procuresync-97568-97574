"use client";

import React, { ReactNode } from "react";
import { AppProvider } from "@/context/AppContext";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

interface MainContainerProps {
  children: ReactNode;
}

// PUBLIC_INTERFACE
export default function MainContainer({ children }: MainContainerProps) {
  return (
    <AppProvider>
      <div className="flex h-screen flex-col">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <main className="flex-1 overflow-auto bg-gray-50 dark:bg-gray-950">
            <div className="container mx-auto p-4 md:p-6">
              {children}
            </div>
          </main>
        </div>
        <Footer />
      </div>
    </AppProvider>
  );
}
