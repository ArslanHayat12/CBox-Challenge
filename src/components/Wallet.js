import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default Wallet = ({ value }) => {
  return (
    <View style={styles.circle}>
      <Text style={styles.textStyle}> {value} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    borderRadius: 50 / 2,
    width: 50,
    height: 50,
    backgroundColor: "grey",
    justifyContent: "space-around",
    alignItems: "center"
  },
  textStyle: {
    color: "white",
    fontWeight: "bold"
  }
});
