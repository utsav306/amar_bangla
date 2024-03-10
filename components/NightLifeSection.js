import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const NightLifeSection = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.groupParent}>
      <View style={[styles.frameWrapper, styles.frameLayout]}>
        <View style={[styles.ellipseParent, styles.frameChildPosition]}>
          <Image
            style={[styles.frameChild, styles.frameChildPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-251.png")}
          />
          <Text style={styles.nightLife}>Night life</Text>
        </View>
      </View>
      <Pressable
        style={[styles.frameContainer, styles.frameLayout]}
        onPress={() => navigation.navigate("IPhone13141")}
      >
        <View style={[styles.ellipseParent, styles.frameChildPosition]}>
          <Image
            style={[styles.frameChild, styles.frameChildPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-2511.png")}
          />
          <Text style={styles.nightLife}> Park</Text>
        </View>
      </Pressable>
      <View style={[styles.frameContainer, styles.frameLayout]}>
        <View style={[styles.ellipseParent, styles.frameChildPosition]}>
          <Image
            style={[styles.frameChild, styles.frameChildPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-2512.png")}
          />
          <Text style={styles.nightLife}>Mall</Text>
        </View>
      </View>
      <View style={[styles.frameContainer, styles.frameLayout]}>
        <View style={[styles.ellipseParent, styles.frameChildPosition]}>
          <Image
            style={[styles.frameChild, styles.frameChildPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-2513.png")}
          />
          <Text style={styles.nightLife}>Market</Text>
        </View>
      </View>
      <View style={[styles.frameContainer, styles.frameLayout]}>
        <View style={[styles.ellipseParent, styles.frameChildPosition]}>
          <Image
            style={[styles.frameChild, styles.frameChildPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-2514.png")}
          />
          <Text style={styles.nightLife}>Couple places</Text>
        </View>
      </View>
      <View style={[styles.frameContainer, styles.frameLayout]}>
        <View style={[styles.ellipseParent, styles.frameChildPosition]}>
          <Image
            style={[styles.frameChild, styles.frameChildPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-2515.png")}
          />
          <Text style={[styles.nightLife1, styles.nightTypo]}>Night life</Text>
        </View>
      </View>
      <View style={[styles.frameContainer, styles.frameLayout]}>
        <View style={[styles.ellipseParent, styles.frameChildPosition]}>
          <Image
            style={[styles.frameChild, styles.frameChildPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-2516.png")}
          />
          <Text style={[styles.nightLife2, styles.nightTypo]}>Night life</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    width: 60,
    height: 74,
  },
  frameChildPosition: {
    left: 0,
    top: 0,
    width: 60,
    position: "absolute",
  },
  nightTypo: {
    textAlign: "left",
    height: 11,
    width: 43,
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    left: 8,
    top: 63,
    position: "absolute",
  },
  frameChild: {
    height: 60,
  },
  nightLife: {
    textAlign: "center",
    height: 11,
    width: 43,
    color: Color.colorBlack,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    left: 8,
    top: 63,
    fontSize: FontSize.size_5xs,
    position: "absolute",
  },
  ellipseParent: {
    height: 74,
  },
  frameWrapper: {
    height: 74,
  },
  frameContainer: {
    marginLeft: 6,
    height: 74,
  },
  nightLife1: {
    fontSize: FontSize.size_5xs,
    textAlign: "left",
  },
  nightLife2: {
    fontSize: FontSize.size_3xs,
  },
  groupParent: {
    top: 117,
    left: 14,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
});

export default NightLifeSection;
