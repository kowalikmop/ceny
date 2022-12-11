import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import axios from "axios";
import { ListItem, Badge } from "@rneui/themed";

const Podsumowanie = () => {
  const [data, setData] = useState([
    {
        "Nazwa": "Egzotyka",
        "NazwaUrl": "dreamliner",
        "Opis": "Dreamliner",
        "Statusy": {
            "Ok": 158,
            "Warning": 0,
            "Error": 1,
            "Timeout": 0
        }
    },
    {
        "Nazwa": "Ogólne",
        "NazwaUrl": "ogolne",
        "Opis": "",
        "Statusy": {
            "Ok": 103,
            "Warning": 0,
            "Error": 2,
            "Timeout": 0
        }
    },
    {
        "Nazwa": "Happy Hours",
        "NazwaUrl": "happy-hours",
        "Opis": "",
        "Statusy": {
            "Ok": 0,
            "Warning": 0,
            "Error": 0,
            "Timeout": 0
        }
    },
    {
        "Nazwa": "Lipiec 2023",
        "NazwaUrl": "lipiec-2023",
        "Opis": "",
        "Statusy": {
            "Ok": 33,
            "Warning": 0,
            "Error": 0,
            "Timeout": 0
        }
    },
    {
        "Nazwa": "Objazd Izrael Single",
        "NazwaUrl": "izrael",
        "Opis": "",
        "Statusy": {
            "Ok": 6,
            "Warning": 0,
            "Error": 0,
            "Timeout": 0
        }
    }
]);

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

  const percentOk = (100 * data.Ok) / sum;
  const percentWarning = (100 * data.Warning) / sum;
  const percentError = (100 * data.Error) / sum;
  const percentTimeout = (100 * data.Timeout) / sum;

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

export default Podsumowanie;
