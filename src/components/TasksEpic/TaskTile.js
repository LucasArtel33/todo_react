import React from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";

import { useDispatch } from "react-redux";

import { deleteTask, toggleTask } from "../../redux/actions";

const TaskTile = ({ id, title, isCompleted }) => {
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      onPress={() => {
        dispatch(toggleTask(id));
      }}
    >
      <View style={styles.container}>
        <View style={styles.subcontainer}>
          <Image
            style={styles.icon}
            source={
              isCompleted
                ? require("../../../assets/icon_check.png")
                : require("../../../assets/icon_circle.png")
            }
          />
          <Text
            style={[styles.title, { color: isCompleted ? "grey" : "black" }]}
          >
            {title}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            dispatch(deleteTask(id));
          }}
        >
          <Image
            style={styles.icon}
            source={require("../../../assets/icon_delete.png")}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  subcontainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 30,
    height: 30,
  },
  title: {
    marginLeft: 30,
  },
});

export default TaskTile;
