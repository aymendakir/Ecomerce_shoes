"use client";
import { createContext, useContext, useState } from "react";

import axios from "axios";

const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
  const getProduct = () => {
    return axios.get("http://localhost:3001/getProduct").then((response) => {
      return response.data.response;
    });
  };
  const OneProduct = (id) => {
    return axios
      .get(`http://localhost:3001/oneProduct/${id}`)
      .then((response) => {
        return response.data.response[0];
      });
  };
  const GetBrand = () => {
    return axios.get("http://localhost:3001/getbrand").then((response) => {
      return response.data.response;
    });
  };
  return (
    <AuthContext.Provider value={{ getProduct, OneProduct, GetBrand }}>
      {children}
    </AuthContext.Provider>
  );
};
export default function useAuthContext() {
  return useContext(AuthContext);
}
