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
  ContainerLogo,
  Logo,
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
import { AppDispatch, RootState } from "../../../store/store";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { RestaurantRows } from "../../../type.d";

interface RestaurantResult {
  _id: string;
  name: String | undefined;
  short_description: String | undefined;
  restaurants: Array<RestaurantRows>;
  address: String  | undefined;
};

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const restaurantData: any = useAppSelector((state: RootState) => state.datas.restaurant);
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
          <SearchIcon color="gray" size={20} style={{marginRight: 10}} />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
            style={{fontSize: 14}}
          />
        </ViewSearchContainer>
        <AdjustmentsIcon color="#00CCBB" />
      </ViewSearch>

      {/* Body */}
      <ScrollView style={{ backgroundColor: "rgb(243, 244, 246)" }}>
        {/* Categories */}
        <Categories />
        {/* Featured Rows */}
        {restaurantData?.result?.map((item: RestaurantResult) => (
          <FeatureRow
            id={item._id}
            title={item.name}
            featuredCategory="featured"
            description={item.short_description}
            restaurants={item.restaurants}
            address={item.address}
            key={item._id}
          />
        ))}
        {/* Featured Rows */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
