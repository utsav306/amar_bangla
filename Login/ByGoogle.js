import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import SignInFormContainer from "../components/SignInFormContainer";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const ByGoogle = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.byGoogle}
      locations={[0, 1]}
      colors={["#7c2929", "rgba(124, 41, 41, 0)"]}
    >
      <Image
        style={[styles.image7Icon, styles.image7IconPosition]}
        contentFit="cover"
        source={require("../assets/image-7.png")}
      />
      <View style={[styles.byGoogleChild, styles.image7IconPosition]} />
      <Text style={styles.byGoogle1}>By Google</Text>
      <Text style={styles.signInUsing}>{` sign in using `}</Text>
    
      <Pressable
        style={[styles.rectangleParent, styles.groupChildLayout]}
        onPress={() => navigation.navigate("Number1")}
      >
        <View style={[styles.groupChild, styles.groupChildBorder]} />
        <Text style={[styles.phoneNo, styles.orTypo]}>Phone No.</Text>
      </Pressable>
      <View style={styles.lineParent}>
        <View style={styles.frameLayout} />
        <Text style={[styles.or, styles.orTypo]}>OR</Text>
        <View style={[styles.frameItem, styles.frameLayout]} />
      </View>
      <View style={[styles.byGoogleInner, styles.groupChildBorder]} />
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-43.png")}
      />
      <Image
        style={styles.byGoogleChild1}
        contentFit="cover"
        source={require("../assets/ellipse-44.png")}
      />
      <SignInFormContainer
        onGroupPressablePress={() => navigation.navigate("Email")}
      />
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
  groupChildLayout: {
    height: 50,
    width: 150,
  },
  groupChildBorder: {
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  orTypo: {
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
  },
  frameLayout: {
    height: 1,
    width: 151,
    borderTopWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
  },
  image7Icon: {
    height: 400,
    top: 0,
  },
  byGoogleChild: {
    top: 400,
    borderRadius: Border.br_34xl,
    backgroundColor: Color.colorBlack,
    height: 500,
    opacity: 0.5,
  },
  byGoogle1: {
    top: 420,
    left: 135,
    color: Color.colorSnow,
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  signInUsing: {
    top: 590,
    left: 105,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    width: 163,
    height: 27,
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  byGoogleItem: {
    right: 132,
    bottom: 88,
    width: 23,
    height: 71,
    position: "absolute",
  },
  groupChild: {
    left: 0,
    borderRadius: Border.br_3xs,
    borderWidth: 1,
    height: 50,
    width: 150,
    top: 0,
  },
  phoneNo: {
    top: 11,
    left: 42,
    fontSize: FontSize.size_lg,
    color: Color.colorBlack,
    width: 91,
    height: 20,
    position: "absolute",
  },
  rectangleParent: {
    top: 630,
    left: 180,
    
    position: "absolute",
  },
  or: {
    marginLeft: 8,
    color: Color.colorWhite,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.poppinsRegular,
  },
  frameItem: {
    marginLeft: 8,
  },
  lineParent: {
    top: 550,
    left: 12,
    right:12,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  byGoogleInner: {
    height: "8.29%",
    width: "89.74%",
    top: "65.63%",
    right: "4.62%",
    bottom: "28.08%",
    left: "5.64%",
    borderRadius: Border.br_xl,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderWidth: 2,
  },
  ellipseIcon: {
    height: "5.92%",
    width: "12.82%",
    top: "66.63%",
    right: "77.18%",
    bottom: "29.27%",
    left: "10%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  byGoogleChild1: {
    top: "66.47%",
    left: "10%",
    width: "12.82%",
    height: 46,
    position: "absolute",
  },
  image5Icon: {
    marginLeft: -125,
    top: 81,
    left: "50%",
    width: 249,
    height: 224,
    position: "absolute",
  },
  byGoogle: {
    flex: 1,
    width: "100%",
    height: 844,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
});

export default ByGoogle;
