import React from "react";
import { View, FlatList, Button, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import DefaultText from "../../components/common/DefaultText";
import Card from "../../components/common/Card";
import colors from "../../constants/colors";
import CartItem from "../../components/shop/CartItem";

import { removeFromCart, addOrder } from "../../store/actions";

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  let items = [];
  for (let key in cart.items) {
    items.push({
      ...cart.items[key],
      id: key
    });
  }

  return (
    <View style={s.screen}>
      <Card style={s.summary}>
        <DefaultText isBold style={s.summaryText}>
          Total: <DefaultText style={s.amount}>${cart.totalAmount}</DefaultText>
        </DefaultText>
        <Button
          color={colors.accent}
          title="Order now"
          disabled={!cart.totalAmount}
          onPress={() => dispatch(addOrder(cart.items, cart.totalAmount))}
        />
      </Card>
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={data => (
          <CartItem
            data={data.item}
            onRemove={() => dispatch(removeFromCart(data.item))}
          />
        )}
      />
    </View>
  );
};

Cart.navigationOptions = () => {
  return {
    headerTitle: "Your Cart"
  };
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
  },
  summaryText: {
    fontSize: 18
  },
  amount: {
    color: colors.primary
  }
});
export default Cart;
