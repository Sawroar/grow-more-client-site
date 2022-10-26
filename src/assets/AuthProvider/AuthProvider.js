import React from 'react';
import { createContext } from 'react';
export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const user = { displayName: 'batash' }
    const authInfo = { user }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;