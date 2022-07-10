import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Constants from "expo-constants";
import Header from "./componenets/Header";
import Body from "./componenets/Body";
import Actions from "./componenets/Actions";
import { Provider } from "react-redux";
import store from "./store";
import SnackbarContainer from "./componenets/SnackBarContainer";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <SnackbarContainer />
        <Header />
        <Body />
        <Actions />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
