import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import DefaultText from "../common/DefaultText";
import Touchable from "../common/Touchable";

const CartItem = props => {
  const { data, onRemove } = props;
  const { productTitle, productPrice, quantity, sum } = data;
  return (
    <View style={s.cartItem}>
      <View style={s.itemData}>
        <DefaultText isBold style={s.quantity}>
          {quantity}{" "}
        </DefaultText>
        <DefaultText isBold style={s.mainText}>
          {productTitle}
        </DefaultText>
      </View>
      <View style={s.itemData}>
        <DefaultText isBold style={s.mainText}>
          ${sum}
        </DefaultText>
        <View style={s.deleteButton}>
          <Touchable onPress={onRemove}>
            <Ionicons
              name={Platform.OS === "android" ? "md-trash" : "ios-trash"}
              size={23}
              color="red"
            />
          </Touchable>
        </View>
      </View>
    </View>
  );
};
const s = StyleSheet.create({
  cartItem: {
    padding: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20
  },
  itemData: {
    flexDirection: "row",
    alignItems: "center"
  },
  quantity: {
    color: "#888",
    fontSize: 16
  },
  mainText: {
    fontSize: 16
  },
  deleteButton: {
    marginLeft: 20
  }
});
export default CartItem;
