import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import axios from "axios";
import Detail from "./details";

const DetailsData = ({ route }) => {
  const { url } = route.params;
  console.log(url);
  const [details, setDetails] = useState([
    {
      BloczekID: "328_8917:167206:6616452",
      ProduktID: 8917,
      ProduktWCID: 167206,
      LiczbaDni: 5,
      HotelNazwa: "Bonjour Paris!",
      TerminWyjazdu: "2023-09-12T00:00:00Z",
      Wyzywienie: "Śniadania",
      TypWycieczki: "objazd",
      Miasto: "Warszawa-Radom",
      CenaWyszukaj: 4910,
      CenaRezerwacja: 4987,
      CenaKartaHotelu: 0,
      HistoriaCenWyszukaj: [4910],
      HistoriaCenKartyHotelu: [0],
      HistoriaCenRezerwacji: [4987],
      Zdjecie:
        "//images.r.pl/zdjecia/hotele/glob/328/bonjour-paris_328_102866_151440_410x225.jpg",
      Status: "ERROR",
      CzyBlad: true,
      DataSprawdzenia: "2023-03-12T19:58:54.70769773Z",
      OdKiedyBlad: "2023-03-13T17:48:54.6873328Z",
      DatyUrodzenia: ["1993-01-01", "1993-01-01"],
      LiczbaPokoi: 1,
    },
  ]);

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
