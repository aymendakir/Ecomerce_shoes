import { createContext, useContext, useState } from "react";

import axios from "axios";

const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
  const getProduct = () => {
    return axios
      .get("https://ecommerce-backend-topaz-one.vercel.app/getProduct")
      .then((response) => {
        return response.data.response;
      });
  };
  const OneProduct = (id) => {
    return axios
      .get(`https://ecommerce-backend-topaz-one.vercel.app/oneProduct/${id}`)
      .then((response) => {
        return response.data.response[0];
      });
  };
  const GetBrand = () => {
    return axios
      .get("https://ecommerce-backend-topaz-one.vercel.app/getbrand")
      .then((response) => {
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
