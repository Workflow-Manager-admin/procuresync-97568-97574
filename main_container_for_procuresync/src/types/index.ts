export interface NavItem {
  title: string;
  path: string;
  icon?: string;
  children?: NavItem[];
}

export interface Module {
  id: string;
  name: string;
  component: React.ComponentType;
  icon?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatar?: string;
}

export interface AppContextType {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  currentModule: string;
  setCurrentModule: (module: string) => void;
  user: User | null;
}
