import * as React from "react";
import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

// Import your custom fonts and styles from GlobalStyles
import { FontFamily, Border, FontSize, Color } from "../GlobalStyles";

const OTPVerificationScreen = () => {
  const navigation = useNavigation();

  // Function to handle OTP verification
  const handleVerify = () => {
    // Place your verification logic here
    console.log("OTP Verified!");
    // Navigate to the next screen after verification
    navigation.navigate("NextScreen");
  };

  return (
    <LinearGradient
      colors={["#7c2929", "rgba(124, 41, 41, 0)"]}
      style={styles.background}
    >
      <View style={styles.container}>
        <Image
          source={require("../assets/image-5.png")}
          style={styles.image5Icon}
          resizeMode="cover"
        />
        <Text style={styles.text}>Enter the OTP sent to your mobile</Text>
        {/* OTP Input Field (You can replace it with a TextInput) */}
        <View style={{ flexDirection: "row" }}>
          {/* OTP Input Fields */}
          {/* TextInput representing each digit of the OTP */}
          <TextInput style={styles.otpInput} />
          <TextInput style={styles.otpInput} />
          <TextInput style={styles.otpInput} />
          <TextInput style={styles.otpInput} />
        </View>
        {/* Resend OTP */}
        <Pressable onPress={() => console.log("Resend OTP")} style={styles.button}>
          <Text style={styles.buttonText}>Resend OTP</Text>
        </Pressable>
        {/* Verify Button */}
        <Pressable onPress={handleVerify} style={styles.button}>
          <Text style={styles.buttonText}>Verify & Continue</Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  image5Icon: {
    width: 249,
    height: 224,
    marginBottom: 20,
  },
  text: {
    color: "#ffffff",
    marginBottom: 10,
    fontSize: 18,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "#ffffff",
    color: "#ffffff",
    fontSize: 24,
    marginHorizontal: 5,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#ffffff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "#000000",
    fontSize: 16,
  },
});

export default OTPVerificationScreen;
