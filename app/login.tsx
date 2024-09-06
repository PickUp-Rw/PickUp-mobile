import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const PhoneInput = ({
  phone,
  setPhone,
}: {
  phone: string;
  setPhone: (phone: string) => void;
}) => {
  // Implement phone input logic here
  return (
    <TextInput
      value={phone}
      onChangeText={setPhone}
      placeholder="Enter phone number"
      keyboardType="phone-pad"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    />
  );
};

export default function LoginScreen() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleLogin = () => {
    // Implement login logic here
  };

  return (
    <ScrollView contentContainerClassName="flex-grow justify-center px-6 py-12">
      <Text className="mb-2 text-4xl text-primary font-bold">PickUp</Text>
      <Text className="mb-6 text-lg text-gray-600">Traveling made easy.</Text>
      <Text className="mb-6 text-2xl font-bold">Log in to your account</Text>

      <View className="space-y-4">
        <View>
          <Text className="block mb-2 text-sm font-medium text-gray-900">
            Phone Number
          </Text>
          <PhoneInput phone={phone} setPhone={setPhone} />
        </View>

        <View>
          <Text className="block mb-2 text-sm font-medium text-gray-900">
            Password
          </Text>
          <View className="relative">
            <TextInput
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="••••••••"
            />
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              <Feather
                name={showPassword ? "eye-off" : "eye"}
                size={24}
                color="gray"
              />
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center">
            {/* Note: React Native doesn't have a built-in checkbox, you might need a custom component or library */}
            <Text className="ml-2 text-sm text-gray-500">Remember me</Text>
          </View>
          <TouchableOpacity>
            <Text className="text-sm font-medium text-primary-600">
              Forgot password?
            </Text>
          </TouchableOpacity>
        </View>

        {message && (
          <View
            className={`p-4 mb-4 rounded-lg ${
              messageType === "error" ? "bg-red-50" : "bg-green-50"
            }`}
          >
            <Text
              className={
                messageType === "error" ? "text-red-800" : "text-green-800"
              }
            >
              {message}
            </Text>
          </View>
        )}

        <TouchableOpacity
          onPress={handleLogin}
          disabled={loading}
          className="w-full bg-primary py-2.5 rounded-lg"
        >
          <Text className="text-white text-center font-medium">
            {loading ? "Logging In..." : "Log In"}
          </Text>
        </TouchableOpacity>

        <View className="flex-row justify-center">
          <Text className="text-sm font-light text-gray-500">
            Don't have an account yet?{" "}
          </Text>
          <TouchableOpacity>
            <Text className="text-sm font-medium text-primary-600">
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
