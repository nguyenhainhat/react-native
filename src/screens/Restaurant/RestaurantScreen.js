import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useLayoutEffect, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import {
  ArrowLeftIcon,
  StarIcon,
  LocationMarkerIcon,
  QuestionMarkCircleIcon,
  ChevronRightIcon,
} from "react-native-heroicons/outline";
import { Rating } from "react-native-ratings";
import { urlFor } from "../../../sanity";
import DishRow from "../../../components/dishRow/DishRow";
import { useDispatch, useSelector } from "react-redux";
import { selectBasketItems } from "../../../redux/basketSlice";
import BasketIcon from "../../../components/basketIcon/BasketIcon";
import { setRestaurant } from "../../../redux/restaurantSlice";

const RestaurantScreen = () => {
  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_desc,
      dishes,
      long,
      lat,
    },
  } = useRoute();
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  const items = useSelector((state) => state.basket.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setRestaurant({
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_desc,
        dishes,
        long,
        lat,
      })
    );
  }, [dispatch]);

  return (
    <>
      {items?.length > 0 && <BasketIcon />}
      <ScrollView>
        <View style={{ position: "relative" }}>
          <Image
            source={{
              uri: urlFor(imgUrl).url(),
            }}
            style={{ height: 224 }}
          />
          <TouchableOpacity
            onPress={navigation.goBack}
            style={{
              position: "absolute",
              top: 56,
              left: 20,
              backgroundColor: "#f3f4f6",
              borderRadius: 100,
              padding: 8,
            }}
          >
            <ArrowLeftIcon size={20} color="#00CCBB" />
          </TouchableOpacity>
        </View>

        <View style={{ backgroundColor: "white" }}>
          <View style={{ paddingHorizontal: 16, paddingTop: 16 }}>
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>{title}</Text>
            <View style={{ flexDirection: "column", alignItems: "flex-start" }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 4,
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Rating
                    type="star"
                    ratingCount={5}
                    imageSize={18}
                    readonly={true}
                    startingValue={rating}
                    
                  />
                  <Text style={{ fontSize: 12, color: "rgb(107 ,114, 128)",  marginLeft: 10 }}>
                    {genre}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 8,
                }}
              >
                <LocationMarkerIcon color="gray" opacity={0.4} size={20} />
                <Text style={{ fontSize: 12, color: "#6b7280" }}>
                  Nearby {address}
                </Text>
              </View>
            </View>
            <Text style={{ color: "#6b7280", marginTop: 8, paddingBottom: 16 }}>
              {short_desc}
            </Text>
          </View>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 16,
              borderWidth: 1,
              borderColor: "#d1d5db",
            }}
          >
            <QuestionMarkCircleIcon color="gray" opacity={0.4} size={20} />
            <Text
              style={{
                paddingLeft: 8,
                flex: 1,
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              Have a food allegry
            </Text>
            <ChevronRightIcon color="#00CCBB" opacity={0.4} size={20} />
          </TouchableOpacity>
        </View>
        <View>
          <Text
            style={{
              paddingHorizontal: 16,
              paddingVertical: 24,
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Menu
          </Text>
        </View>
        {dishes?.map((item, index) => (
          <DishRow
            index={index}
            dishesLength={dishes?.length}
            key={item._id}
            id={item._id}
            name={item.name}
            desc={item.short_description}
            price={item.price}
            imgUrl={item.image.asset._ref}
          />
        ))}
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;
