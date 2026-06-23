import { createContext, useContext } from "react";

const UserContext = createContext();

const defaultUser = {
  name: "Sima Gulestani",
  role: "Full-Stack Developer",
  tagline: "Building modern web experiences with React",
  email: "simagulestani@example.com",
  github: "https://github.com/Simagulestani",
  linkedin: "https://www.linkedin.com/in/simagulestani/",
};

export function UserProvider({ children }) {
  return (
    <UserContext.Provider value={defaultUser}>
      {children}
    </UserContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("useUser must be used within UserProvider");
  return ctx;
}
