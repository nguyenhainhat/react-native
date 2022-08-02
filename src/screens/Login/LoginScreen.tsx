import * as React from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import * as Crypto from "expo-crypto";
import { TouchableOpacityItem } from "./style";
import { ChevronDoubleLeftIcon, XIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigation } from "../../../hooks";
import * as SecureStore from "expo-secure-store";

const { width, height } = Dimensions.get("window");

const number = [
  { num: 1 },
  { num: 2 },
  { num: 3 },
  { num: 4 },
  { num: 5 },
  { num: 6 },
  { num: 7 },
  { num: 8 },
  { num: 9 },
  // { num: 0 },
];

function LoginScreen() {
  const [pass, setPass] = React.useState<any>(["", "", "", ""]);
  const [match, setMatch] = React.useState<string>("");
  // const passWord = 1234;
  const navigation = useNavigation<ScreenNavigation>();

  const handleOnPressNumber = async (num: any) => {
    let passCode = pass;
    for (let index = 0; index < passCode.length; index++) {
      if (passCode[index] == "") {
        passCode[index] = num;
        break;
      } else {
        continue;
      }
    }
    setPass([...passCode]);
  };

  const handleOnPressCancel = () => {
    let passCancel = pass;
    for (let i = passCancel.length - 1; i >= 0; i++) {
      if (passCancel[i] !== "") {
        passCancel[i] = "";
        break;
      } else {
        continue;
      }
    }
    setPass(["", "", "", ""]);
    setMatch("");
  };

  const handlePrevScreen = async() => {
    await SecureStore.deleteItemAsync("passedCode")
    navigation.navigate("Setup")
  }

  // Encode and Save
  React.useEffect(() => {
    (async () => {
      const passWordEnter = Number(pass.toString().split(",").join(""));
      await SecureStore.setItemAsync("passCode", passWordEnter.toString());
      const storePass = await SecureStore.getItemAsync("passCode");
      const storePassedCode = await SecureStore.getItemAsync("passedCode");
      if (storePass.toString().length === 4) {
        const digestPassword = await Crypto.digestStringAsync(
          Crypto.CryptoDigestAlgorithm.SHA256,
          storePass.toString()
        );
        if (storePassedCode === digestPassword) {
          setMatch("match");
          setTimeout(() => {
            navigation.navigate("Home");
          }, 50);
        } else {
          setMatch("no match");
        }
      }
    })();
  }, [pass]);

  return (
    <SafeAreaView style={{ flex: 1, marginTop: 28 }}>
      <Image
        source={{
          uri: "https://mfiles.alphacoders.com/915/915807.jpg",
        }}
        style={{
          position: "absolute",
          top: 0,
          height: height,
          width: width,
          zIndex: 0,
        }}
      />
      <View style={{ position: "absolute", top: "10%", left: "28%" }}>
        <View>
          <Text style={{ fontSize: 20, color: "white", fontWeight: "700" }}>
            Enter Passcode
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          {pass?.map((item, index) => (
            <View
              key={index}
              style={item === "" ? styles.viewPasscode : styles.viewEntercode}
            ></View>
          ))}
        </View>
      </View>
      <View style={{ justifyContent: "center", alignContent: "center" }}>
        <View
          style={{
            alignContent: "center",
            justifyContent: "center",
            flexDirection: "row",
            marginTop: 160,
            flexWrap: "wrap",
          }}
        >
          {number.map((item) => (
            <TouchableOpacityItem
              key={item.num}
              onPress={() => handleOnPressNumber(item.num)}
            >
              <Text
                style={{ fontSize: 20, color: "white", textAlign: "center" }}
              >
                {item.num}
              </Text>
            </TouchableOpacityItem>
          ))}
          <TouchableOpacityItem onPress={handlePrevScreen}>
            <ChevronDoubleLeftIcon color="white" />
          </TouchableOpacityItem>
          <TouchableOpacityItem onPress={() => handleOnPressNumber(0)}>
            <Text style={{ fontSize: 20, color: "white", textAlign: "center" }}>
              0
            </Text>
          </TouchableOpacityItem>
          <TouchableOpacityItem onPress={handleOnPressCancel}>
            <XIcon color="white" />
          </TouchableOpacityItem>
        </View>
      </View>
      {match === "no match" && (
        <View>
          <Text
            style={{
              color: "red",
              textAlign: "center",
              fontSize: 16,
              fontWeight: "700",
            }}
          >
            Wrong Password
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  viewPasscode: {
    marginRight: 10,
    width: 25,
    height: 25,
    borderRadius: 10,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "white",
  },
  viewEntercode: {
    backgroundColor: "white",
    borderWidth: 0,
    marginRight: 10,
    width: 25,
    height: 25,
    borderRadius: 10,
  },
});

export default LoginScreen;
