import * as React from "react";
import { View, Text, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Main from "./components/main";

function Article() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Articleeeee Screen</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <SafeAreaView style={styles.conteiner}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#ffffff"
        // translucent={true}
      />
      <Drawer.Navigator useLegacyImplementation>
        <Drawer.Screen name="Sprawdzanie cen > Podsumowanie" component={Main} />
        <Drawer.Screen name="Article" component={Article} />
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
