import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectRestaurants } from "../../../redux/restaurantSlice";
import { XIcon } from "react-native-heroicons/solid";
import * as Progress from "react-native-progress";
import { Bar } from "react-native-progress";
import MapView from "react-native-maps";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurants);

  console.log(restaurant);

  return (
    <View style={{ backgroundColor: "#00CCBB", flex: 1, paddingTop: 16 }}>
      <SafeAreaView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 6,
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XIcon color="white" size={30} />
          </TouchableOpacity>
          <Text>Trợ giúp</Text>
        </View>
        <View
          style={{
            backgroundColor: "white",
            marginVertical: 10,
            marginHorizontal: 6,
            borderRadius: 6,
            padding: 16,
            zIndex: 99,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <Text style={{ fontSize: 14, color: "gray" }}>
                Thời gian dự kiến
              </Text>
              <Text style={{ fontSize: 24, fontWeight: "bold" }}>
                20 - 30 phút
              </Text>
            </View>
            <Image
              source={{
                uri: "https://mobiler.com.br/2020/wp-content/uploads/2020/10/781e2cdb91d16efbfe31b7b9a3202304.jpg",
              }}
              style={{ height: 80, width: 80, borderRadius: 8 }}
            />
          </View>
          <Progress.Bar size={30} indeterminate={true} />
          <Text style={{ marginTop: 10, color: "rgb(107, 114, 128)" }}>
            Yêu cầu về món ăn {restaurant.title} đang được chuẩn bị
          </Text>
        </View>
      </SafeAreaView>
      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        mapType="mutedStandard"
        style={{ flex: 1, marginTop: -40, zIndex: 0 }}
      ></MapView>
      <SafeAreaView
        style={{
          backgroundColor: "white",
          flexDirection: "row",
          padding: 10,
          height: 80,
          alignItems: "center"
        }}
      >
        <Image
          source={{
            uri: "https://kenh14cdn.com/2020/11/2/photo-1-16043339826952006080114.jpg",
          }}
          style={{
            height: 52,
            width: 52,
            backgroundColor: "rgb(209, 213, 219)",
            borderRadius: 10,
            marginRight: 10,
          }}
        />
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Faker</Text>
          <Text style={{ color: "rgb(107, 114, 128)" }}>Shipper của bạn</Text>
        </View>

        <Text style={{ color: "#00CCBB", fontSize: 16 }}>Call</Text>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
