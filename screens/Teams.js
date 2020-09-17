import React from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';
import * as TeamsAction from '../store/actions/teams';
import { useDispatch, useSelector } from 'react-redux';
import Team from '../components/Team';

const Teams = () => {
  const dispatch = useDispatch();
  const teams = useSelector((state) => state.teams.teams);
  dispatch(TeamsAction.fetchTeams());

  return teams.length <= 0 ? (
    <ActivityIndicator style={styles.spinner} size='large' />
  ) : (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={teams}
        renderItem={({ item }) => (
          <View>
            <Team style={styles.team} team={item} />
          </View>
        )}
      />
    </View>
  );
};

export default Teams;

const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
    backgroundColor: '#fff',
  },
  team: {
    marginVertical: 10,
    left: 0,
  },
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
});
