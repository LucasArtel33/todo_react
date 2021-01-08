import React from "react";
import { FlatList } from "react-native";

import TaskTile from "./TaskTile";

export default function TasksList({ tasks }) {
  const _renderItem = ({ item }) => (
    <TaskTile
      id={item.id}
      title={item.title}
      isCompleted={item.isCompleted}
    ></TaskTile>
  );
  return (
    <FlatList
      data={tasks}
      renderItem={_renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}
