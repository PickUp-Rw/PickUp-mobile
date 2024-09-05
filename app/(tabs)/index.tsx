import { View, Text } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={<Ionicons size={310} name="code-slash" color={"#fff"} />}
    >
      <View className="flex flex-1 bg-white h-full">
        <View className="bg-appcolor p-4 rounded-xl flex items-center justify-center">
          <FontAwesome6 name="car" size={44} color="#fff" />
        </View>
      </View>
    </ParallaxScrollView>
  );
}
