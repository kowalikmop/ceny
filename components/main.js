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

  console.log(sum);

  const percentOk = (100 * data.Ok) / sum;
  console.log(percentOk.toFixed());

  return (
    <View>
      <ListItem bottomDivider>
        <Badge
          value={data.Error.toString()}
          status="error"
          badgeStyle={{ padding: 16 }}
          textStyle={{ fontSize: 18 }}
        />
        <ListItem.Content>
          <ListItem.Title>{`${data.Error} %`}</ListItem.Title>
          {/*   <ListItem.Subtitle>{subtitle}</ListItem.Subtitle> */}
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider>
        <Badge
          value={data.Warning.toString()}
          status="warning"
          badgeStyle={{ padding: 16 }}
          textStyle={{ fontSize: 18 }}
        />
        <ListItem.Content>
          <ListItem.Title>{`${data.Warning} %`}</ListItem.Title>
          {/*   <ListItem.Subtitle>{subtitle}</ListItem.Subtitle> */}
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider>
        <Badge
          value={data.Ok.toString()}
          status="success"
          badgeStyle={{ padding: 16 }}
          textStyle={{ fontSize: 18 }}
        />
        <ListItem.Content>
          <ListItem.Title>{`${percentOk.toFixed()} %`}</ListItem.Title>
          {/*   <ListItem.Subtitle>{subtitle}</ListItem.Subtitle> */}
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider>
        <Badge
          value={data.Timeout.toString()}
          status="primary"
          badgeStyle={{ padding: 16 }}
          textStyle={{ fontSize: 18 }}
        />
        <ListItem.Content>
          <ListItem.Title>{`${data.Timeout} %`}</ListItem.Title>
          {/*   <ListItem.Subtitle>{subtitle}</ListItem.Subtitle> */}
        </ListItem.Content>
      </ListItem>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Main;
