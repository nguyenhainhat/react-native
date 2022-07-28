import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  selectBasketItems,
  selectBasketTotal,
} from "../../redux/basketSlice";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";
import { ShoppingBagIcon } from "react-native-heroicons/solid";
import { FormatNumber } from "../NumberFormat";
import { ScreenNavigation } from "../../hooks";

const windowWidth = Dimensions.get("window").width;

const BasketIcon = () => {
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  const navigation = useNavigation<ScreenNavigation>();

  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        zIndex: 2,
        width: windowWidth,
        borderTopColor: "#ccc",
        borderTopWidth: 1,
        height: 50,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#fff",
          flex: 1,
          paddingLeft: 16,
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
            flexDirection: "row",
            marginRight: 10,
            alignItems: "center",
          }}
        >
          <View style={{ position: "relative" }}>
            <ShoppingBagIcon color="#00CCBB" size={30} />
            <Text
              style={{
                position: "absolute",
                bottom: 16,
                right: -6,
                color: "#fff",
                backgroundColor: "#00CCBB",
                fontWeight: "500",
                fontSize: 10,
                paddingHorizontal: 3,
                paddingVertical: 1,
                borderRadius: 10,
              }}
            >
              {items.length}
            </Text>
          </View>
          <Text style={{ color: "#00CCBB", fontWeight: "600" }}>
            <FormatNumber value={basketTotal} />
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#00ccbb",
            alignItems: "center",
            height: "100%",
            width: 120,
            flexDirection: "row",
            justifyContent: "center",
          }}
          onPress={() => navigation.navigate("Basket")}
        >
          <Text
            style={{
              textAlign: "center",
              color: "#fff",
              fontWeight: "600",
              fontSize: 18,
            }}
          >
            Xem hàng
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BasketIcon;
