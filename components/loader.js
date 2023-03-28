import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";

import { ListItem, Icon } from "@rneui/themed";

const Loader = () => {
  return (
    <View style={styles.view}>
      <ActivityIndicator size="large" color="grey" />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    display: "flex",
    alignItems: "center",
    marginTop: 50,
  },
});

export default Loader;
