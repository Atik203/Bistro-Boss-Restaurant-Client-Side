import axios from "axios";
import { useContext, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("access-token");
        config.headers.authorization = `Bearer ${token}`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }, [logOut, navigate]);

  axiosSecure.interceptors.response.use(
    async (res) => {
      return res;
    },
    async (error) => {
      if (error.response?.status == 401 || error.response?.status == 403) {
        await logOut()
          .then(() => {
            navigate("/login");
          })
          .catch((error) => console.log(error));
      }
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
