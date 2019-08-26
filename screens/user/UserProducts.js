import React from "react";
import { FlatList, Platform, Button, Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import ProductItem from "../../components/shop/ProductItem";
import HeaderButton from "../../components/common/HeaderButton";

import colors from "../../constants/colors";
import { deleteProduct } from "../../store/actions";

const UserProducts = props => {
  const { navigate } = props.navigation;
  const userProducts = useSelector(state => state.products.userProducts);
  const dispatch = useDispatch();

  const deleteHandler = id => {
    Alert.alert("Are you sure?", "This action can not be reversed", [
      { text: "No", style: "default" },
      {
        text: "Yes",
        style: "destructive",
        onPress: () => dispatch(deleteProduct(id))
      }
    ]);
  };

  return (
    <FlatList
      data={userProducts}
      keyExtractor={item => item.id}
      renderItem={data => (
        <ProductItem
          data={data.item}
          onSelect={() =>
            navigate({
              routeName: "EditProduct",
              params: {
                data: data.item
              }
            })
          }
        >
          <Button
            color={colors.primary}
            title="Edit"
            onPress={() =>
              navigate({
                routeName: "EditProduct",
                params: {
                  data: data.item
                }
              })
            }
          />
          <Button
            color="red"
            title="Delete"
            onPress={() => deleteHandler(data.item.id)}
          />
        </ProductItem>
      )}
    />
  );
};

UserProducts.navigationOptions = navData => {
  return {
    headerTitle: "Your Products",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
          onPress={() => navData.navigation.toggleDrawer()}
        />
      </HeaderButtons>
    ),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Add"
          iconName={Platform.OS === "android" ? "md-create" : "ios-create"}
          onPress={() => navData.navigation.navigate("EditProduct")}
        />
      </HeaderButtons>
    )
  };
};

export default UserProducts;
