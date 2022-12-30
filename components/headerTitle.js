import { View, Text, StyleSheet } from "react-native";
import { ListItem, Icon } from "@rneui/themed";

const headerTitle = (props) => {
  return (
    <ListItem bottomDivider containerStyle={{ height: 58, marginTop: 10 }}>
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
          {props.title}
        </ListItem.Title>
        {/*   <ListItem.Subtitle>{subtitle}</ListItem.Subtitle> */}
      </ListItem.Content>
    </ListItem>
  );
};

const styles = StyleSheet.create({
  itemHeaderTitle: {
    fontSize: 18,
  },
});

export default headerTitle;
