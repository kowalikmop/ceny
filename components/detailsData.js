import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import axios from "axios";
import Test from "./details";

const DetailsData = (props) => {
  const [details, setDetails] = useState([
    {
      BloczekID: "1387_8981:160519:6428823",
      ProduktID: 8981,
      ProduktWCID: 160519,
      LiczbaDni: 11,
      HotelNazwa: "U podnóża Himalajów",
      TerminWyjazdu: "2023-05-18T00:00:00Z",
      Wyzywienie: "Śniadania i obiadokolacje",
      TypWycieczki: "objazd",
      Miasto: "Warszawa Chopin",
      CenaWyszukaj: 14612,
      CenaRezerwacja: 14542,
      CenaKartaHotelu: 14612,
      HistoriaCenWyszukaj: [14612],
      HistoriaCenKartyHotelu: [14612],
      HistoriaCenRezerwacji: [14542],
      Zdjecie:
        "//images.r.pl/zdjecia/hotele/glob/1387/u-podnoza-himalajow_1387_102108_149845_410x225.jpg",
      Status: "ERROR",
      CzyBlad: true,
      DataSprawdzenia: "2023-01-15T18:08:49.932489886Z",
      OdKiedyBlad: "2023-01-11T17:25:10.948677231Z",
      DatyUrodzenia: ["1993-01-01", "1993-01-01"],
      LiczbaPokoi: 1,
    },
    {
      BloczekID: "1387_8981:160520:6428824",
      ProduktID: 8981,
      ProduktWCID: 160520,
      LiczbaDni: 11,
      HotelNazwa: "U podnóża Himalajów",
      TerminWyjazdu: "2023-05-25T00:00:00Z",
      Wyzywienie: "Śniadania i obiadokolacje",
      TypWycieczki: "objazd",
      Miasto: "Warszawa Chopin",
      CenaWyszukaj: 13812,
      CenaRezerwacja: 13742,
      CenaKartaHotelu: 13731,
      HistoriaCenWyszukaj: [13812],
      HistoriaCenKartyHotelu: [13731],
      HistoriaCenRezerwacji: [13742],
      Zdjecie:
        "//images.r.pl/zdjecia/hotele/glob/1387/u-podnoza-himalajow_1387_102108_149845_410x225.jpg",
      Status: "ERROR",
      CzyBlad: true,
      DataSprawdzenia: "2023-01-15T18:24:01.978760856Z",
      OdKiedyBlad: "2023-01-15T14:08:56.576010492Z",
      DatyUrodzenia: ["1993-01-01", "1993-01-01"],
      LiczbaPokoi: 1,
    },
    {
      BloczekID: "5898_8800:157373:6215353",
      ProduktID: 8800,
      ProduktWCID: 157373,
      LiczbaDni: 8,
      HotelNazwa: "Albatros Beach Club Abu Soma",
      TerminWyjazdu: "2023-06-01T00:00:00Z",
      Wyzywienie: "All inclusive",
      TypWycieczki: "wypoczynek",
      Miasto: "Katowice",
      CenaWyszukaj: 7403,
      CenaRezerwacja: 7419,
      CenaKartaHotelu: 7402,
      HistoriaCenWyszukaj: [7403],
      HistoriaCenKartyHotelu: [7402],
      HistoriaCenRezerwacji: [7419],
      Zdjecie:
        "//images.r.pl/zdjecia/hotele/glob/5898/albatros-beach-club-abu-soma_egipt_hurghada_5898_185356_484200_410x225.jpg",
      Status: "ERROR",
      CzyBlad: true,
      DataSprawdzenia: "2023-01-15T18:24:01.978760856Z",
      OdKiedyBlad: "2023-01-11T16:04:36.37393349Z",
      DatyUrodzenia: ["1993-01-01", "1993-01-01"],
      LiczbaPokoi: 1,
    },
    {
      BloczekID: "6850_8795:156823:6456992",
      ProduktID: 8795,
      ProduktWCID: 156823,
      LiczbaDni: 4,
      HotelNazwa: "Zenith (ex. Marlin Beach)",
      TerminWyjazdu: "2023-06-20T00:00:00Z",
      Wyzywienie: "All inclusive",
      TypWycieczki: "wypoczynek",
      Miasto: "Katowice",
      CenaWyszukaj: 2658,
      CenaRezerwacja: 2719,
      CenaKartaHotelu: 0,
      HistoriaCenWyszukaj: [2651],
      HistoriaCenKartyHotelu: [0],
      HistoriaCenRezerwacji: [2719],
      Zdjecie:
        "//images.r.pl/zdjecia/hotele/glob/6850/zenith-ex-marlin-beach_bulgaria_sloneczny-brzeg_6850_189830_500035_410x225.jpg",
      Status: "ERROR",
      CzyBlad: true,
      DataSprawdzenia: "2023-01-15T18:24:01.978760856Z",
      OdKiedyBlad: "2023-01-11T17:53:39.173544085Z",
      DatyUrodzenia: ["1993-01-01", "1993-01-01"],
      LiczbaPokoi: 1,
    },
  ]);

  return (
    <ScrollView>
      {details.map((item, i) => (
        <Test item={item} key={i} />
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
