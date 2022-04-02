import { View, Text, FlatList, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { NFTCart, FocusedStatusBar, HomeHeader } from "../components/index";
import { COLORS, NFTData } from "../constants";
const HomePage = () => {
  return (
    <SafeAreaView style={tw`flex-1`}>
      <FocusedStatusBar background={COLORS.primary} />
      <View style={tw`flex-1`}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={NFTData}
            renderItem={({ item }) => <NFTCart item={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader />}
          />
        </View>
        <View style={styles.NFTcontainer}>
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  NFTcontainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: -1,
  },
});
export default HomePage;
