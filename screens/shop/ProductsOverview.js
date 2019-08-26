import React from "react";
import { FlatList, StyleSheet, Platform, Button } from "react-native";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import ProductItem from "../../components/shop/ProductItem";
import HeaderButton from "../../components/common/HeaderButton";

import colors from "../../constants/colors";

import { addToCart } from "../../store/actions";

const ProductOverview = props => {
  const products = useSelector(state => state.products.availableProducts);
  const dispatch = useDispatch();

  const onSelectItemHandler = data => {
    props.navigation.navigate({
      routeName: "ProductDetail",
      params: { data }
    });
  };

  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={data => (
        <ProductItem
          data={data.item}
          onSelect={() => onSelectItemHandler(data.item)}
        >
          <Button
            color={colors.primary}
            title="View Details"
            onPress={() => onSelectItemHandler(data.item)}
          />
          <Button
            color={colors.primary}
            title="To Cart"
            onPress={() => dispatch(addToCart(data.item))}
          />
        </ProductItem>
      )}
    />
  );
};

const s = StyleSheet.create({});

ProductOverview.navigationOptions = navData => ({
  headerTitle: "All Products",
  headerLeft: (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title="Orders"
        iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
        onPress={() => navData.navigation.toggleDrawer()}
      />
    </HeaderButtons>
  ),
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
