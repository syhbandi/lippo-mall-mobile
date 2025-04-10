import { View, Text } from "react-native";
import React from "react";
import { Redirect, Stack, useNavigation, useRouter } from "expo-router";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const AppLayout = () => {
  const { user } = useSelector((state: RootState) => state.user);

  if (!user.isLoggedIn) return <Redirect href={"/(auth)/signin"} />;

  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="favorite" />
    </Stack>
  );
};

export default AppLayout;
