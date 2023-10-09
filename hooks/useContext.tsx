import { createContext, useContext, ReactNode, useState } from 'react';

// Define your context
interface UserContextType {
  user: string; // Replace with your user data type
  setUser: (user: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

// Create a custom hook to simplify context usage
export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}

// Create a provider component
interface UserProviderProps {
  children: ReactNode;
}

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<string>(''); // Replace with your initial user data

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
