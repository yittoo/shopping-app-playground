import React from "react";
import { View, Image, Button, StyleSheet, ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import DefaultText from "../../components/common/DefaultText";
import colors from "../../constants/colors";
import { addToCart } from "../../store/actions";

const ProductDetail = props => {
  const productData = props.navigation.getParam("data");
  const currentCart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  return (
    <ScrollView contentContainerStyle={s.wrapper}>
      <Image style={s.image} source={{ uri: productData.imageUrl }} />
      <View style={s.row}>
        <DefaultText isBold style={s.price}>
          ${productData.price.toFixed(2)}
        </DefaultText>
        <Button
          color={colors.primary}
          title="Add to Cart"
          onPress={() => dispatch(addToCart(productData, currentCart))}
        />
      </View>
      <DefaultText style={s.description}>{productData.description}</DefaultText>
    </ScrollView>
  );
};

const s = StyleSheet.create({
  wrapper: { alignItems: "center" },
  image: { width: "100%", height: 300 },
  price: {
    fontSize: 20,
    color: "#888",
    textAlign: "center",
    marginVertical: 20
  },
  description: { fontSize: 14, textAlign: "center", marginHorizontal: 20 },
  row: {
    width: "60%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10
  }
});

ProductDetail.navigationOptions = navData => {
  const data = navData.navigation.getParam("data");
  return {
    headerTitle: data.title
  };
};

export default ProductDetail;
