import React, { createContext, useEffect, useState } from 'react';
import * as SecureStore from 'expo-secure-store';
import { loginApi, signupApi, meApi } from '../api/auth';


export const AuthContext = createContext();


export function AuthProvider({ children }) {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);


useEffect(() => {
(async () => {
const token = await SecureStore.getItemAsync('token');
if (token) {
global.__AUTH_TOKEN__ = token;
try {
const { data } = await meApi();
setUser(data.user);
} catch {}
}
setLoading(false);
})();
}, []);


const login = async (email, password) => {
// DEMO without backend: fake user
const demo = { id: 1, name: 'Demo Buyer', role: 'buyer', email };
setUser(demo);
await SecureStore.setItemAsync('token', 'demo-token');
};


const signup = async (payload) => {
const demo = { id: 2, name: payload.name, role: payload.role || 'buyer', email: payload.email };
setUser(demo);
await SecureStore.setItemAsync('token', 'demo-token');
};


const logout = async () => {
await SecureStore.deleteItemAsync('token');
setUser(null);
};


return (
<AuthContext.Provider value={{ user, loading, login, signup, logout }}>
{children}
</AuthContext.Provider>
);
}