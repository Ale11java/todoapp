import { TextInput, TextInputProps, ViewStyle } from "react-native";
import React from "react";

type Props = TextInputProps & {
  password?: boolean;
  email?: boolean;
};

const KTextInput = (props: Props) => {
  const { password = false, email = false } = props;
  const defaultStyle: ViewStyle = {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
    height: 40,
    width: "80%",
  };
  return (
    <TextInput
      {...props}
      secureTextEntry={password ? true : false}
      autoCorrect={password ? false : true}
      autoCapitalize={password ? "none" : "words"}
      keyboardType={email ? "email-address" : "default"}
      style={[defaultStyle, props.style]}
      placeholderTextColor={"#70706f"}
    />
  );
};

export default KTextInput;
