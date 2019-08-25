import React from "react";
import { View, StyleSheet, Image, Button } from "react-native";

import DefaultText from "../common/DefaultText";
import Touchable from "../common/Touchable";
import colors from "../../constants/colors";

const ProductItem = props => {
  const { data, onViewDetail, onAddToCart } = props;
  const { imageUrl, title, price } = data;
  return (
    <View style={s.product}>
      <View style={s.touchable}>
        <Touchable onPress={onViewDetail}>
          <View>
            <View style={s.imageWrapper}>
              <Image source={{ uri: imageUrl }} style={s.image} />
            </View>
            <View style={s.details}>
              <DefaultText isBold style={s.title}>{title}</DefaultText>
              <DefaultText isBold style={s.price}>
                ${price.toFixed(2)}
              </DefaultText>
            </View>
            <View style={s.actions}>
              <Button
                color={colors.primary}
                title="View Details"
                onPress={onViewDetail}
              />
              <Button
                color={colors.primary}
                title="To Cart"
                onPress={onAddToCart}
              />
            </View>
          </View>
        </Touchable>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  product: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 9,
    borderRadius: 10,
    backgroundColor: "white",
    height: 300,
    margin: 20
  },
  touchable: {
    overflow: "hidden",
    borderRadius: 10
  },
  imageWrapper: {
    width: "100%",
    height: "60%",
    overflow: "hidden",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  image: {
    width: "100%",
    height: "100%"
  },
  title: {
    fontSize: 18,
    marginVertical: 4
  },
  price: { fontSize: 14, color: "#888" },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "25%",
    paddingHorizontal: 20
  },
  details: {
    alignItems: "center",
    height: "15%",
    padding: 10
  }
});

export default ProductItem;
