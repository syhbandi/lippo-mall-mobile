import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import { router, Stack } from "expo-router";
import { AntDesign, Feather } from "@expo/vector-icons";
import { add, FavoriteType, remove } from "@/features/favorite/favoriteSlice";
import { useDispatch, useSelector, useStore } from "react-redux";
import { RootState } from "@/store";

const categories: FavoriteType[] = [
  {
    id: "1",
    name: "Beauty Admirer",
  },
  {
    id: "2",
    name: "Books Hunter",
  },
  {
    id: "3",
    name: "Daily Needs",
  },
  {
    id: "4",
    name: "Entertainment",
  },
  {
    id: "5",
    name: "Fashion Enthusiast",
  },
  {
    id: "6",
    name: "Food Lover",
  },
  {
    id: "7",
    name: "Gadget Freaks",
  },
  {
    id: "8",
    name: "Groceries",
  },
  {
    id: "9",
    name: "Health Care",
  },
  {
    id: "10",
    name: "Home Decor",
  },
  {
    id: "11",
    name: "Sport Addict",
  },
  {
    id: "12",
    name: "Toys & Hobbies",
  },
  {
    id: "13",
    name: "Travelling",
  },
  {
    id: "14",
    name: "Watch & Jewelry",
  },
];

const Favorite = () => {
  const dispatch = useDispatch();
  const { favorites } = useSelector((state: RootState) => state.favorites);

  const isFavorite = (id: string) => favorites.some((item) => item.id === id);
  const handleClick = (item: FavoriteType) => {
    if (isFavorite(item.id)) {
      dispatch(remove(item));
    } else {
      dispatch(add(item));
    }
  };
  return (
    <>
      <Stack.Screen
        options={{
          title: "INTERESTS",
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "#c11c56",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontFamily: "PoppinsSemiBold",
            fontSize: 16,
          },
        }}
      />
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <TouchableOpacity
            className={`h-14  rounded-xl border border-gray-200 flex-row items-center justify-between px-3 flex-1 ${
              isFavorite(item.id) ? "bg-green-700" : "bg-gray-100"
            }`}
            onPress={() => handleClick(item)}
          >
            <Text
              className={`font-[PoppinsMedium] text-sm text-nowrap ${
                isFavorite(item.id) ? "text-white" : "text-gray-500"
              }`}
            >
              {item.name}
            </Text>

            <AntDesign
              name={isFavorite(item.id) ? "check" : "pluscircle"}
              size={16}
              color={isFavorite(item.id) ? "#fff" : "#6b7280"}
            />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerClassName="p-5 gap-4"
        columnWrapperClassName="gap-4"
      />
    </>
  );
};

export default Favorite;
