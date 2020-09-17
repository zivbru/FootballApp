import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import { List } from 'react-native-paper';

const Squad = ({ team, name }) => {
  return (
    <View>
      <List.Accordion
        title='Players'
        titleStyle={styles.header}
        key={(new Date() * Math.random()).toString()}
      >
        {team[name].squad.map((item) => {
          <Text>{item.name}</Text>;
        })}
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={team[name].squad}
          renderItem={({ item }) => <List.Item title={item.name} />}
        />
      </List.Accordion>
    </View>
  );
};

export default Squad;

const styles = StyleSheet.create({
  header: {
    fontSize: 22,
    color: '#7FDBFF',
  },
});
