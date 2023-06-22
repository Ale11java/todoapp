import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import React, { FC } from "react";
import { MotiView } from "moti";

interface KButtonProps extends TouchableOpacityProps {
  title: string;
  onPress: () => void;
  bgColor?: string;
  textColor?: string;
  loading?: boolean;
}

const KButton: FC<KButtonProps> = ({
  title,
  onPress,
  bgColor = "#faa885",
  textColor,
  loading = false,
  disabled,
}: KButtonProps) => {
  return (
    <MotiView
      from={{ scale: 0.8, translateY: -30 }}
      animate={{ scale: 1, translateY: 0 }}
    >
      <TouchableOpacity
        disabled={loading || disabled}
        onPress={onPress}
        style={[
          styles.btn,
          {
            backgroundColor: loading || disabled ? "grey" : bgColor,
          },
        ]}
      >
        {loading ? (
          <ActivityIndicator color="black" />
        ) : (
          <Text style={{ color: textColor, fontSize: 18, fontWeight: "bold" }}>
            {title}
          </Text>
        )}
      </TouchableOpacity>
    </MotiView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    width: 300,
    height: 60,
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default KButton;
