import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const FloatingButton = ({ toggleForm, isFormOpened }) => {
  return (
    <TouchableOpacity onPress={() => toggleForm()} style={styles.container}>
      <Text style={styles.title}>{isFormOpened ? "x" : "+"}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: "grey",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 30,
  },
});

export default FloatingButton;
