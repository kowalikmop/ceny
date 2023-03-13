import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import axios from "axios";
import Detail from "./details";

const DetailsData = ({ route }) => {
  const { url } = route.params;
  console.log(url);
  const [details, setDetails] = useState([]);

  const getData = async () => {
    try {
      const { data } = await axios.get(
        `https://sprawdzanie-cen.rainbowtours.pl/api/sprawdzanie-cen-api/pobierz-bloczki?bloczki=${url}`
      );
      setDetails(data);

      //  console.log(data);
      // console.log(data.files[1].name);
    } catch (err) {
      console.log("Problem z API " + err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ScrollView>
      {details.map((item, i) => (
        <Detail item={item} key={item.ProduktID} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  itemTitle: {
    marginBottom: 10,
  },
});

export default DetailsData;
