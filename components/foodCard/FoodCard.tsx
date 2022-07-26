import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { StarIcon, LocationMarkerIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import { Rating, AirbnbRating } from "react-native-ratings";
import { urlFor } from "../../sanity";
import { RestaurantScreenNavigation } from "../../hooks";
import { RestaurantState } from "../../type.d";

const FoodCard = (props: RestaurantState) => {
  const { imgUrl, title, rating, genre, address, dishes, long, lat,id } = props;
  const navigation = useNavigation<RestaurantScreenNavigation>();

  return (
    <TouchableOpacity
      style={{
        backgroundColor: "white",
        borderRadius: 5,
        overflow: "hidden",
        marginRight: 18,
      }}
      onPress={() => {
        navigation.navigate("Restaurant", {
          imgUrl,
          title,
          rating,
          genre,
          address,
          dishes,
          long,
          lat,
          id,
        });
      }}
    >
      <Image
        source={{
          uri: urlFor(imgUrl).url(),
        }}
        style={{ height: 144, width: 256 }}
      />
      <View style={{ paddingHorizontal: 12, paddingBottom: 16 }}>
        <Text style={{ fontWeight: "700", fontSize: 18, paddingTop: 8 }}>
          {title}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingVertical: 4,
          }}
        >
          <Rating
            type="star"
            ratingCount={5}
            imageSize={18}
            readonly={true}
            startingValue={rating}
          />
          <Text style={{ fontSize: 12, color: "rgb(107, 114, 128)" }}>
            {genre}
          </Text>
        </View>
        <View
          style={{ flexDirection: "row", alignItems: "center", width: 210 }}
        >
          <LocationMarkerIcon
            color="gray"
            opacity={0.8}
            size={18}
            style={{ marginRight: 6 }}
          />
          <Text style={{ fontSize: 14, color: "rgb(107, 114, 128)" }}>
            {address}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FoodCard;
