import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  Button,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import {
  DocumentRemoveIcon,
  TrashIcon,
  XCircleIcon,
} from "react-native-heroicons/outline";
import { urlFor } from "../../../sanity";
// import SafeViewAndroid from '../../components/SafeAreaView/AndroidSafeArea'
import {
  selectBasketItems,
  removeFromBasket,
  selectBasketTotal,
} from "../../../redux/basketSlice";
import { selectRestaurants } from "../../../redux/restaurantSlice";
import { FormatNumber } from "../../../components/NumberFormat";
import { ScreenNavigation } from "../../../hooks";

const BasketScreen = () => {
  const [groupItemsInBasket, setGroupItemsInBasket] = useState([]);
  const dispatch = useDispatch();
  const navigation = useNavigation<ScreenNavigation>();
  const restaurant = useSelector(selectRestaurants);
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);

  useEffect(() => {
    const groupItems = items.reduce((result, item) => {
      (result[item.id] = result[item.id] || []).push(item);
      return result;
    }, {});
    setGroupItemsInBasket(groupItems);
  }, [items]);

  return (
    <SafeAreaView style={{ flex: 1, marginTop: 12 }}>
      <View style={{ flex: 1, backgroundColor: "#f3f4f6" }}>
        <View
          style={{
            padding: 20,
            borderBottomColor: "#00CCBB",
            borderBottomWidth: 1,
            backgroundColor: "#fff",
          }}
        >
          <View>
            <Text
              style={{ fontSize: 18, fontWeight: "bold", textAlign: "center" }}
            >
              Thanh Toán
            </Text>
            <Text style={{ textAlign: "center", color: "#9ca3af" }}>
              {restaurant?.title}
            </Text>
          </View>

          <TouchableOpacity
            onPress={navigation.goBack}
            style={{ position: "absolute", top: 12, right: 20 }}
          >
            <XCircleIcon color="#00CCBB" height={50} width={50} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 16,
            paddingVertical: 12,
            backgroundColor: "#fff",
            marginVertical: 20,
          }}
        >
          <Image
            source={{
              uri: "https://kenh14cdn.com/2020/11/2/photo-1-16043339826952006080114.jpg",
            }}
            style={{
              width: 28,
              height: 28,
              borderRadius: 100,
              padding: 16,
              marginRight: 16,
            }}
          />
          <Text style={{ flex: 1 }}>Vận chuyển trong 20 phút</Text>
          <TouchableOpacity>
            <Text style={{ color: "#00CCBB" }}>Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView>
          {Object.entries(groupItemsInBasket).map(([key, items]) => (
            <View
              key={key}
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#fff",
                paddingVertical: 8,
                paddingHorizontal: 20,
                borderBottomColor: "#ccc",
                borderBottomWidth: 0.2,
              }}
            >
              <Text style={{ color: "#00CCBB", marginRight: 8 }}>
                {items.length} x
              </Text>
              <Image
                source={{
                  uri: urlFor(items[0]?.imgUrl).url(),
                }}
                style={{
                  height: 40,
                  width: 40,
                  borderRadius: 100,
                  marginRight: 8,
                }}
              />
              <Text style={{ flex: 1 }}>{items[0]?.name}</Text>
              <Text style={{ marginRight: 8 }}>
                <FormatNumber value={items[0]?.price} />
              </Text>
              <TouchableOpacity
                onPress={() => dispatch(removeFromBasket({ id: key }))}
              >
                <Text style={{ color: "#00CCBB", fontSize: 12 }}>
                  <TrashIcon size={20} color="#00CCBB" />
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View
          style={{
            backgroundColor: "#86efe6",
            paddingVertical: 20,
            paddingHorizontal: 20,
          }}
        >
          <View
            style={{
              marginBottom: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "normal" }}>
              Tổng giá các món ăn:
            </Text>
            <Text>
              <FormatNumber value={basketTotal}/>
            </Text>
          </View>
          <View
            style={{
              marginBottom: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "normal" }}>
              Phí vận chuyển:
            </Text>
            <Text>
              <FormatNumber value="20,000 VND" />
            </Text>
          </View>
          <View
            style={{
              marginBottom: 20,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "normal" }}>
              Tổng giá:{" "}
            </Text>
            <Text>
              <FormatNumber value={basketTotal + 20000} />
            </Text>
          </View>
          <Button
            onPress={() => navigation.navigate("PreparingOrderScreen")}
            title="Thanh Toán"
          >
            Thanh Toán
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
