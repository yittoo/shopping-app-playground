import React from "react";
import { FlatList, StyleSheet, Platform } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import ProductItem from "../../components/shop/ProductItem";
import HeaderButton from "../../components/common/HeaderButton";

import { addToCart } from "../../store/actions";

const ProductOverview = props => {
  const products = useSelector(state => state.products.availableProducts);
  const currentCart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={data => (
        <ProductItem
          data={data.item}
          onViewDetail={() =>
            props.navigation.navigate({
              routeName: "ProductDetail",
              params: { data: data.item }
            })
          }
          onAddToCart={() => dispatch(addToCart(data.item, currentCart))}
        />
      )}
    />
  );
};

const s = StyleSheet.create({});

ProductOverview.navigationOptions = navData => ({
  headerTitle: "All Products",
  headerRight: (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title="Cart"
        iconName={Platform.OS === "android" ? "md-cart" : "ios-cart"}
        onPress={() => navData.navigation.navigate({ routeName: "Cart" })}
      />
    </HeaderButtons>
  )
});

export default ProductOverview;
