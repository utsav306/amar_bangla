import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";


const Login = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.Login}
      locations={[0, 1]}
      colors={["rgba(124, 41, 41, 0.75)", "rgba(124, 41, 41, 0)"]}
    >
      <Image
        style={styles.image7Icon}
        contentFit="cover"
        source={require("../assets/image-7.png")}
      />
      <Image
        style={[styles.image5Icon, styles.letsStartPosition]}
        contentFit="cover"
        source={require("../assets/image-5.png")}
      />
      <Pressable
        style={[styles.rectangleParent, styles.groupChildLayout]}
        onPress={() => navigation.navigate("SignUpLogIn")}
      >
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text
          style={[styles.letsStart, styles.letsStartPosition]}
        >{`Let’s Start `}</Text>
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  letsStartPosition: {
    left: "50%",
    position: "absolute",
  },
  groupChildLayout: {
    height: 50,
    width: 300,
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
    top: 130,
    width: 249,
    height: 224,
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
  letsStart: {
    marginTop: -14,
    marginLeft: -46,
    top: "50%",
    fontSize: FontSize.size_lg,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorBlack,
    textAlign: "left",
    width: 93,
  },
  rectangleParent: {
    top: 570,
    left: 30,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
  Login: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    backgroundColor: "transparent",
    height: 844,
  },
});

export default Login;
