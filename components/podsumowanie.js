import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import axios from "axios";
import { ListItem, Badge, Icon } from "@rneui/themed";

const Podsumowanie = (props) => {
  const [summary, setSummary] = useState({
    Ok: 100,
    Warning: 0,
    Error: 340,
    Timeout: 220,
  });

  const [menu, setMenu] = useState([
    {
      Nazwa: "Egzotyka",
      NazwaUrl: "dreamliner",
      Opis: "Dreamliner",
      Statusy: {
        Ok: 157,
        Warning: 0,
        Error: 1,
        Timeout: 0,
      },
    },
    {
      Nazwa: "Ogólne",
      NazwaUrl: "ogolne",
      Opis: "",
      Statusy: {
        Ok: 96,
        Warning: 0,
        Error: 1,
        Timeout: 0,
      },
    },
    {
      Nazwa: "Happy Hours",
      NazwaUrl: "happy-hours",
      Opis: "",
      Statusy: {
        Ok: 0,
        Warning: 0,
        Error: 0,
        Timeout: 0,
      },
    },
    {
      Nazwa: "Lipiec 2023",
      NazwaUrl: "lipiec-2023",
      Opis: "",
      Statusy: {
        Ok: 34,
        Warning: 0,
        Error: 0,
        Timeout: 0,
      },
    },
    {
      Nazwa: "Objazd Izrael Single",
      NazwaUrl: "izrael",
      Opis: "",
      Statusy: {
        Ok: 6,
        Warning: 0,
        Error: 0,
        Timeout: 0,
      },
    },
  ]);

  const getData = async () => {
    try {
      const { summary } = await axios.get(
        `https://sprawdzanie-cen.rainbowtours.pl/api/sprawdzanie-cen-api/menu`
      );
      setSummary(summary.Podsumowanie);
      setMenu(menu.Menu);
    } catch (err) {
      console.log("Problem z API " + err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(props);

  const values = Object.values(summary);
  const sum = values.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);

  const percentOk = (100 * summary.Ok) / sum;
  const percentWarning = (100 * summary.Warning) / sum;
  const percentError = (100 * summary.Error) / sum;
  const percentTimeout = (100 * summary.Timeout) / sum;

  return (
    <View>
      <ListItem bottomDivider>
        <Icon
          reverse
          name="stats-chart"
          type="ionicon"
          color="#FFFFFF"
          // size={30}
          iconStyle={{ color: "#000000" }}
        />
        <ListItem.Content>
          <ListItem.Title style={styles.itemHeaderTitle}>
            {props.route.name}
          </ListItem.Title>
          {/*   <ListItem.Subtitle>{subtitle}</ListItem.Subtitle> */}
        </ListItem.Content>
      </ListItem>

      <ListItem bottomDivider>
        <Badge
          value={summary.Error.toString()}
          status="error"
          badgeStyle={{ width: 40, height: 32 }}
          textStyle={{ fontSize: 12 }}
          containerStyle={{ marginRight: -10 }}
        />
        <ListItem.Content>
          <ListItem.Title style={styles.itemTitle}>{`${
            percentError ? percentError.toFixed() : 0
          } %`}</ListItem.Title>
          {/*   <ListItem.Subtitle>{subtitle}</ListItem.Subtitle> */}
        </ListItem.Content>

        <Badge
          value={summary.Warning.toString()}
          status="warning"
          badgeStyle={{ width: 40, height: 32 }}
          textStyle={{ fontSize: 12 }}
          containerStyle={{ marginRight: -10 }}
        />
        <ListItem.Content>
          <ListItem.Title style={styles.itemTitle}>{`${
            percentWarning ? percentWarning.toFixed() : 0
          } %`}</ListItem.Title>
          {/*   <ListItem.Subtitle>{subtitle}</ListItem.Subtitle> */}
        </ListItem.Content>

        <Badge
          value={summary.Ok.toString()}
          status="success"
          badgeStyle={{ width: 40, height: 32 }}
          textStyle={{ fontSize: 12 }}
          containerStyle={{ marginRight: -10 }}
        />
        <ListItem.Content>
          <ListItem.Title style={styles.itemTitle}>{`${
            percentOk ? percentOk.toFixed() : 0
          } %`}</ListItem.Title>
          {/*   <ListItem.Subtitle>{subtitle}</ListItem.Subtitle> */}
        </ListItem.Content>
        <Badge
          value={summary.Timeout.toString()}
          status="primary"
          badgeStyle={{ width: 40, height: 32 }}
          textStyle={{ fontSize: 12 }}
          containerStyle={{ marginRight: -10 }}
        />
        <ListItem.Content>
          <ListItem.Title style={styles.itemTitle}>{`${
            percentTimeout ? percentTimeout.toFixed() : 0
          } %`}</ListItem.Title>
          {/*   <ListItem.Subtitle>{subtitle}</ListItem.Subtitle> */}
        </ListItem.Content>
      </ListItem>
    </View>
  );
};

const styles = StyleSheet.create({
  itemHeaderTitle: {
    fontSize: 20,
  },
  itemTitle: {
    fontSize: 12,
  },
});

export default Podsumowanie;
