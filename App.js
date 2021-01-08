import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, Platform } from "react-native";
import { Provider } from "react-redux";

import store from "./src/redux/store";

import Header from "./src/components/_Shared/Header";
import TaskContainer from "./src/components/TasksEpic/TasksContainer";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Header />
        <TaskContainer />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? 25 : 0,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
