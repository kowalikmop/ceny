import React, { useState, useEffect } from "react";
import axios from "axios";
import { View, Text, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Podsumowanie from "./components/podsumowanie";
import Menu from "./components/menu";

function Article() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Articleeeee Screen</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  const [data, setData] = useState([
    {
      Nazwa: "Egzotyka",
      NazwaUrl: "dreamliner",
      Opis: "Dreamliner",
      Statusy: {
        Ok: 159,
        Warning: 0,
        Error: 0,
        Timeout: 0,
      },
    },
    {
      Nazwa: "Ogólne",
      NazwaUrl: "ogolne",
      Opis: "",
      Statusy: {
        Ok: 108,
        Warning: 0,
        Error: 0,
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
        Ok: 33,
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
      setData(data.Menu);
    } catch (err) {
      console.log("Problem z API Menu " + err);
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
        <Drawer.Screen name="Podsumowanie" component={Podsumowanie} />
        {data.map((item, i) => (
          <Drawer.Screen
            name={item.Nazwa}
            url={item.NazwaUrl}
            key={i}
            component={Menu}
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
