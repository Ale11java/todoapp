import { useState } from "react";
import { register, login, logout, checkAuthentication } from "../auth";

const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const registerUser = async (
    name: string,
    email: string,
    password: string
  ) => {
    setLoading(true);
    try {
      await register(name, email, password);
      // Handle successful registration
    } catch (error) {
      setError("Registration failed");
    } finally {
      setLoading(false);
    }
  };

  const loginUser = async (email: string, password: string) => {
    setLoading(true);
    try {
      await login(email, password);
      // Handle successful login
    } catch (error) {
      setError("Login failed");
    } finally {
      setLoading(false);
    }
  };

  const logoutUser = async () => {
    setLoading(true);
    try {
      await logout();
      // Handle successful logout
    } catch (error) {
      setError("Logout failed");
    } finally {
      setLoading(false);
    }
  };

  const checkAuthenticationStatus = async () => {
    setLoading(true);
    try {
      const isAuthenticated = await checkAuthentication();
      // Handle authentication status
    } catch (error) {
      setError("Failed to check authentication status");
    } finally {
      setLoading(false);
    }
  };

  return {
    register: registerUser,
    login: loginUser,
    logoutUser,
    checkAuthenticationStatus,
    loading,
    error,
  };
};

export default useAuth;

// import { useState } from "react";

// const useAuth = () => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const register = async () => {
//     try {
//       setLoading(true);
//       await new Promise((resolve, reject) => {
//         setTimeout(() => {
//           reject();
//           setLoading(false);
//         }, 3000);
//       });
//     } catch (error) {
//       setLoading(false);
//       setError("buba");
//     }
//   };

//   const login = async () => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(true);
//       }, 1000);
//     });
//   };

//   return {
//     register,
//     login,
//     loading,
//     error,
//   };
// };

// export default useAuth;
