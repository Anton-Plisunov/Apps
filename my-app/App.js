import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { Platform } from "expo-modules-core";

import Header from "./components/Header";
import Task from "./components/Task";

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    setTaskItems([...taskItems, task]);
    setTask("");
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <LinearGradient
      style={styles.container}
      colors={["rgba(0,0,0,0.1)", "rgba(150,237,255,0.5)", "rgba(0,212,255,1)"]}
      start={{ x: 0.1, y: 0.5 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.container}>
        <Header />

        <ScrollView style={styles.listBox}>
          {taskItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask()}>
                <Task text={item} />
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeTaskWrapper}
        >
          <TextInput
            style={styles.input}
            placeholder={"Write a task.."}
            value={task}
            onChangeText={(text) => setTask(text)}
          />
          <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={styles.btnWrapper}>
              <Text style={styles.btnText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  btnText: {
    color: "#000",
    fontSize: 15,
  },
  btnWrapper: {
    backgroundColor: "rgba(255,255,255,0.6)",
    height: 50,
    width: 50,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
  },
  writeTaskWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    position: "absolute",
    bottom: 60,
  },
  input: {
    backgroundColor: "rgba(255,255,255,1)",
    padding: 20,
    width: 250,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
  },

  container: {
    flex: 1,
  },
  listBox: {
    flex: 1,
  },
});
