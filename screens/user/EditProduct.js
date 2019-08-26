import React from "react";
import { View, StyleSheet } from "react-native";

import DefaultText from "../../components/common/DefaultText";

const EditProduct = () => {
  return (
    <View>
      <DefaultText>Edit product view</DefaultText>
    </View>
  );
};

EditProduct.navigationOptions = navData => {
  const data = navData.navigation.getParam("data");
  const headerTitle = data
    ? `Edit ${data.title}`
    : "Add new product";
  return {
    headerTitle
  };
};

const s = StyleSheet.create({});

export default EditProduct;
