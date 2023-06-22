import React, { useState } from "react";
import { NavigationParamProps } from "../navigation/types";
import * as Components from "../components";
import useAuth from "../hooks/useAuth";

const RegisterScreen = ({
  navigation,
  route,
}: NavigationParamProps<"RegisterScreen">) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, register } = useAuth();

  const handleRegister = async () => {
    try {
      await register(name, email, password);
      // Handle successful registration and navigation
    } catch (error) {}
  };

  return (
    <Components.KContainer>
      <Components.KTitleSubtitle
        title="Welcome onboard!"
        subtitle="Let's help you meet your tasks"
        style={{ marginBottom: 70 }}
        titleStyle={{ fontWeight: "bold" }}
        subtitleStyle={{ fontWeight: "normal" }}
      />
      {/* Other screen content */}
      <Components.KTextInput
        name
        style={{ marginBottom: 20 }}
        placeholder={"Enter your full name"}
        value={name}
        onChangeText={setName}
        autoFocus
      />
      <Components.KTextInput
        email
        style={{ marginBottom: 20 }}
        placeholder={"Enter your email"}
        value={email}
        onChangeText={setEmail}
      />
      <Components.KTextInput
        password
        style={{ marginBottom: 20 }}
        placeholder={"Enter password"}
        value={password}
        onChangeText={setPassword}
      />
      <Components.KTextInput
        password
        style={{ marginBottom: 40 }}
        placeholder={"Confirm password"}
      />

      <Components.KButton
        title={"REGISTER"}
        textColor={"#ffffff"}
        onPress={handleRegister}
        //onPress={() => navigation.navigate("DashboardScreen")}
        //loading={loading}
        disabled={loading}
      />

      <Components.KLabel
        label="Already have an account?"
        labelStyle={{ fontWeight: "normal" }}
        onPress={() => navigation.navigate("LoginScreen")}
      />
      <Components.KButton
        title={"Let's Practice React Native"}
        textColor={"#ffffff"}
        onPress={() => navigation.navigate("PlaygroundScreen")}
        loading={loading}
        disabled={loading}
        bgColor={"blue"}
      />
    </Components.KContainer>
  );
};

export default RegisterScreen;
