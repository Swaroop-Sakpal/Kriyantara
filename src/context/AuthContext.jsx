import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check localStorage for mock user on load
    const savedUser = localStorage.getItem('mockUser');
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const signInWithGoogle = async () => {
    // Simulate network delay for a realistic feel
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Create a mock user
    const mockUser = {
      uid: `mock-user-${Date.now()}`,
      email: 'demo@example.com',
      displayName: 'Demo User',
      photoURL: 'https://ui-avatars.com/api/?name=Demo+User&background=4285F4&color=fff',
      lastLogin: new Date().toISOString(),
    };
    
    // Save to localStorage to persist login
    localStorage.setItem('mockUser', JSON.stringify(mockUser));
    setCurrentUser(mockUser);
    
    return mockUser;
  };

  const logout = () => {
    localStorage.removeItem('mockUser');
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, signInWithGoogle, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
