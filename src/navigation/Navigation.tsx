import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  RegisterScreen,
  LoginScreen,
  PlaygroundScreen,
  DashboardScreen,
} from "../screens";
import { AuthParamList } from "./types";

const AuthStack = createNativeStackNavigator<AuthParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <AuthStack.Navigator screenOptions={{ headerShown: false }}>
        <AuthStack.Screen name="RegisterScreen" component={RegisterScreen} />
        <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
        <AuthStack.Screen
          name="PlaygroundScreen"
          component={PlaygroundScreen}
        />
        <AuthStack.Screen name="DashboardScreen" component={DashboardScreen} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
