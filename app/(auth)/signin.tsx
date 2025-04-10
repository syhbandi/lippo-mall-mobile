import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { login, UserType } from "@/features/user/userSlice";
import { RootState } from "@/store";
import { Redirect, router } from "expo-router";

const signin = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user);

  const handleSignIn = () => {
    const user: UserType = {
      id: "1",
      name: "John Doe",
      isLoggedIn: true,
      role: "user",
    };
    dispatch(login(user));
    router.replace("/(app)/index");
  };

  return (
    <SafeAreaView className="flex-1 justify-center px-5">
      <Text className="font-[PoppinsMedium] text-[#b71c53] text-4xl mb-3">
        Hi, Stylers!
      </Text>
      <Text className="font-[PoppinsBold] text-[#415764] text-4xl mb-10">
        Welcome
      </Text>
      <Text className="font-[PoppinsSemiBold] text-3xl text-[#415764] mb-5">
        Sign In
      </Text>
      <Text className="font-[PoppinsMedium] text-[#b71c53] mb-3">
        Phone Number
      </Text>
      <View className="rounded-xl border border-gray-200 flex-row items-center h-14 mb-10">
        <Text className="text-gray-400 text-base font-[PoppinsMedium] px-3">
          +62
        </Text>
        <TextInput />
      </View>
      <TouchableOpacity
        className="h-16 bg-[#b71c53] rounded-xl items-center justify-center mb-5"
        onPress={handleSignIn}
      >
        <Text className="text-white text-base font-[PoppinsMedium]">
          Sign In
        </Text>
      </TouchableOpacity>
      <Text className="font-[PoppinsMedium] text-[#415764] text-base mb-5 text-center">
        Not a member yet? <Text className="text-[#b71c53]">Sign Up</Text>
      </Text>

      <Text className="font-[PoppinsMedium] text-[#415764] text-base mb-5 text-center">
        <Feather name="message-circle" size={16} color={"#b71c53"} /> Contact Us
      </Text>
    </SafeAreaView>
  );
};

export default signin;
