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
import { TouchableOpacityItem } from "../Login/style";
import { XIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigation } from "../../../hooks";
import * as SecureStore from "expo-secure-store";
import VideoThumbnail from "react-video-thumbnail";

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
  { num: 0 },
];

function SetupScreen() {
  const [pass, setPass] = React.useState<any>(["", "", "", ""]);
  const [pass2, setPass2] = React.useState<any>(["", "", "", ""]);
  const [numPass1, setNumPass1] = React.useState(0);
  const [numPass2, setNumPass2] = React.useState(0);
  const [passcode1, setPasscode1] = React.useState<Number>();
  const [passcode2, setPasscode2] = React.useState<Number>();
  const [match, setMatch] = React.useState<string>("");

  const navigation = useNavigation<ScreenNavigation>();

  const handleOnPressNumber = async (num: number) => {
    let passCode = pass;
    let passCode2 = pass2;
    const filterPasscode = passCode.filter((item) => item !== "");
    const filterPasscode2 = passCode2.filter((item) => item !== "");
    for (let index = 0; index < passCode.length; index++) {
      if (passCode[index] == "") {
        passCode[index] = num;
        break;
      } else {
        continue;
      }
    }

    if (filterPasscode.length === 4) {
      for (let index = 0; index < passCode2.length; index++) {
        if (passCode2[index] == "") {
          passCode2[index] = num;
          break;
        } else {
          continue;
        }
      }
    }
    const passWordEnter = Number(pass.toString().split(",").join(""));
    const passWordEnter2 = Number(pass2.toString().split(",").join(""));

    if (filterPasscode2.length === 3 && passWordEnter2 === passWordEnter) {
      const digestPass = await Crypto.digestStringAsync(
        Crypto.CryptoDigestAlgorithm.SHA256,
        passWordEnter.toString()
      );
      await SecureStore.setItemAsync("passedCode", digestPass);
      setTimeout(() => {
        navigation.navigate("Login");
      }, 50);
    }
    if (filterPasscode.length === 3) {
      setPasscode1(passWordEnter);
      setNumPass1(filterPasscode.length);
    }
    if (filterPasscode2.length === 3) {
      setPasscode2(passWordEnter2);
      setNumPass2(filterPasscode2.length);
    }
    setPass([...passCode]);
    setPass2([...passCode2]);
  };
  React.useEffect(() => {
    const matchPass = async () => {
      if (passcode1 !== passcode2 && numPass2 === 3) {
        setMatch("no match");
      }
    };
    matchPass();
  }, [pass2]);

  const handleOnPressCancel = () => {
    let passCancel = pass;
    let passCancel2 = pass2;

    if (numPass1 === 3 && numPass1 > 0) {
      for (let i = passCancel2.length - 1; i >= 0; i++) {
        if (passCancel2[i] !== "") {
          passCancel2[i] = "";
          break;
        } else {
          continue;
        }
      }
      setPass2(["", "", "", ""]);
    } else {
      for (let i = passCancel.length - 1; i >= 0; i++) {
        if (passCancel[i] !== "") {
          passCancel[i] = "";
          break;
        } else {
          continue;
        }
      }
      setPass(["", "", "", ""]);
    }
  };

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
   
      <View style={{ position: "absolute", top: "10%", left: "30%" }}>
        <View>
          <Text style={{ fontSize: 20, color: "white", fontWeight: "700" }}>
            Create code
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
          {numPass1 === 3 && numPass1 > 0
            ? pass2?.map((item, index) => (
                <View
                  key={index}
                  style={
                    item === "" ? styles.viewPasscode : styles.viewEntercode
                  }
                ></View>
              ))
            : pass?.map((item, index) => (
                <View
                  key={index}
                  style={
                    item === "" ? styles.viewPasscode : styles.viewEntercode
                  }
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
            Wrong Match Password
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

export default SetupScreen;
