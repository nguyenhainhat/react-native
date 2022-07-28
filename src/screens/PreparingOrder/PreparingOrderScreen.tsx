import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../../App";
import { ScreenNavigation } from "../../../hooks";

const PreparingOrderScreen = () => {
  const navigation = useNavigation<ScreenNavigation>();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 4000);
  }, []);
  
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#fff",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Animatable.Image
        source={require("../../../assets/deliver.gif")}
        animation="fadeInUp"
        iterationCount={1}
        style={{ width: "100%", height: "50%" }}
      />
      <View>
        <Animatable.Text
          animation="fadeInUp"
          iterationCount={1}
          style={{ fontSize: 14, marginVertical: 10 }}
        >
          Xin hãy chờ nhà hàng chấp nhận order của bạn
        </Animatable.Text>
      </View>
      <Progress.Circle
        size={60}
        indeterminate={true}
        color="black"
        style={{ marginTop: 10 }}
      />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
