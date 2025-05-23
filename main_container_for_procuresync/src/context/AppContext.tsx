"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { AppContextType, User } from "@/types";

// Default context value
const defaultContextValue: AppContextType = {
  sidebarOpen: false,
  setSidebarOpen: () => {},
  currentModule: "dashboard",
  setCurrentModule: () => {},
  user: null,
};

// Create context
const AppContext = createContext<AppContextType>(defaultContextValue);

// PUBLIC_INTERFACE
export function useAppContext() {
  return useContext(AppContext);
}

// Mock user for demonstration purposes
const mockUser: User = {
  id: "1",
  name: "Jane Smith",
  email: "jane.smith@example.com",
  role: "Procurement Manager",
  avatar: "/avatars/jane-smith.jpg",
};

// PUBLIC_INTERFACE
export function AppProvider({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentModule, setCurrentModule] = useState("dashboard");
  const [user] = useState<User | null>(mockUser);

  const value = {
    sidebarOpen,
    setSidebarOpen,
    currentModule,
    setCurrentModule,
    user,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
