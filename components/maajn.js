import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import axios from "axios";
import { ListItem, Badge } from "@rneui/themed";

const Main = () => {
  const [data, setData] = useState({
    "age": 0,
    "count": 0,
    "name": "None"
    });

  const getData = async () => {
    try {
      const { data } = await axios.get(
        `https://api.agify.io?name=michael`
      );
      setData(data);
    } catch (err) {
      console.log("Problem z API " + err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  return (
    <View
      style={{
        color: "white",
      }}
    >
 
      <ListItem bottomDivider>
        <Badge
          value={data.age}
          status="warning"
          badgeStyle={{ width: 70, height: 36 }}
          textStyle={{ fontSize: 16 }}
        />
        <ListItem.Content>
          <ListItem.Title>{data.name}</ListItem.Title>
          {/*   <ListItem.Subtitle>{subtitle}</ListItem.Subtitle> */}
        </ListItem.Content>
      </ListItem>


    </View>
  );
};

const styles = StyleSheet.create({});

export default Main;
