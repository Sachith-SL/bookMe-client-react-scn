import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

// Create an axios instance
const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const setAuthtoken = (token: string) => {
  localStorage.setItem("token", token);
};

export const setRole = (role:string) =>{
    localStorage.setItem('role',role);
  }

export const getAuthtoken = () => {
  return localStorage.getItem("token");
};

// Authentication Services
export const login = async (email: any, password: any) => {
  try {
    const response = await axiosInstance.post("/auth/login", {
      email,
      password,
    });
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const register = async (userData: any, token: any) => {
  try {
    const response = await axiosInstance.post("/auth/register", userData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (err) {
    throw err;
  }
};

// User Management Services
export const getAllUsers = async (token: any) => {
  try {
    const response = await axiosInstance.get("/admin/get-all-users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const getYourProfile = async (token: any) => {
  try {
    const response = await axiosInstance.get("/adminuser/get-profile", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const getUserById = async (userId: any, token: any) => {
  try {
    const response = await axiosInstance.get(`/admin/get-users/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const deleteUser = async (userId: any, token: any) => {
  try {
    const response = await axiosInstance.delete(`/admin/delete/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const updateUser = async (userId: any, userData: any, token: any) => {
  try {
    const response = await axiosInstance.put(
      `/admin/update/${userId}`,
      userData,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  } catch (err) {
    throw err;
  }
};

// Authentication Checkers
export const logout = () => {

  localStorage.removeItem("token");
  localStorage.removeItem("role");
};

export const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  return !!token;
};

export const isAdmin = () => {
  const role = localStorage.getItem("role");
  return role === "ADMIN";
};

export const isUser = () => {
  const role = localStorage.getItem("role");
  return role === "USER";
};

export const adminOnly = () => {
  return isAuthenticated() && isAdmin();
};
