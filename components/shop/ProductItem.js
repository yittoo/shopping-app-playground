import React from "react";
import { View, StyleSheet, Image, Button } from "react-native";

import DefaultText from "../common/DefaultText";
import Touchable from "../common/Touchable";
import Card from "../common/Card";
import colors from "../../constants/colors";

const ProductItem = props => {
  const { data, onSelect, children } = props;
  const { imageUrl, title, price } = data;
  return (
    <Card style={s.product}>
      <View style={s.touchable}>
        <Touchable onPress={onSelect}>
          <View>
            <View style={s.imageWrapper}>
              <Image source={{ uri: imageUrl }} style={s.image} />
            </View>
            <View style={s.details}>
              <DefaultText isBold style={s.title}>
                {title}
              </DefaultText>
              <DefaultText isBold style={s.price}>
                ${price.toFixed(2)}
              </DefaultText>
            </View>
            <View style={s.actions}>
              {children}
            </View>
          </View>
        </Touchable>
      </View>
    </Card>
  );
};

const s = StyleSheet.create({
  product: {
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
    height: "23%",
    paddingHorizontal: '10%'
  },
  details: {
    alignItems: "center",
    height: "17%",
    padding: 10
  }
});

export default ProductItem;
