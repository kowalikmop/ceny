import React, { useState, useEffect } from "react";
import axios from "axios";
import { View, Text, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Podsumowanie from "./components/podsumowanie";
import Menu from "./components/menu";

const Drawer = createDrawerNavigator();

function MyDrawer() {
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
      const { data } = await axios.get(
        `https://sprawdzanie-cen.rainbowtours.pl/api/sprawdzanie-cen-api/menu`
      );
      setSummary(data.Podsumowanie);
      setMenu(data[0].Menu);
    } catch (err) {
      console.log("Problem z API " + err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // console.log(data[0].NazwaUrl);

  return (
    <SafeAreaView style={styles.conteiner}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#ffffff"
        // translucent={true}
      />
      <Drawer.Navigator useLegacyImplementation>
        <Drawer.Screen name="Ceny" component={Podsumowanie} />
        {menu.map((item, i) => (
          <Drawer.Screen
            name={item.Nazwa}
            key={i}
            component={Podsumowanie}
           initialParams={{ url: item.NazwaUrl }}
          />
        ))}
      </Drawer.Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
