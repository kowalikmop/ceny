import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import axios from "axios";
import { ListItem } from "@rneui/themed";
import HeaderTitle from "./headerTitle";
import SumListItem from "./sumListItem";

const Summary = (props) => {
  const [summary, setSummary] = useState({
    Ok: 30,
    Warning: 10,
    Error: 10,
    Timeout: 10,
  });

  const [menu, setMenu] = useState([
    {
      Nazwa: "Egzotyka",
      NazwaUrl: "dreamliner",
      Opis: "Dreamliner",
      Statusy: {
        Ok: 2,
        Warning: 2,
        Error: 2,
        Timeout: 2,
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
        Warning: 3,
        Error: 6,
        Timeout: 9,
      },
    },
    {
      Nazwa: "Objazd Izrael Single",
      NazwaUrl: "izrael",
      Opis: "",
      Statusy: {
        Ok: 6,
        Warning: 3,
        Error: 6,
        Timeout: 1,
      },
    },
  ]);
  {
    /* 
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
*/
  }
  // console.log(props);

  const valuesSum = Object.values(summary);
  const sumValue = valuesSum.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);

  return (
    <ScrollView>
      {menu.map((item, i) => {
        const valuesSum = Object.values(item.Statusy);
        const sumValue = valuesSum.reduce((accumulator, value) => {
          return accumulator + value;
        }, 0);
        console.log(sumValue);
        return (
          <>
            <HeaderTitle
              title={item.Nazwa}
              key={i}
              backgroundColor={"#FFFFFF"}
              isIcon={false}
            />
            <ListItem bottomDivider containerStyle={{ height: 54 }}>
              <SumListItem
                value={item.Statusy.Error}
                sumValue={sumValue}
                status={"error"}
                key={item.NazwaUrl}
              />

              <SumListItem
                value={item.Statusy.Warning}
                sumValue={sumValue}
                status={"warning"}
                key={item.NazwaUrl}
              />
              <SumListItem
                value={item.Statusy.Ok}
                sumValue={sumValue}
                status={"success"}
                key={item.NazwaUrl}
              />
              <SumListItem
                value={item.Statusy.Timeout}
                sumValue={sumValue}
                status={"primary"}
                key={item.NazwaUrl}
              />
            </ListItem>
          </>
        );
      })}

      <HeaderTitle
        title={"Podsumowanie"}
        backgroundColor={"#D6EAF8"}
        isIcon={true}
      />
      <ListItem
        bottomDivider
        containerStyle={{ height: 54, backgroundColor: "#D6EAF8" }}
      >
        <SumListItem
          sumValue={sumValue}
          value={summary.Error}
          status={"error"}
        />

        <SumListItem
          sumValue={sumValue}
          value={summary.Warning}
          status={"warning"}
        />
        <SumListItem
          sumValue={sumValue}
          value={summary.Ok}
          status={"success"}
        />
        <SumListItem
          sumValue={sumValue}
          value={summary.Timeout}
          status={"primary"}
        />
      </ListItem>
    </ScrollView>
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

export default Summary;
