import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { assets, COLORS, FONTS, SHADOWS, SIZES } from "../constants";

export const SubInfo = () => {
  return (
    <View style={styles.SubInfoContainer}>
      <People />
      <EndDate />
    </View>
  );
};

export const NFTInfo = () => {
  return (
    <View>
      <Text>NFTInfo</Text>
    </View>
  );
};
export const NFTTitle = ({ name, creator, TitleSize, creatorSize }) => {
  return (
    <View>
      <Text
        style={{
          fontSize: TitleSize,
          fontFamily: FONTS.semiBold,
          color: COLORS.primary,
        }}
      >
        {name}
      </Text>
      <Text
        style={{
          fontSize: creatorSize,
          fontFamily: FONTS.regular,
          color: COLORS.primary,
        }}
      >
        {creator}
      </Text>
    </View>
  );
};

export const EthPrice = ({ price }) => {
  return (
    <View style={{ alignItems: "center", flexDirection: "row" }}>
      {/* Eth image */}
      <Image
        source={assets.eth}
        resizeMode="contain"
        style={{ width: 20, height: 20, marginRight: 3 }}
      />
      <Text
        style={{
          fontSize: SIZES.font,
          color: COLORS.primary,
          fontFamily: FONTS.medium,
        }}
      >
        {price}
      </Text>
    </View>
  );
};

export const ImageCmp = ({ imageUrl, index }) => {
  return (
    <Image
      source={imageUrl}
      resizeMode="contain"
      style={{
        width: 48,
        height: 48,
        marginLeft: index === 0 ? 0 : -SIZES.font,
      }}
    />
  );
};

export const People = () => {
  const { person01, person02, person03 } = assets;
  const PeopleArray = [person01, person02, person03];
  return (
    <View style={styles.PeopleContainer}>
      {PeopleArray.map((person, index) => {
        return <ImageCmp imageUrl={person} index={index} key={`id-${index}`} />;
      })}
    </View>
  );
};

export const EndDate = () => {
  return (
    <View style={styles.DateContainer}>
      <Text style={styles.DateText}>Ending in</Text>
      <Text style={styles.DateText2}>12h 30m</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  SubInfoContainer: {
    width: "100%",
    paddingHorizontal: SIZES.font,
    marginTop: -SIZES.extraLarge,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  PeopleContainer: {
    flexDirection: "row",
  },
  DateContainer: {
    paddingHorizontal: SIZES.font,
    paddingVertical: SIZES.base,
    backgroundColor: COLORS.white,
    ...SHADOWS.light,
    maxWidth: "50%",
    elevation: 1,
  },
  DateText: {
    fontSize: SIZES.small,
    fontFamily: FONTS.regular,
    color: COLORS.primary,
  },
  DateText2: {
    fontSize: SIZES.medium,
    fontFamily: FONTS.semiBold,
    color: COLORS.primary,
  },
});
