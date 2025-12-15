import apiClient from "./apiClient";

export const RegisterUser = async userData =>
  apiClient.post("/register", userData);

export const LoginUser = async userData => apiClient.post("/login", userData);
