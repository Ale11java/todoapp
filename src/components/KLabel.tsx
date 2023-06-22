import React from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

type SignInLabelProps = {
  label: string;
  viewstyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
};

const KLabel: React.FC<SignInLabelProps> = ({
  label,
  viewstyle,
  labelStyle,
  onPress,
}) => {
  return (
    <View style={[styles.container, viewstyle]}>
      <Text style={[styles.label, labelStyle]}>
        {label}
        {""}
      </Text>
      {onPress && (
        <TouchableOpacity onPress={onPress}>
          <Text style={{ color: "blue" }}>Sign in</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: "center" },
  label: { fontSize: 15, marginTop: 10 },
});

export default KLabel;
