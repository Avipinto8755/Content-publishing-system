import { createContext, useContext, useState } from "react";
import usersService from "../services/usersService";

const fn_error_context_must_be_used = () => {
  throw new Error(
    "must use authcontext provider for costumer to work properly"
  );
};

export const authContext = createContext({
  logout: fn_error_context_must_be_used,
  login: fn_error_context_must_be_used,
  createUser: fn_error_context_must_be_used,
  user: null,
});
authContext.displayName = "auth";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(usersService.getUser());

  const refreshUser = () => setUser(usersService.getUser());

  const login = async (credential) => {
    const response = await usersService.loginUser(credential);

    refreshUser();

    return response;
  };

  const logout = () => {
    usersService.logout();
    refreshUser();
  };

  return (
    <authContext.Provider
      value={{ logout, login, user, createUser: usersService.createUser }}
    >
      {children}
    </authContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(authContext);
};
