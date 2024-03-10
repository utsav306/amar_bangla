import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const SignUpLogIn = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.signUplogIn}
      locations={[0, 0.71, 1]}
      colors={[
        "rgba(124, 41, 41, 0.75)",
        "rgba(124, 41, 41, 0.15)",
        "rgba(255, 255, 255, 0)",
      ]}
    >
      <Image
        style={styles.image7Icon}
        contentFit="cover"
        source={require("../assets/image-7.png")}
      />
      <Image
        style={styles.image5Icon}
        contentFit="cover"
        source={require("../assets/image-5.png")}
      />
      <Pressable
        style={[styles.rectangleParent, styles.groupLayout]}
        onPress={() => navigation.navigate("ByGoogle")}
      >
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text style={[styles.signUp, styles.signTypo]}>Sign up</Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleGroup, styles.groupLayout]}
        onPress={() => navigation.navigate("ByGoogle")}
      >
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text style={[styles.signIn, styles.signTypo]}>Sign In</Text>
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    height: 50,
    width: 300,
    position: "absolute",
  },
  signTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
    top: "50%",
    marginTop: -14,
    left: "50%",
    position: "absolute",
  },
  image7Icon: {
    left: -1,
    width: 393,
    top: 0,
    position: "absolute",
    height: 844,
  },
  image5Icon: {
    marginLeft: -124,
    top: 97,
    width: 249,
    height: 224,
    left: "50%",
    position: "absolute",
  },
  groupChild: {
    left: 0,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 2,
    top: 0,
  },
  signUp: {
    marginLeft: -33,
    width: 72,
  },
  rectangleParent: {
    top: 480,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 32,
    width: 350,
  },
  signIn: {
    marginLeft: -24,
    width: 63,
  },
  rectangleGroup: {
    top: 550,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 32,
    width: 350,
  },
  signUplogIn: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    backgroundColor: "transparent",
    height: 844,
  },
});

export default SignUpLogIn;
