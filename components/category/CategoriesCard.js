import { View, Text } from "react-native";
import React from "react";

const CategoriesCard = ({imgUrl, title}) => {
  return (
    <TouchableOpacity
      style={{
        position: "relative",
        backgroundColor: "white",
        borderRadius: 5,
        marginRight: 8,
        overflow: "hidden",
      }}
    >
      <Image
        source={{
          uri: urlFor(imgUrl).url(),
        }}
        style={{ width: 80, height: 80 }}
      />
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.2)",
        }}
      ></View>
      <Text
        style={{
          position: "absolute",
          bottom: 4,
          left: 0,
          right: 0,
          color: "white",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoriesCard;
