import React, { useState } from "react";
import { NavigationParamProps } from "../navigation/types";
import {
  KButton,
  KContainer,
  KRegisterLabel,
  KTextInput,
  KTitleSubtitle,
} from "../components";
import useAuth from "../hooks/useAuth";

const LoginScreen = ({
  navigation,
  route,
}: NavigationParamProps<"LoginScreen">) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading, error } = useAuth();

  const handleLogin = async () => {
    await login(email, password);
    // Handle successful login and navigation
  };

  return (
    <KContainer>
      <KTitleSubtitle
        title="Welcome onboard!"
        subtitle="Let's help you meet your tasks"
        style={{ marginBottom: 70 }}
        titleStyle={{ fontWeight: "bold" }}
        subtitleStyle={{ fontWeight: "normal" }}
      />
      {/* Other screen content */}
      <KTextInput
        style={{ marginBottom: 20 }}
        placeholder={"Enter your email"}
      />
      <KTextInput
        style={{ marginBottom: 20 }}
        placeholder={"Confirm password"}
      />

      <KButton
        title={"LOGIN"}
        textColor={"#ffffff"}
        onPress={handleLogin}
        disabled={loading}
      />
      <KRegisterLabel
        description="Don't have an account?"
        descriptionStyle={{ fontWeight: "bold" }}
        onPressRegister={() => navigation.navigate("RegisterScreen")}
      />
    </KContainer>
  );
};

export default LoginScreen;
