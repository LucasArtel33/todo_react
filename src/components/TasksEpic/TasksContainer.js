import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import { useSelector } from "react-redux";

import { getTasks } from "../../redux/selectors";

import TaskForm from "./TaskForm";
import TasksList from "./TasksList";
import CountersContainer from "./CountersContainers";
import FloatingButton from "../_Shared/FloatingButton";

function TaskContainer(props) {
  const tasks = useSelector(getTasks);

  const [isFormOpened, setIsFormOpened] = useState(false);

  const toggleForm = () => {
    setIsFormOpened(!isFormOpened);
  };

  const getCompletedTasks = () => {
    let counters = 0;
    console.log(tasks);
    tasks.forEach((task) => {
      if (task.isCompleted) {
        counters++;
      }
    });
    return counters;
  };

  return (
    <View style={styles.container}>
      {isFormOpened && <TaskForm />}
      <CountersContainer
        nbTasks={tasks.length}
        nbTasksCompleted={() => getCompletedTasks()}
      />
      <TasksList tasks={tasks} />
      <FloatingButton toggleForm={toggleForm} isFormOpened={isFormOpened} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
});

export default TaskContainer;
