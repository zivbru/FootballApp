import React, { useEffect } from 'react';
import { StyleSheet, ActivityIndicator, View, ScrollView } from 'react-native';
import * as TeamsAction from '../store/actions/teams';
import { useSelector, useDispatch } from 'react-redux';
import Squad from './Squad';
import Matches from './Matches';
import Logo from './Logo';
import { List } from 'react-native-paper';

const Team = ({ team: { name, id } }) => {
  const dispatch = useDispatch();
  const team = useSelector((state) => state.teams.team);
  const upcomingMatches = useSelector((state) => state.teams.upcomingMatches);

  useEffect(() => {
    dispatch(TeamsAction.fetchTeamById(id));
    dispatch(TeamsAction.fetchTeamUpcomingMatches(id));
  }, [dispatch]);

  return Object.keys(team).length === 0 && team.constructor === Object ? (
    <ActivityIndicator style={styles.spinner} size='large' />
  ) : (
    <View style={styles.container}>
      <List.Section>
        <List.Accordion
          title={name}
          titleStyle={styles.title}
          key={(new Date() * Math.random()).toString()}
        >
          <ScrollView style={styles.scrollView}>
            <View>
              {(team[name] || {}).crestUrl && (
                <Logo crestUrl={team[name].crestUrl} />
              )}

              {upcomingMatches && (
                <Matches upcomingMatches={upcomingMatches} team={team} />
              )}

              {(team[name] || {}).squad && <Squad team={team} name={name} />}
            </View>
          </ScrollView>
        </List.Accordion>
      </List.Section>
    </View>
  );
};

export default Team;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
  },
  scrollView: {
    padding: 10,
  },
});
