import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { COLORS, SHADOWS, SIZES } from "../constants";

export const CircleButton = ({ imageUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",

        borderRadius: SIZES.extraLarge,
        ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}
    >
      <Image source={imageUrl} style={{ width: 24, height: 24 }} />
    </TouchableOpacity>
  );
};

export const RectButton = ({ minWidth, handlePress, fontSize, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        ...props,
        minWidth: minWidth,
        padding: SIZES.small,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          color: COLORS.white,
          textAlign: "center",
          fontFamily: SIZES.semiBold,
          fontSize: fontSize,
        }}
      >
        Place a bid
      </Text>
    </TouchableOpacity>
  );
};
