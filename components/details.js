import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import axios from "axios";
import { ListItem, Icon } from "@rneui/themed";

const Details = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  const handlePress = () => setExpanded(!expanded);

  const is = item.Status;

  console.log(is);

  return (
    <ScrollView>
      <ListItem.Accordion
        content={
          <>
            <Icon
              reverse
              name="home-outline"
              type="ionicon"
              color={"#FFFFDD"}
              size={20}
              iconStyle={{ color: "#000000" }}
              containerStyle={{ marginLeft: -11 }}
            />
            <ListItem.Content>
              <ListItem.Title>
                {`${item.HotelNazwa.slice(
                  0,
                  22
                )}  Różnica: ${item.CenaRezerwacja - item.CenaWyszukaj}`}
              </ListItem.Title>
            </ListItem.Content>
          </>
        }
        isExpanded={expanded}
        onPress={() => {
          setExpanded(!expanded);
        }}
        containerStyle={[item.Status === 'ERROR' && styles.content]}
      >
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Title>{`Termin wyjazdu: ${item.TerminWyjazdu.slice(
              0,
              10
            )}`}</ListItem.Title>
            <ListItem.Title
              style={styles.itemTitle}
            >{`Miasto: ${item.Miasto}`}</ListItem.Title>
            <ListItem.Title>{`Cena szukaj: ${item.CenaWyszukaj}`}</ListItem.Title>
            <ListItem.Title>{`Cena rezerwacja: ${item.CenaRezerwacja}`}</ListItem.Title>
            <ListItem.Title
              style={styles.itemTitle}
            >{`Różnica: ${item.CenaRezerwacja -
              item.CenaWyszukaj}`}</ListItem.Title>
            <ListItem.Title>{`Data sprawdzenia: ${item.DataSprawdzenia.slice(
              0,
              10
            )}`}</ListItem.Title>
            {item.OdKiedyBlad && (
              <ListItem.Title>{`Od kiedy błąd: ${item.OdKiedyBlad.slice(
                0,
                10
              )}`}</ListItem.Title>
            )}
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </ListItem.Accordion>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  itemTitle: {
    marginBottom: 10,
  },
  content: {
    backgroundColor: "#FF7F50",
  },
});

export default Details;
