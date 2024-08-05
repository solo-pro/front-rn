// src/screens/LoginScreen.tsx
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Modal, Alert, TouchableOpacity, ActivityIndicator } from "react-native";
import { useAuth } from "@/hooks/context/AuthContext";
import WebView, { WebViewNavigation } from "react-native-webview";
import { useNavigation, useRouter } from "expo-router";
import { serverUrl } from "@/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = () => {
  const { login } = useAuth();
  const linkTo = useRouter();
  const handleLogin = () => {
    linkTo.push("/");
  };

  const handleWebViewNavigationStateChange = (newNavState: WebViewNavigation) => {
    const { url } = newNavState;
    if (url.startsWith(`${serverUrl}/success`)) {
      const [_, token] = url.split("=");
      if (!token) return;
      AsyncStorage.setItem("accessToken", token);
      login();
    }
  };
  return (
    // <View style={styles.container}>
    <WebView
      source={{ uri: `${serverUrl}/login` }}
      onNavigationStateChange={handleWebViewNavigationStateChange}
      startInLoadingState
      renderLoading={() => <ActivityIndicator size="large" color="#0000ff" />}
    />
    // </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default LoginScreen;
