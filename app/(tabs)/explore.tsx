import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, View, Text } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={<Ionicons size={310} name="code-slash" color={"#fff"} />}
    >
      <View className="flex flex-1 bg-white h-full">
        <View className="flex flex-1 justify-center items-center bg-white">
          <Text className="font-medium">Explore</Text>
        </View>
      </View>
    </ParallaxScrollView>
  );
}
