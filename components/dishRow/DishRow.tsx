import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { urlFor } from "../../sanity";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItems,
  selectBasketItemsWithId,
} from "../../redux/basketSlice";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { FormatNumber } from "../NumberFormat";

const DishRow = ({ id, name, desc, price, imgUrl, index, dishesLength }) => {
  const [isPress, setIsPress] = useState(false);
  const items = useSelector((state) => selectBasketItemsWithId(state, id));
  // const itemsLenght = useSelector(selectBasketItems).length;
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, desc, price, imgUrl }));
  };
  const removeItemToBasket = () => {
    if (items.length < 0) return;

    dispatch(removeFromBasket({ id }));
  };

  return (
    <TouchableOpacity
      style={{
        flexDirection: "column",
        padding: 16,
        backgroundColor: "#fff",
        position: "relative",
        marginBottom: dishesLength - 1 === index ? 50 : 0,
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
      }}
      onPress={() => setIsPress(!isPress)}
    >
      <View style={{ flexDirection: "row", flex: 1, marginBottom: 16 }}>
        <Image
          source={{
            uri: urlFor(imgUrl).url(),
          }}
          style={{ width: 80, height: 80, padding: 16, marginRight: 10 }}
        />
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 18, marginBottom: 4 }}>{name}</Text>
          <Text style={{ color: "#9ca3af", flex: 1, paddingRight: 8 }}>
            {desc}
          </Text>
          <Text>
            <FormatNumber value={price} />
          </Text>
        </View>
      </View>
      {isPress && (
        <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
          <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
              <TouchableOpacity
                style={{
                  padding: 2,
                  backgroundColor: "#00CCBB",
                  marginRight: 8,
                  borderRadius: 4,
                }}
                disabled={items?.length > 0 ? false : true}
                onPress={removeItemToBasket}
              >
                <MinusCircleIcon color="#fff" size={18} />
              </TouchableOpacity>
          

            <Text>{items?.length > 0 ? items?.length: 0}</Text>

            <TouchableOpacity
              style={{
                padding: 2,
                backgroundColor: "#00CCBB",
                marginLeft: 8,
                borderRadius: 4,
              }}
              onPress={addItemToBasket}
            >
              <PlusCircleIcon color="#fff" size={18} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default DishRow;
