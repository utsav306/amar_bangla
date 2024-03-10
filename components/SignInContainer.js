import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const SignInContainer = ({ onGroupPressablePress }) => {
  return (
    <Pressable
      style={[styles.rectangleParent, styles.groupChildLayout]}
      onPress={onGroupPressablePress}
    >
      <View style={[styles.groupChild, styles.groupChildLayout]} />
      <Text style={styles.google}>Google</Text>
      <Image
        style={styles.googleLogo98082Icon}
        contentFit="cover"
        source={require("../assets/googlelogo9808-2.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 50,
    width: 150,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
  },
  google: {
    top: 11,
    left: 51,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorBlack,
    textAlign: "left",
    width: 68,
    height: 20,
    position: "absolute",
  },
  googleLogo98082Icon: {
    height: "50%",
    width: "16.67%",
    top: "26%",
    right: "70%",
    bottom: "24%",
    left: "13.33%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  rectangleParent: {
    top: 720,
    left: 34,
  },
});

export default SignInContainer;
