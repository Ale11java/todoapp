import { ScrollView } from "react-native";
import React from "react";
import { KCircles } from ".";

type Props = {
  children: React.ReactNode;
};

const KContainer = (props: Props) => {
  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        backgroundColor: "#eee",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <KCircles />
      {props.children}
    </ScrollView>
  );
};

export default KContainer;
