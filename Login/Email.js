import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Email = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.email}
      locations={[0, 1]}
      colors={["#7c2929", "rgba(124, 41, 41, 0)"]}
    >
      <Image
        style={[styles.image7Icon, styles.image7IconPosition]}
        contentFit="cover"
        source={require("../assets/image-7.png")}
      />
      <View style={[styles.emailChild, styles.image7IconPosition]} />
      <View style={styles.rectangleParent}>
        <View style={[styles.instanceChild, styles.groupItemBorder]} />
        <Text style={styles.enterYourMail}>Enter your mail Id here ....</Text>
      </View>
      <Text
        style={[styles.enterYourMail1, styles.signInUsingTypo]}
      >{`Enter Your Mail I’d `}</Text>
      <Text style={styles.youWillReceive}>
        You will receive a 4 digit verification code
      </Text>
      <Pressable
        style={[styles.vectorParent, styles.groupChildLayout]}
        onPress={() => navigation.navigate("Verf")}
      >
        <Image
          style={[styles.groupChild, styles.groupPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-1061.png")}
        />
        <Text style={styles.generateOtp}>GENERATE OTP</Text>
      </Pressable>
      <Text
        style={[styles.signInUsing, styles.signInUsingTypo]}
      >{` sign in using `}</Text>
      <Pressable
        style={[styles.rectangleGroup, styles.groupLayout]}
        onPress={() => navigation.navigate("ByGoogle")}
      >
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.google, styles.googleTypo]}>Google</Text>
        <Image
          style={styles.googleLogo98082Icon}
          contentFit="cover"
          source={require("../assets/googlelogo9808-2.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.rectangleContainer, styles.groupLayout]}
        onPress={() => navigation.navigate("Number1")}
      >
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.phoneNo, styles.googleTypo]}>Phone No.</Text>
      </Pressable>
      <View style={styles.lineParent}>
        <View style={styles.frameLayout} />
        <Text style={[styles.or, styles.orTypo]}>OR</Text>
        <View style={[styles.frameItem, styles.frameLayout]} />
      </View>
      <Image
        style={styles.image5Icon}
        contentFit="cover"
        source={require("../assets/image-5.png")}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  image7IconPosition: {
    width: 393,
    left: -1,
    position: "absolute",
  },
  groupItemBorder: {
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
  },
  signInUsingTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  groupChildLayout: {
    height: 32,
    width: 161,
    position: "absolute",
  },
  groupPosition: {
    left: 0,
    top: 0,
  },
  groupLayout: {
    height: 50,
    width: 100,
    position: "absolute",
  },
  googleTypo: {
    height: 20,
    top: 11,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  orTypo: {
    fontSize: FontSize.size_5xl,
    textAlign: "left",
  },
  frameLayout: { //line of OR
    height: 1,
    width: 135,
    borderTopWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
  },
  image7Icon: {
    height: 400,
    top: 0,
    width: 393,
    left: -1,
  },
  emailChild: {
    top: 400,
    borderRadius: Border.br_34xl,
    backgroundColor: Color.colorGray_400,
    height: 500,
    opacity: 0.5,
  },
  instanceChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderWidth: 2,
    borderRadius: Border.br_xl,
    position: "absolute",
    width: "100%",
  },
  enterYourMail: {
    width: "87.43%",
    top: "24%",
    left: "6.57%",
    color: Color.colorGray_300,
    textAlign: "left",
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  rectangleParent: { // email box
    height: "5.92%",
    width: "90.74%",
    top: "70.98%",
    right: "4.62%",
    bottom: "30.09%",
    left: "5.64%",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    position: "absolute",
  },
  enterYourMail1: { //email enter text
    top: 410,
    left: 87,
    color: Color.colorSnow,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
  },
  youWillReceive: {
    top: 460,
    left: 20,
    width: 333,
    height: 24,
    color: Color.colorWhite,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  groupChild: {
    height: 32,
    width: 161,
    position: "absolute",
    borderRadius: Border.br_xl,
  },
  generateOtp: {
    top: 4,
    left: 24,
    width: 132,
    height: 23,
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  vectorParent: { // generate button line
    top: 565,
    left: 100,
  },
  signInUsing: {
    top: 630,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    width: 163,
    height: 27,
    left: 95,
    color: Color.colorWhite,
  },
  emailItem: {
    right: 132,
    bottom: 88,
    width: 23,
    height: 71,
    position: "absolute",
  },
  groupItem: {
    borderRadius: Border.br_3xs,
    borderWidth: 1,
    left: 0,
    top: 0,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
  },
  google: {
    left: 51,
    width: 68,
  },
  googleLogo98082Icon: {
    height: "50%",
    width: "16.67%",
    top: "26%",
    right: "70%",
    bottom: "24%",
    left: "13.33%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangleGroup: {
    left: 34,
    top: 650,
    width: 150,
  },
  phoneNo: {
    left: 42,
    width: 91,
  },
  rectangleContainer: {
    left: 209,
    top: 650,
    width: 150,
  },
  or: {
    marginLeft: 8,
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_5xl,
  },
  frameItem: {
    marginLeft: 8,
  },
  lineParent: { //line
    top: 600,
    left: 22,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  image5Icon: {
    marginLeft: -122,
    top: 90,
    left: "50%",
    width: 249,
    height: 224,
    position: "absolute",
  },
  email: {
    flex: 1,
    height: 844,
    backgroundColor: "transparent",
    overflow: "hidden",
    width: "100%",
  },
});

export default Email;
