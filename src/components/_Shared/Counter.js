import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Counter = ({ nb, title, style }) => {
  return (
    <View style={style}>
      <Text style={styles.nb}>{nb}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  nb: {
    fontWeight: "bold",
    fontSize: 20,
  },
  title: {
    color: "grey",
  },
});

export default Counter;
