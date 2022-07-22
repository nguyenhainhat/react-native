import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
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

const HomeScreen = () => {
  const navigation = useNavigation();
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
      <ScrollView style={{ backgroundColor: "gray" }}>
        {/* Categories */}
        <Categories />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
