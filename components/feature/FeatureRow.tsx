import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import FoodCard from "../foodCard/FoodCard";
import { TextDesc } from "./style";
import { RestaurantRows } from "../../type.d";

interface PropsRows {
  id: String;
  title: String;
  description: String;
  featuredCategory: String;
  restaurants: Array<RestaurantRows>;
}

const FeatureRow = ({
  id,
  title,
  description,
  featuredCategory,
  restaurants,
}: PropsRows) => {
  return (
    <View style={{ marginBottom: 20 }}>
      <View
        style={{
          marginTop: 12,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 16,
        }}
      >
        <Text style={{ fontWeight: "700", fontSize: 16 }}>{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <TextDesc>{description}</TextDesc>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        style={{ paddingTop: 16 }}
      >
        {restaurants?.map((item) => (
          <FoodCard
            imgUrl={item.image.asset._ref}
            title={item.name}
            rating={item.rating}
            genre={item.type.name}
            // address={item.address}
            short_desc={item.short_description}
            dishes={item.dishes}
            long={item.long}
            lat={item.lat}
            key={item._id}
            id={undefined}
            address={undefined}
            result={[]}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeatureRow;
