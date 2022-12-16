import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import axios from "axios";
import { ListItem, Badge } from "@rneui/themed";

const Menu = (props) => {
  const [data, setData] = useState("hhh");

  console.log(props);

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
