import React from "react";
import { View, FlatList, Button, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import DefaultText from "../../components/common/DefaultText";
import colors from "../../constants/colors";
import CartItem from "../../components/shop/CartItem";

const CartScreen = () => {
  const cart = useSelector(state => state.cart);

  let items = [];
  for (let key in cart.items) {
    items.push({
      ...cart.items[key],
      id: key
    });
  }

  return (
    <View style={s.screen}>
      <View style={s.summary}>
        <DefaultText isBold style={s.summaryText}>
          Total: <DefaultText style={s.amount}>${cart.totalAmount}</DefaultText>
        </DefaultText>
        <Button
          color={colors.accent}
          title="Order now"
          disabled={!cart.totalAmount}
        />
      </View>
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={data => <CartItem data={data.item} onRemove={() => {}} />}
      />
    </View>
  );
};

const s = StyleSheet.create({
  screen: {
    margin: 20
  },
  summary: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white"
  },
  summaryText: {
    fontSize: 18
  },
  amount: {
    color: colors.primary
  }
});
export default CartScreen;
