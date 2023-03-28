import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

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
  },
});

export default Empty;
