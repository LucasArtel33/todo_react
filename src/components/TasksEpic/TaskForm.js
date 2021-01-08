import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";
import { useDispatch } from "react-redux";

import { addTask } from "../../redux/actions";

const TaskForm = ({}) => {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const _onChangeText = (value) => {
    setTitle(value);
  };

  const _onPressButton = () => {
    if (title.length > 0) {
      dispatch(addTask(title));
      setTitle("");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput value={title} onChangeText={_onChangeText} />
      </View>
      <Button onPress={_onPressButton} title="Add" color="grey" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 4,
    paddingLeft: 10,
    width: "80%",
  },
});

export default TaskForm;
