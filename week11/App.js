import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Card, Button} from 'react-native-elements';

export default function App() {
  return (
    <View style={styles.container}>
      <Card>
        <Card.Title>Arianna Bounds</Card.Title>
        <Text>Fettuccine Alfreo</Text>
        <Card.Divider/>
        <Text>Steak Fajitas</Text>
        <Button title="Submit"/>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
