import { View, Text, StyleSheet } from "react-native";
import { ListItem, Badge, Icon } from "@rneui/themed";

const sumListItem = ({ statusvalue, percentvalue }) => {
  return (
    <ListItem bottomDivider>
      <Badge
        value={statusvalue.toString()}
        status="error"
        badgeStyle={{ width: 40, height: 32 }}
        textStyle={{ fontSize: 12 }}
        containerStyle={{ marginRight: -10 }}
      />
      <ListItem.Content>
        <ListItem.Title style={styles.itemTitle}>
          {/*{`${
          percentvalue ? percentvalue.toFixed() : 0
        } %`}*/}
        </ListItem.Title>
        {/*   <ListItem.Subtitle>{subtitle}</ListItem.Subtitle> */}
      </ListItem.Content>
    </ListItem>
  );
};

const styles = StyleSheet.create({
  itemTitle: {
    fontSize: 12,
  },
});

export default sumListItem;
