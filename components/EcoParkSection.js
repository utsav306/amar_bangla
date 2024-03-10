import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const EcoParkSection = ({ propTop }) => {
  const groupViewStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <View
      style={[styles.groupParent, styles.groupParentLayout, groupViewStyle]}
    >
      <View style={[styles.rectangleParent, styles.parentShadowBox]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Image
          style={[styles.groupItem, styles.groupItemPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-244.png")}
        />
      </View>
      <View style={[styles.ecoParkParent, styles.groupItemPosition]}>
        <Text style={[styles.ecoPark, styles.ecoParkFlexBox]}>Eco Park</Text>
        <View style={styles.sector5Parent}>
          <Text style={[styles.sector5, styles.ecoParkFlexBox]}>Sector 5</Text>
          <Image
            style={[styles.image59Icon, styles.groupChildPosition]}
            contentFit="cover"
            source={require("../assets/image-59.png")}
          />
        </View>
        <Text style={[styles.entryFee30, styles.entryFee30Typo]}>
          Entry Fee:-30/-
        </Text>
        <Text style={[styles.monday900Am, styles.entryFee30Typo]}>
          Monday(9:00 a.m - 5:00 p.m)
        </Text>
        <View style={styles.starParent}>
          <Image
            style={styles.frameLayout}
            contentFit="cover"
            source={require("../assets/star-6.png")}
          />
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            contentFit="cover"
            source={require("../assets/star-6.png")}
          />
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            contentFit="cover"
            source={require("../assets/star-6.png")}
          />
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            contentFit="cover"
            source={require("../assets/star-6.png")}
          />
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            contentFit="cover"
            source={require("../assets/star-6.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupParentLayout: {
    height: 139,
    width: 356,
  },
  parentShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  groupChildPosition: {
    left: 0,
    position: "absolute",
  },
  groupItemPosition: {
    top: 14,
    position: "absolute",
  },
  ecoParkFlexBox: {
    textAlign: "left",
    color: Color.colorBrown_100,
  },
  entryFee30Typo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    marginTop: 2,
    textAlign: "left",
  },
  frameLayout: {
    height: 10,
    width: 10,
  },
  groupChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorLightcoral,
    top: 0,
    height: 139,
    width: 356,
  },
  groupItem: {
    left: 219,
    width: 117,
    height: 112,
  },
  rectangleParent: {
    left: 0,
    position: "absolute",
    top: 0,
    height: 139,
    width: 356,
  },
  ecoPark: {
    fontSize: FontSize.size_13xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    width: 139,
    height: 35,
  },
  sector5: {
    left: 15,
    fontSize: FontSize.size_lgi,
    fontFamily: FontFamily.poppinsRegular,
    width: 78,
    height: 21,
    top: 0,
    position: "absolute",
  },
  image59Icon: {
    top: 4,
    width: 12,
    height: 17,
  },
  sector5Parent: {
    width: 93,
    marginTop: 2,
    height: 21,
  },
  entryFee30: {
    fontSize: FontSize.size_2xs,
    color: Color.colorBrown_100,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  monday900Am: {
    fontSize: FontSize.size_6xs,
    color: Color.colorBlack,
  },
  frameItem: {
    marginLeft: 2,
  },
  starParent: {
    flexDirection: "row",
    marginTop: 2,
  },
  ecoParkParent: {
    left: 26,
    width: 189,
    height: 99,
    justifyContent: "flex-end",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  groupParent: {
    top: 434,
    left: 17,
    position: "absolute",
  },
});

export default EcoParkSection;
