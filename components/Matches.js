import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import { List } from 'react-native-paper';
import Moment from 'moment';

const Matches = ({ upcomingMatches, team }) => {
  return (
    <View>
      <List.Section>
        <List.Accordion
          title='Upcoming Matches'
          titleStyle={styles.header}
          key={(new Date() * Math.random()).toString()}
        >
          <FlatList
            keyExtractor={(item) => item.id.toString()}
            data={upcomingMatches.slice(0, 10)}
            renderItem={({ item }) => (
              <View style={styles.matches}>
                <Text style={styles.txt}>
                  Competition:{' '}
                  <Text style={styles.value}>{item.competition.name}</Text>
                </Text>
                <Text style={styles.txt}>
                  Date :{' '}
                  <Text style={styles.value}>
                    {' '}
                    {Moment(item.utcDate).format('DD MMM')}
                  </Text>
                </Text>
                <Text style={styles.txt}>
                  Rival:{' '}
                  <Text style={styles.value}>
                    {item.homeTeam.id === team.id
                      ? item.awayTeam.name
                      : item.homeTeam.name}
                  </Text>
                </Text>
                <View style={styles.seperator}></View>
              </View>
            )}
          />
        </List.Accordion>
      </List.Section>
    </View>
  );
};

export default Matches;

const styles = StyleSheet.create({
  header: {
    fontSize: 22,
    color: '#7FDBFF',
  },
  seperator: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    width: '70%',
    marginTop: 10,
  },
  value: {
    fontWeight: 'bold',
  },
  txt: {
    fontSize: 18,
  },
  matches: {
    padding: 10,
  },
});
