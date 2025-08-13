import { createContext, useContext, useState, ReactNode } from "react";
import { students } from "@/data/students";

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
    // Parent login uses: email => registration number, _password => CPF (digits only)
    if (role === "parent") {
      const registration = email.trim();
      const cpfDigits = (_password || "").replace(/\D/g, "");
      const match = students.find(
        (s) => s.registration === registration && s.responsibleCpf === cpfDigits
      );
      if (!match) {
        throw new Error("Matrícula ou CPF inválidos.");
      }
      setUser({ email: `${registration}@responsavel`, role });
      return;
    }

    // Teacher login: simple demo validation
    if (!email.includes("@") || (_password || "").length < 4) {
      throw new Error("Credenciais inválidas.");
    }
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
