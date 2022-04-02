import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import { CircleButton, RectButton } from "./Buttons";
import { EthPrice, NFTTitle, SubInfo } from "./NFTInfo";
const NFTCart = ({ item: { name, image, creator, price } }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Card */}
      <View style={styles.card}>
        {/* Image */}
        <Image resizeMode="cover" style={styles.CardImage} source={image} />
        {/* Like */}
        <CircleButton imageUrl={assets.heart} right={10} top={10} />
      </View>
      {/* Info */}
      <SubInfo />
      {/* For some extra padding */}
      <View style={{ width: "100%", padding: SIZES.font }}>
        <NFTTitle
          name={name}
          creator={creator}
          TitleSize={SIZES.large}
          creatorSize={SIZES.small}
        />
        {/* Eth Price */}
        <View style={styles.EthPriceContainer}>
          <EthPrice price={price} />
          <RectButton
            fontSize={SIZES.font}
            handlePress={() =>
              navigation.navigate("Details", {
                data: { name, image, creator, price },
              })
            }
            minWidth={120}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.font,
    marginBottom: SIZES.margin,
    margin: SIZES.base,
    ...SHADOWS.dark,
  },
  card: {
    width: "100%",
    height: 250,
  },
  CardImage: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: SIZES.font,
  },
  EthPriceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: SIZES.font,
  },
});

export default NFTCart;
