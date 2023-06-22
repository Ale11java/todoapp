import { StyleSheet, Text, View } from "react-native";
import React from "react";

type KTitleSubtitleProps = {
  title: string;
  subtitle?: string;
  style?: object;
  titleStyle?: object;
  subtitleStyle?: object;
};

const KTitleSubtitle: React.FC<KTitleSubtitleProps> = ({
  title,
  subtitle,
  style,
  titleStyle,
  subtitleStyle,
}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      {subtitle && (
        <Text style={[styles.subtitle, subtitleStyle]}>{subtitle}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
  },
});

export default KTitleSubtitle;
