import React, { useState } from "react";
import { View, StyleSheet, Button } from "react-native";

import DefaultText from "../common/DefaultText";
import CartItem from "./CartItem";
import colors from "../../constants/colors";
import Card from "../common/Card";

const OrderItem = props => {
  const [showDetails, setShowDetails] = useState(false);
  const { data } = props;
  const { totalAmount, items } = data;

  return (
    <Card style={s.orderItem}>
      <View style={s.summary}>
        <DefaultText isBold style={s.totalAmount}>
          ${totalAmount}
        </DefaultText>
        <DefaultText style={s.date}>{data.readableDate}</DefaultText>
      </View>
      <View style={s.buttonWrapper}>
        <Button
          title={showDetails ? "Hide Details" : "Show Details"}
          color={colors.primary}
          onPress={() => setShowDetails(prev => !prev)}
        />
      </View>
      {showDetails && (
        <View style={s.detailItems}>
          {Object.keys(items).map(cartItemKey => {
            const cartItem = items[cartItemKey];
            return <CartItem key={cartItemKey} data={cartItem} />;
          })}
        </View>
      )}
    </Card>
  );
};

const s = StyleSheet.create({
  orderItem: {
    margin: 20,
    padding: 10,
    alignItems: "center"
  },
  summary: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 15
  },
  totalAmount: {
    fontSize: 16
  },
  date: {
    fontSize: 16,
    color: "#888"
  },
  buttonWrapper: { marginBottom: 10 },
  detailItems: {
    width: "100%"
  }
});

export default OrderItem;
