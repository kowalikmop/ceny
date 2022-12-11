import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import axios from "axios";
import { ListItem, Badge } from "@rneui/themed";

const Main = () => {
  const [data, setData] = useState({
    Ok: 0,
    Warning: 0,
    Error: 0,
    Timeout: 0,
  });

  const getData = async () => {
    try {
      const { data } = await axios.get(
        `https://sprawdzanie-cen.rainbowtours.pl/api/sprawdzanie-cen-api/menu`
      );
      setData(data.Podsumowanie);
    } catch (err) {
      console.log("Problem z API " + err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  const values = Object.values(data);
  const sum = values.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);

  console.log(data.Ok.toString());
  console.log(data.Warning);

  const percentOk = (100 * data.Ok) / sum;
  const percentWarning = (100 * data.Warning) / sum;
  const percentError = (100 * data.Error) / sum;
  const percentTimeout = (100 * data.Timeout) / sum;

  console.log(percentOk);

  return (
    <View
      style={{
        color: "white",
      }}
    >
      <ListItem bottomDivider>
        <Badge
          value={data.Error.toString()}
          status="error"
          badgeStyle={{ width: 70, height: 36 }}
          textStyle={{ fontSize: 16 }}
        />
        <ListItem.Content>
          <ListItem.Title>{`${
            percentError ? percentError.toFixed() : 0
          } %`}</ListItem.Title>
          {/*   <ListItem.Subtitle>{subtitle}</ListItem.Subtitle> */}
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider>
        <Badge
          value={data.Warning.toString()}
          status="warning"
          badgeStyle={{ width: 70, height: 36 }}
          textStyle={{ fontSize: 16 }}
        />
        <ListItem.Content>
          <ListItem.Title>{`${
            percentWarning ? percentWarning.toFixed() : 0
          } %`}</ListItem.Title>
          {/*   <ListItem.Subtitle>{subtitle}</ListItem.Subtitle> */}
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider>
        <Badge
          value={data.Ok.toString()}
          status="success"
          badgeStyle={{ width: 70, height: 36 }}
          textStyle={{ fontSize: 16 }}
        />
        <ListItem.Content>
          <ListItem.Title>{`${
            percentOk ? percentOk.toFixed() : 0
          } %`}</ListItem.Title>
          {/*   <ListItem.Subtitle>{subtitle}</ListItem.Subtitle> */}
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider>
        <Badge
          value={data.Timeout.toString()}
          status="primary"
          badgeStyle={{ width: 70, height: 36 }}
          textStyle={{ fontSize: 16 }}
        />
        <ListItem.Content>
          <ListItem.Title>{`${
            percentTimeout ? percentTimeout.toFixed() : 0
          } %`}</ListItem.Title>
          {/*   <ListItem.Subtitle>{subtitle}</ListItem.Subtitle> */}
        </ListItem.Content>
      </ListItem>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Main;
