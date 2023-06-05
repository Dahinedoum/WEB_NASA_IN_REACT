import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../../services/firebase/auth";
import { initialValues } from "./constant";

const useLogic = () => {
    const navigate = useNavigate()

  const handleOnSubmit = useCallback(
    async (values: { email: string; password: string }) => {
      try {
        await login(initialValues);
      
        const user = await login (initialValues)
        console.log(user)
        if (user) {
            navigate('/dashboard')
        }
      } catch (e) {
        console.log (e);
      }
    },
    [navigate]
  )

  return {
    handleOnSubmit,
  }
}

export default useLogic