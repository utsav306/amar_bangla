import React, { useMemo } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SectionMenu = ({ logOut, propTop, onFramePressablePress }) => {
  const framePressableStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <Pressable
      style={[styles.logOutParent, framePressableStyle]}
      onPress={onFramePressablePress}
    >
      <Text style={styles.logOut}>{logOut}</Text>
      <View style={[styles.iconamoonarrowUp2, styles.vectorIconPosition]} />
      <Image
        style={[styles.vectorIcon, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  vectorIconPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  logOut: {
    top: 15,
    left: 13,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  iconamoonarrowUp2: {
    top: 10,
    left: 380,
    width: 30,
    height: 30,
    transform: [
      {
        rotate: "90deg",
      },
    ],
  },
  vectorIcon: {
    height: "23.15%",
    width: "1.78%",
    top: "35.19%",
    right: "7.26%",
    bottom: "41.67%",
    left: "90.96%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  logOutParent: {
    top: 636,
    left: 18,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorBrown_200,
    shadowColor: "rgba(0, 0, 0, 0.09)",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 3,
    elevation: 3,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: Color.colorBrown_100,
    borderWidth: 2,
    width: 354,
    height: 54,
    position: "absolute",
  },
});

export default SectionMenu;
