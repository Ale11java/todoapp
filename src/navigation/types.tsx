import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type AuthParamList = {
  RegisterScreen: undefined;
  LoginScreen: undefined;
  PlaygroundScreen: undefined;
  DashboardScreen: undefined;
};

export type NavigationParamProps<Screen extends keyof AuthParamList> =
  NativeStackScreenProps<AuthParamList, Screen>;
