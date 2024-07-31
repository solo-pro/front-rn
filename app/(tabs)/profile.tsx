import React, { useState } from "react";
import { View, Text, TextInput, Image, Button, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";

const ProfileScreen = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [password, setPassword] = useState("");
  const [profileImage, setProfileImage] = useState("https://via.placeholder.com/150");

  const handleSave = () => {
    // Save the updated profile information
    console.log("Profile updated:", { name, email, password });
  };

  const handleChangeProfileImage = () => {
    // Change profile image logic
    console.log("Change profile image");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileImageContainer}>
        <TouchableOpacity onPress={handleChangeProfileImage}>
          <Image source={{ uri: profileImage }} style={styles.profileImage} />
          <Text style={styles.changeImageText}>Change Profile Image</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} value={password} onChangeText={setPassword} secureTextEntry placeholder="Enter new password" />
      </View>
      <Button title="Save Changes" onPress={handleSave} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  profileImageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  changeImageText: {
    marginTop: 10,
    color: "#007BFF",
    textDecorationLine: "underline",
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
});

export default ProfileScreen;
