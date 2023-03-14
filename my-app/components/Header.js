import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.text}>Today's Tasks</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
  header: {
    marginTop: 60,
    padding: 20,
    backgroundColor: "#ffffff10",
  },
});

export default Header;
