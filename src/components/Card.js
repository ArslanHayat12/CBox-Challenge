import React, { useContext } from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import { Store } from "../store";
import { Card as RNCard } from "react-native-elements";
import { getFilteredTypes, TYPE_COLORS } from "../utils";
import Wallet from "./Wallet";

function Item({ item }) {
  const {
    cardContainer,
    contentContainer,
    walletView,
    textContainer,
    textStyle,
    sideLine
  } = styles;
  return (
    <View>
      <RNCard
        containerStyle={{ backgroundColor: TYPE_COLORS[item.type] }}
        key={item.index}
      >
        <View>
          <View style={cardContainer}>
            <View style={sideLine} />

            <View style={contentContainer}>
              <View style={textContainer}>
                <Text style={textStyle}>{item.fullName}</Text>
                <Text style={textStyle}>{item.email}</Text>
                <View style={contentContainer}>
                  <View style={walletView}>
                    <Wallet value={item.wallet1} />
                  </View>
                  <View style={walletView}>
                    <Wallet value={item.wallet2} />
                  </View>
                  <View style={walletView}>
                    <Wallet value={item.wallet3} />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </RNCard>
    </View>
  );
}

export default function Card() {
  const { state } = useContext(Store);
  const items = getFilteredTypes(state.items, state.type);
  return (
    <FlatList
      data={items}
      renderItem={({ item }) => <Item item={item} />}
      keyExtractor={item => item.index.toString()}
    />
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: "row"
  },
  contentContainer: {
    flexDirection: "row"
  },
  textContainer: {
    flexDirection: "column",
    padding: 10
  },
  textStyle: {
    color: "white",
    fontWeight: "bold"
  },
  sideLine: {
    width: 10,
    height: 100,
    backgroundColor: "black"
  },
  walletView: {
    marginLeft: 10,
    marginTop: 10
  }
});
