import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../../services/firebase/auth";
import { initialValues } from "./constant";

const useLogic = () => {
  const navigate = useNavigate();

  const handleOnSubmit = useCallback(
    async (values: { email: string; password: string }) => {
      try {
        await login(values);
        console.log("Login successful");

        // Realiza las acciones necesarias después del inicio de sesión exitoso
        navigate('/dashboard');
      } catch (error) {
        console.log("Login error:", error);
      }
    },
    [navigate]
  );

  return {
    handleOnSubmit,
  };
};

export default useLogic;
