import React from "react";
import {
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer
} from "react-navigation";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import colors from "../constants/colors";

import ProductsOverview from "../screens/shop/ProductsOverview";
import ProductDetail from "../screens/shop/ProductDetail";
import Cart from "../screens/shop/Cart";

import Orders from "../screens/shop/Orders";

import UserProducts from "../screens/user/UserProducts";
import EditProduct from "../screens/user/EditProduct";

const defaultOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? colors.primary : ""
    },
    headerTintColor: Platform.OS === "android" ? "white" : colors.primary,
    headerTitleStyle: {
      fontFamily: "open-sans-bold"
    },
    headerBackTitleStyle: {
      fontFamily: "open-sans"
    }
  }
};

const ProductsNavigator = createStackNavigator(
  {
    ProductsOverview,
    ProductDetail,
    Cart
  },
  {
    ...defaultOptions,
    navigationOptions: {
      drawerIcon: drawerConfig => (
        <Ionicons
          name={Platform.OS === "android" ? "md-cart" : "ios-cart"}
          size={23}
          color={drawerConfig.tintColor}
        />
      )
    }
  }
);

const OrdersNavigator = createStackNavigator(
  {
    Orders
  },
  {
    ...defaultOptions,
    navigationOptions: {
      drawerIcon: drawerConfig => (
        <Ionicons
          name={Platform.OS === "android" ? "md-list" : "ios-list"}
          size={23}
          color={drawerConfig.tintColor}
        />
      )
    }
  }
);
const AdminNavigator = createStackNavigator(
  {
    UserProducts,
    EditProduct
  },
  {
    ...defaultOptions,
    navigationOptions: {
      drawerIcon: drawerConfig => (
        <Ionicons
          name={Platform.OS === "android" ? "md-create" : "ios-create"}
          size={23}
          color={drawerConfig.tintColor}
        />
      )
    }
  }
);

const ShopNavigator = createDrawerNavigator(
  {
    Products: ProductsNavigator,
    Orders: OrdersNavigator,
    Admin: AdminNavigator
  },
  {
    contentOptions: {
      activeTintColor: colors.primary
    }
  }
);

export default createAppContainer(ShopNavigator);
