import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../../services/firebase/auth";

const useLogic = () => {
  const navigate = useNavigate();

  const handleOnSubmit = useCallback(
    async (values: { email: string; password: string }) => {
      try {
        await login(values);
        console.log("Login successful");

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
