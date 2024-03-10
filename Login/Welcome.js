import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.welcome}
      locations={[0, 1]}
      colors={["#7c2929", "rgba(124, 41, 41, 0)"]}
    >
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("IPhone1314")}
      >
        <Image
          style={[styles.image7Icon, styles.image7IconPosition]}
          contentFit="cover"
          source={require("../assets/image-7.png")}
        />
        <Image
          style={styles.image5Icon}
          contentFit="cover"
          source={require("../assets/image-5.png")}
        />
        <View style={[styles.welcomeChild, styles.image7IconPosition]} />
        <Image
          style={styles.welcomeItem}
          contentFit="cover"
          source={require("../assets/ellipse-31.png")}
        />
        <Text style={styles.amarKolkata}>
          <Text style={styles.amarKolkata1}>Amar Kolkata</Text>
          <Text style={styles.text}>{` `}</Text>
        </Text>
        <Text style={[styles.welcome1, styles.toTypo]}>Welcome</Text>
        <Text style={[styles.to, styles.toTypo]}>to</Text>
        <View style={[styles.vectorParent, styles.groupChildLayout]}>
          <Image
            style={[styles.groupChild, styles.groupChildLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-106.png")}
          />
          <Text
            style={styles.letsExploreKolkata}
          >{}</Text>
        </View>
        <Image
          style={styles.welcomeInner}
          contentFit="cover"
          source={require("../assets/ellipse-32.png")}
        />
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  image7IconPosition: {
    width: 393,
    left: -1,
    position: "absolute",
  },
  toTypo: {
    color: Color.colorSnow,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  groupChildLayout: {
    height: 50,
    width: 300,
    position: "absolute",
  },
  image7Icon: {
    height: 400,
    top: 0,
  },
  image5Icon: {
    marginLeft: -124,
    top: 97,
    left: "50%",
    width: 249,
    height: 224,
    position: "absolute",
  },
  welcomeChild: { // second box
    top: 330,
    borderRadius: Border.br_34xl,
    backgroundColor: Color.colorGray_400,
    height: 600,
    opacity: 0.5,
  },
  welcomeItem: { //welcome bg color
    top: 480,
    left: 125,
    width: 125,
    height: 125,
    position: "absolute",
  },
  amarKolkata1: {
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorGold_200,
  },
  text: {
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorBlack,
  },
  amarKolkata: { // "amar kolkata text"
    top: 410,
    left: 85,
    fontSize: FontSize.size_13xl,
    width: 234,
    textAlign: "left",
    position: "absolute",
  },
  welcome1: { //"welcome" text
    top: 350,
    left: 130,
  },
  to: { //"to" text
    top: 380,
    left: 170,
  },
  groupChild: {
    left: 0,
    borderRadius: Border.br_xl,
    top: 0,
  },
  letsExploreKolkata: {
    top: 12,
    left: 23,
    fontSize: FontSize.size_base,
    width: 274,
    height: 29,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  vectorParent: {  //"last button of text"
    top: 620,
    left: 35,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
  welcomeInner: {
    top: 490,
    left: 135,
    width: 100,
    height: 100,
    position: "absolute",
  },
  pressable: {
    flex: 1,
    height: "100%",
    overflow: "hidden",
    backgroundColor: "transparent",
    width: "100%",
  },
  welcome: {
    height: 844,
    width: "100%",
  },
});

export default Welcome;
