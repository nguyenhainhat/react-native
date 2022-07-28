import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootStackParams } from "./App";
import { AppDispatch, RootState } from "./store/store";
 
export type ScreenNavigation = NativeStackNavigationProp<RootStackParams>
export type RestaurantScreenNavigation = NativeStackNavigationProp<RootStackParams["Restaurant"]["RestaurantState"]>

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
