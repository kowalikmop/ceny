import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import axios from "axios";
import { ListItem, Badge} from '@rneui/themed'
const Main = () => {

  const title = "0%";
  const subtitle = "ggsgs0%"
  return (
    
<View>

      <ListItem bottomDivider>
      <Badge value="3" status="success" badgeStyle={{ padding: 16 }} textStyle={{ fontSize: 18 }}/>
        <ListItem.Content>
          <ListItem.Title>{title}</ListItem.Title>
          <ListItem.Subtitle>{subtitle}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
  

</View>
  );
};

const styles = StyleSheet.create({

});

export default Main;
