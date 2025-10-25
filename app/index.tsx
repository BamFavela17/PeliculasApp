import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-center text-5xl font-bold text-blue-500">
        Welcome to Tailwindcss!
      </Text>
      <Link href={"/onboarding"}>Go to onboarding</Link>
      <Link href={"/movie/avengers"}>Go to Details</Link>
    </View>
  );
}
