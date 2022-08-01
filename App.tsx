import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/Home/HomeScreen";
import { Provider } from "react-redux";
import { store } from "./store/store";
import RestaurantScreen from "./src/screens/Restaurant/RestaurantScreen";
import BasketScreen from "./src/screens/Basket/BasketScreen";
import PreparingOrderScreen from "./src/screens/PreparingOrder/PreparingOrderScreen";
import DeliveryScreen from "./src/screens/Delivery/DeliveryScreen";
import { RestaurantState } from "./type.d";
import LoginScreen from "./src/screens/Login/LoginScreen";


export type RootStackParams = {
  Login,
  Home,
  Restaurant: {RestaurantState, onPress: () => void}
  Basket,
  PreparingOrderScreen : {onPress: () => void},
  Delivery,
}

const Stack = createNativeStackNavigator<RootStackParams>();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} options={{ presentation: "modal", headerShown: false }} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Restaurant" component={RestaurantScreen} />
          <Stack.Screen
            name="Basket"
            component={BasketScreen}
            options={{ presentation: "modal", headerShown: false }}
          />
          <Stack.Screen
            name="PreparingOrderScreen"
            component={PreparingOrderScreen}
            options={{presentation: "fullScreenModal", headerShown: false}}
          />
           <Stack.Screen
            name="Delivery"
            component={DeliveryScreen}
            options={{presentation: "fullScreenModal", headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
