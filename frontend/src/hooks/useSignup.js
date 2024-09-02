import { useState } from "react";
import axios from "axios"

export const useSignUp = () => {
  const [error, setError] = useState(null)
  const [isLoading, setLoading] = useState(false)

  const signup = async (name, email, password) => {
    setLoading(true)
    setError(null);

    try {
       await axios.post("http://localhost:5000/register", {
        name,
        email,
        password
      })
      
      setLoading(false)
    } catch (err) {
      setLoading(false)
      const errorMessage = err.respons?.data?.message
      setError(errorMessage)
      throw new Error(errorMessage)
    }
  }
  return { signup, isLoading, error };
}
