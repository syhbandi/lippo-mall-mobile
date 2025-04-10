import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const Home = () => {
  const { user } = useSelector((state: RootState) => state.user);

  return (
    <>
      <StatusBar backgroundColor="#c11c56" style="light" />
      <Stack.Screen
        options={{
          header: () => (
            <SafeAreaView className="bg-[#c11c56] relative h-32 pt-3">
              <View className="flex-row items-center justify-between px-5">
                <Text className="text-white font-semibold text-base font-[Poppins]">
                  Hi, {user.name}
                </Text>
                <View className="flex-row gap-3">
                  <Link href={"/favorite"}>
                    <Ionicons name="heart" size={20} color="white" />
                  </Link>
                  <Ionicons name="notifications" size={20} color="white" />
                </View>
              </View>
              <View className="absolute w-full left-0 bottom-0 -mb-4 flex items-center justify-center px-5">
                <View className=" bg-white h-12 rounded-md border border-gray-200 flex-row items-center w-full px-3 gap-3">
                  <Feather name="search" size={20} color={"#cfd4d9"} />
                  <Text className="text-[#cfd4d9] text-base font-[Poppins]">
                    Search
                  </Text>
                </View>
              </View>
            </SafeAreaView>
          ),
        }}
      />
      <View className="flex-1 bg-white pt-5 px-5 items-center justify-center">
        <Text className="text-red-500 text-center text-3xl font-[PoppinsSemiBold]">
          Home
        </Text>
      </View>
    </>
  );
};

export default Home;
