import { View, Text, StyleSheet } from "react-native";
import { ListItem, Badge } from "@rneui/themed";

const sumListItem = ({ sumValue, value, status }) => {
  const percent = (100 * value) / sumValue;

  return (
    <>
      <Badge
        value={value}
        status={status}
        badgeStyle={{ width: 40, height: 32 }}
        textStyle={{ fontSize: 12 }}
        containerStyle={{ marginRight: -10 }}
      />
      <ListItem.Content>
        <ListItem.Title style={styles.itemTitle}>
          {`${percent ? percent.toFixed() : 0} %`}
        </ListItem.Title>
        {/*   <ListItem.Subtitle>{subtitle}</ListItem.Subtitle> */}
      </ListItem.Content>
    </>
  );
};

const styles = StyleSheet.create({
  itemTitle: {
    fontSize: 12,
    paddingLeft: 15,
  },
});

export default sumListItem;
