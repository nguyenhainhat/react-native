import { View, Text, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../../redux/data";
import CategoriesCard from "./CategoriesCard";

const Categories = () => {
  const dispatch = useDispatch();
  const card = useSelector((state) => state?.data?.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  console.log(card)

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
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
