import React from "react";
import { Header } from "react-native-elements";
import { View, StyleSheet } from "react-native";
import { StoreProvider } from "./src/store";
import Main from "./src/components/Main";

export default function App() {
  const { header, container } = styles;
  return (
    <StoreProvider>
      <Header centerComponent={{ text: "CBOX USERS", style: header }} />
      <View style={container}>
        <Main />
      </View>
    </StoreProvider>
  );
}
const styles = StyleSheet.create({
  header: {
    color: "#fff",
    fontWeight: "bold"
  },
  container: {
    marginTop: 15
  }
});
