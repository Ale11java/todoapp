import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import React from "react";

type RegisterLabelProps = {
  description: string;
  style?: StyleProp<ViewStyle>;
  descriptionStyle?: StyleProp<TextStyle>;
  onPressRegister?: () => void;
};

const KRegisterLabel: React.FC<RegisterLabelProps> = ({
  description,
  style,
  descriptionStyle,
  onPressRegister,
}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.description, descriptionStyle]}>
        {description}
        {""}
      </Text>
      {onPressRegister && (
        <TouchableOpacity onPress={onPressRegister}>
          <Text style={{ color: "blue" }}>Register</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: "center" },
  description: { fontSize: 15, marginTop: 10 },
});

export default KRegisterLabel;
