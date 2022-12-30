import React from "react";
import { View, StyleSheet } from "react-native";
import { ListItem } from "@rneui/themed";

const Menu = (props) => {
  return (
    <View
      style={{
        color: "white",
      }}
    >
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title>{props.route.name}</ListItem.Title>
          {/*   <ListItem.Subtitle>{subtitle}</ListItem.Subtitle> */}
        </ListItem.Content>
      </ListItem>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Menu;
