import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import {
  Container,
  ContainerLogo,
  Logo,
  Title,
  TitleLocation,
  TitleLogo,
  ViewSearch,
  ViewSearchContainer,
} from "./style";
import {
  ChevronDownIcon,
  SearchIcon,
  AdjustmentsIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import Categories from "../../../components/category/Categories";
import { useDispatch, useSelector } from "react-redux";
import FeatureRow from "../../../components/feature/FeatureRow";
import { getRestaurant } from "../../../redux/data";

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const restaurantData = useSelector((state) => state.datas.restaurant);
  useEffect(() => {
    dispatch(getRestaurant());
  }, [dispatch]);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView style={{ backgroundColor: "white", paddingTop: 5 }}>
      <ContainerLogo>
        <Logo
          source={{
            uri: "https://www.iconlogovector.com/uploads/image/2022/01/shopee.png",
          }}
        />

        <View style={{ flex: 1 }}>
          <TitleLogo>Lazada</TitleLogo>
          <TitleLocation>
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </TitleLocation>
        </View>

        <UserIcon size={35} color="#00CCBB" />
      </ContainerLogo>

      <ViewSearch>
        <ViewSearchContainer>
          <SearchIcon color="gray" size={20} />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </ViewSearchContainer>
        <AdjustmentsIcon color="#00CCBB" />
      </ViewSearch>

      {/* Body */}
      <ScrollView style={{ backgroundColor: "rgb(243, 244, 246)" }}>
        {/* Categories */}
        <Categories />
        {/* Featured Rows */}
        {restaurantData?.result?.map((item, index) => (
          <FeatureRow
            id={item._id}
            title={item.name}
            description={item.short_description}
            featuredCategory="featured"
            restaurants={item.restaurants}
            key={item._id}
          />
        ))}
        {/* Featured Rows */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;