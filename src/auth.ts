import PocketBase from "pocketbase";
import AsyncStorage from "@react-native-async-storage/async-storage";

const pb = new PocketBase("http://127.0.0.1:8090");

export const register = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const data = {
      username: name,
      email,
      password,
      passwordConfirm: password,
      name,
    };

    // create user
    await pb.collection("users").create(data);
    // verify email
    await pb.collection("users").requestVerification(email);
    // Handle successful registration
  } catch (error) {
    // Handle registration error
    console.log(error);
  }
};

export const login = async (email: string, password: string) => {
  try {
    const response = await pb
      .collection("users")
      .authWithPassword(email, password);
    await AsyncStorage.setItem("accessToken", response.token);
    // Handle successful login
  } catch (error) {
    // Handle login error
  }
};

export const logout = async () => {
  await AsyncStorage.removeItem("accessToken");
  pb.authStore.clear();
  // Handle logout
};

export const checkAuthentication = async () => {
  const accessToken = await AsyncStorage.getItem("accessToken");
  return !!accessToken;
};

// import PocketPase from "pocketbase";
// import { AsyncStorage } from "react-native";

// const pocketPase = new PocketPase("oq9so5v0c0r9d59");

// export const register = async (
//   name: string,
//   email: string,
//   password: string
// ) => {
//   try {
//     const response = await pocketPase.register(email, password, { name });
//     // Handle successful registration
//   } catch (error) {
//     // Handle registration error
//   }
// };

// export const login = async (email: string, password: string) => {
//   try {
//     const response = await pocketPase.login(email, password);
//     await AsyncStorage.setItem("accessToken", response.accessToken);
//     // Handle successful login
//   } catch (error) {
//     // Handle login error
//   }
// };

// export const logout = async () => {
//   await AsyncStorage.removeItem("accessToken");
//   // Handle logout
// };

// export const checkAuthentication = async () => {
//   const accessToken = await AsyncStorage.getItem("accessToken");
//   return !!accessToken;
// };
