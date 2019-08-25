import React from "react";
import {
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback
} from "react-native";

export default Touchable = props =>
  Platform.OS === "android" && Platform.Version >= 21 ? (
    <TouchableNativeFeedback useForeground {...props} />
  ) : (
    <TouchableOpacity {...props} />
  );
