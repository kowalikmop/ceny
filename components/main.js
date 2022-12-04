import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import axios from "axios";

const Main = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Strona główna</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonstyle: {
    width: 263,
    height: 40,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  textstyle: {
    color: "red",
    fontSize: 18,
  },
});

export default Main;
