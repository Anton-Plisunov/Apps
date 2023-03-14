import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.square}></TouchableOpacity>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circle}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    backgroundColor: "rgba(255,255,255,0.6)",
    borderColor: "rgba(0,200,250,1)",
    borderWidth: 1,
    borderRadius: 20,
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
  },

  itemLeft: {
    flexDirection: "row",
    alignItem: "center",
    justifyContent: "ceneter",
    flexWrap: "wrap",
  },
  square: {
    backgroundColor: "rgba(0,150,255,1)",
    width: 20,

    opacity: 1,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(0,200,250,1)",
    marginRight: 10,
  },
  del: {
    textAlign: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },
  itemText: {
    maxWidth: "80%",
  },
  circle: {
    backgroundColor: "rgba(0,100,255,0)",
    width: 12,
    height: 12,
    opacity: 1,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(0,200,250,1)",
  },
});

export default Task;
