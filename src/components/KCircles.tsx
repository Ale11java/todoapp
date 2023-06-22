import { View } from "react-native";
import React from "react";
import { MotiView } from "moti";

type RoundCircleViewProps = {
  bg: string;
};
const RoundCircleView = (props: RoundCircleViewProps) => (
  <View
    style={{
      width: 250,
      height: 250,
      borderRadius: 999,
      backgroundColor: props.bg,
    }}
  />
);

const KCircles = () => {
  return (
    <>
      <MotiView
        from={{ opacity: 0, translateX: -150 }}
        animate={{ opacity: 0.5, translateX: 0 }}
        delay={800}
        style={{
          position: "absolute",
          top: -150,
          left: 0,
          zIndex: 100,
        }}
      >
        <RoundCircleView bg="black" />
      </MotiView>
      <MotiView
        from={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.5, scale: 1 }}
        delay={400}
        style={{
          position: "absolute",
          top: -50,
          left: -150,
        }}
      >
        <RoundCircleView bg="black" />
      </MotiView>
    </>
  );
};

export default KCircles;
