import React from "react";
import { StyleSheet, Text } from "react-native";

const DefaultText = ({ children, style, isBold }) => (
  <Text
    style={{
      ...s.text,
      fontFamily: isBold ? "open-sans-bold" : "open-sans",
      ...style
    }}
  >
    {children}
  </Text>
);

const s = StyleSheet.create({
  text: {
    color: "#333"
  }
});

export default DefaultText;
