import { View, Text, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../../redux/data";
import CategoriesCard from "./CategoriesCard";
import { useAppDispatch, useAppSelector } from "../../hooks";

const Categories = () => {
  const dispatch = useAppDispatch();
  const card = useAppSelector((state) => state?.datas?.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingLeft: 8, paddingTop: 20 }}
    >
      {card?.result?.map((item, index) => (
        <CategoriesCard
          imgUrl={item.image.asset._ref}
          title={item.name}
          key={index}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;
