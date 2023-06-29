import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authcontext";

const SignOut = ({ redirect = "/" }) => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  useEffect(() => {
    logout();
    navigate(redirect);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate, logout]);

  return null;
};

export default SignOut;
