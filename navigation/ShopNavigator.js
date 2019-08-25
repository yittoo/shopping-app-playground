import { createStackNavigator, createAppContainer } from "react-navigation";
import { Platform } from "react-native";

import colors from "../constants/colors";

import ProductsOverview from "../screens/shop/ProductsOverview";
import ProductDetail from "../screens/shop/ProductDetail";
import Cart from "../screens/shop/Cart";

const ProductsNavigator = createStackNavigator(
  {
    ProductsOverview,
    ProductDetail,
    Cart
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? colors.primary : ""
      },
      headerTintColor: Platform.OS === "android" ? "white" : colors.primary,
      headerTitleStyle: {
        fontFamily: "open-sans-bold"
      },
      headerBackTitleStyle: {
        fontFamily: 'open-sans'
      }
    }
  }
);

export default createAppContainer(ProductsNavigator);
