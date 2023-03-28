import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import { ListItem, Icon } from "@rneui/themed";

const Empty = () => {
  return (
    <ScrollView>
      <Text>Brak wyników</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  itemTitle: {
    marginBottom: 10,
  },
  red: {
    backgroundColor: "#FF7F50",
  },
  yellow: {
    backgroundColor: "#FFFF00",
  },
});

export default Empty;
