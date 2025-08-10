import { createContext, useContext, useState, ReactNode } from "react";

export type Role = "parent" | "teacher";

type User = {
  email: string;
  role: Role;
};

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string, role: Role) => Promise<void> | void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, _password: string, role: Role) => {
    // Demo only. For secure auth, connect Supabase and verify credentials.
    setUser({ email, role });
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
