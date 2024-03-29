import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { ListItem, Icon } from "@rneui/themed";

const Empty = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Brak wyników</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    display: "flex",
    alignItems: "center",
    marginTop: 20,
  },
  text: {
    fontSize: 18,
    color: "grey",
  },
});

export default Empty;
