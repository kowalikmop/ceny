import { View, Text, StyleSheet } from "react-native";
import { ListItem, Icon } from "@rneui/themed";

const headerTitle = ({ title, backgroundColor, isIcon }) => {
  return (
    <ListItem
      bottomDivider
      containerStyle={{ height: 58, marginTop: 6, backgroundColor }}
    >
      {isIcon ? (
        <Icon
          reverse
          name="stats-chart"
          type="ionicon"
          color={backgroundColor}
          // size={30}
          iconStyle={{ color: "#000000" }}
        />
      ) : (
        false
      )}
      <ListItem.Content>
        <ListItem.Title style={styles.itemHeaderTitle}>{title}</ListItem.Title>
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
