import React, { useMemo } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SignInFormContainer = ({ propLeft, onGroupPressablePress }) => {
  const groupPressableStyle = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
    };
  }, [propLeft]);

  return (
    <Pressable
      style={[
        styles.rectangleParent,
        styles.groupChildLayout,
        groupPressableStyle,
      ]}
      onPress={onGroupPressablePress}
    >
      <View style={[styles.groupChild, styles.groupChildLayout]} />
      <Text style={styles.email}>Email</Text>
      <Image
        style={styles.icons8Mail481}
        contentFit="cover"
        source={require("../assets/icons8mail48-1.png")}
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
  email: {
    top: 11,
    left: 59,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorBlack,
    textAlign: "left",
    width: 58,
    height: 20,
    position: "absolute",
  },
  icons8Mail481: {
    top: 13,
    left: 19,
    width: 30,
    height: 23,
    position: "absolute",
  },
  rectangleParent: {
    top: 630,
    left: 25,
  },
});

export default SignInFormContainer;
