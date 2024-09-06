import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";

const PhoneInput = ({
  phone,
  setPhone,
}: {
  phone: string;
  setPhone: (phone: string) => void;
}) => {
  return (
    <TextInput
      value={phone}
      onChangeText={setPhone}
      placeholder="Enter phone number"
      keyboardType="phone-pad"
      placeholderClassName="text-black"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 flex w-full p-4"
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
    if (!phone || !password) {
      setMessage("Please fill in all fields.");
      setMessageType("error");
      return;
    }

    router.replace("/(tabs)");
  };

  const handleGuest = () => {
    router.replace("/(tabs)");
  };

  return (
    <KeyboardAvoidingView
      behavior="height"
      className="flex flex-1 bg-white justify-center py-32"
    >
      <ScrollView className="flex flex-1 px-6">
        <Text className="mb-2 text-4xl text-primary font-bold">PickUp</Text>
        <Text className="mb-14 text-lg text-gray-600">
          Traveling made easy.
        </Text>
        <Text className="mb-14 text-2xl font-bold">Log in to your account</Text>

        <View className="flex">
          <Text className="mb-2 text-sm font-medium text-black">
            Phone Number
          </Text>
          <PhoneInput phone={phone} setPhone={setPhone} />
        </View>

        <View className="flex mt-6">
          <Text className="mb-2 text-sm font-medium text-black">Password</Text>
          <View className="flex flex-row items-center justify-between gap-4 w-full">
            <TextInput
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
              className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 flex flex-1 p-4"
              placeholder="************"
              placeholderClassName="text-black"
            />
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              className="flex flex-1"
            >
              <Feather
                name={showPassword ? "eye-off" : "eye"}
                size={24}
                color="gray"
              />
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex-row items-center justify-center my-6">
          <TouchableOpacity onPress={handleGuest}>
            <Text className="text-sm font-medium text-primary-600 text-center">
              Browse as a guest
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

        <TouchableOpacity onPress={handleLogin}>
          <View className="flex w-full bg-primary p-4 rounded-full">
            <Text className="flex text-white text-center font-medium">
              {loading ? "Logging In..." : "Log In"}
            </Text>
          </View>
        </TouchableOpacity>

        <View className="flex-row justify-center p-3">
          <Text className="text-sm font-light text-gray-500">
            Don't have an account yet?{" "}
          </Text>
          <TouchableOpacity>
            <Text className="text-sm font-medium text-primary-600">
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
