import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Counter from "../_Shared/Counter";

const CountersContainer = ({ nbTasks, nbTasksCompleted }) => {
  return (
    <View style={styles.container}>
      <Counter nb={nbTasks} title={"Created tasks"} />
      <Counter
        nb={nbTasksCompleted()}
        title={"Completed tasks"}
        style={{ alignItems: "flex-end" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
});

export default CountersContainer;
