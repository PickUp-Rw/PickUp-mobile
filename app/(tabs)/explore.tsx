import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, View, Text } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { FontAwesome6 } from "@expo/vector-icons";

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={<Ionicons size={310} name="code-slash" color={"#fff"} />}
    >
      <View className="flex flex-1 bg-white h-full">
        <View className="bg-appcolor p-4 rounded-xl flex items-center justify-center">
          <FontAwesome6 name="nfc-directional" size={44} color="#fff" />
        </View>
      </View>
    </ParallaxScrollView>
  );
}
