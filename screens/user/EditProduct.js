import React, { useState, useEffect, useCallback } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  TextInput,
  Platform
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch } from "react-redux";

import { createProduct, updateProduct } from "../../store/actions";

import DefaultText from "../../components/common/DefaultText";
import HeaderButton from "../../components/common/HeaderButton";

const EditProduct = props => {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();
  const data = props.navigation.getParam("data");

  const submitHandler = useCallback(() => {
    const dataToPush = { title, imageUrl, price: +price, description };
    if (data) {
      dispatch(updateProduct(data.id, dataToPush));
    } else {
      dispatch(createProduct(dataToPush));
    }
    props.navigation.pop();
  }, [dispatch, data ? data.id : "", title, description, imageUrl, price]);

  useEffect(() => {
    props.navigation.setParams({ submit: submitHandler });
  }, [submitHandler]);

  useEffect(() => {
    if (data) {
      setTitle(data.title);
      setImageUrl(data.imageUrl);
      setPrice(data.price.toString());
      setDescription(data.description);
    }
  }, []);

  return (
    <ScrollView>
      <View style={s.form}>
        <View style={s.inputWrapper}>
          <DefaultText isBold style={s.label}>
            Title
          </DefaultText>
          <TextInput style={s.input} value={title} onChangeText={setTitle} />
        </View>
        <View style={s.inputWrapper}>
          <DefaultText isBold style={s.label}>
            Image Url
          </DefaultText>
          <TextInput
            style={s.input}
            value={imageUrl}
            onChangeText={setImageUrl}
          />
        </View>
        {data ? null : (
          <View style={s.inputWrapper}>
            <DefaultText isBold style={s.label}>
              Price
            </DefaultText>
            <TextInput
              style={s.input}
              value={price}
              onChangeText={setPrice}
              keyboardType="number-pad"
            />
          </View>
        )}
        <View style={s.inputWrapper}>
          <DefaultText isBold style={s.label}>
            Description
          </DefaultText>
          <TextInput
            style={s.input}
            value={description}
            onChangeText={setDescription}
          />
        </View>
      </View>
    </ScrollView>
  );
};

EditProduct.navigationOptions = navData => {
  const data = navData.navigation.getParam("data");
  const submitHandler = navData.navigation.getParam("submit");
  const headerTitle = data ? `Edit ${data.title}` : "Add new product";
  return {
    headerTitle,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Save"
          iconName={
            Platform.OS === "android" ? "md-checkmark" : "ios-checkmark"
          }
          onPress={submitHandler}
        />
      </HeaderButtons>
    )
  };
};

const s = StyleSheet.create({
  form: {
    margin: 20
  },
  inputWrapper: { width: "100%" },
  label: { marginVertical: 8 },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1
  }
});

export default EditProduct;
