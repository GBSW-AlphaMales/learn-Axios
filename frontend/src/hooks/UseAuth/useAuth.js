import { useState } from "react";
import axiosInstance from "../../api/axios";

const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const signup = async (email, name, password) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.post("/api/user/signup", {
        email,
        name,
        password,
      });
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.post("/api/user/signin", {
        email,
        password,
      });
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { signup, login, loading, error, data };
};

export default useAuth;
