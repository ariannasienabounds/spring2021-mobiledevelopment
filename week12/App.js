import React, {useState} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import {Card} from 'react-native-elements';

export default function App() {
  const [color, setColor] = useState();

  const [votes, setVotes] = useState(false);

  function increaseRedVote(value){
    setColor('red');
    setVotes(true);
  };

  function increaseOrangeVote(value){
    setColor('orange');
    setVotes(true);
  };

  function increaseYellowVote(value){
    setColor('yellow');
    setVotes(true);
  };

  function increaseGreenVote(value){
    setColor('green');
    setVotes(true);
  };

  function increaseBlueVote(value){
    setColor('blue');
    setVotes(true);
  };

  function increasePurpleVote(value){
    setColor('purple');
    setVotes(true);
  };

  function increasePinkVote(value){
    setColor('pink');
    setVotes(true);
  };

  function increaseBlackVote(value){
    setColor('black');
    setVotes(true);
  };

  function increaseWhiteVote(value){
    setColor('white');
    setVotes(true);
  };

  return (
    <View style={styles.container}>
      { votes ? (
        <View style={styles.container}>
          <Text>You voted for {color}!</Text>
        </View>
      ) : (
        <View>
        <Text style={styles.headerText}>Vote for your favorite color!</Text>
      
        <Card>
          <Button title="Red" onPress={(value) => (increaseRedVote('red'))}/>
        </Card>
        <Card.Divider/>

        <Card>
          <Button title="Orange" onPress={(value) => (increaseOrangeVote('orange'))}/>
        </Card>
        <Card.Divider/>

        <Card>
          <Button title="Yellow" onPress={(value) => (increaseYellowVote('yellow'))}/>
        </Card>
        <Card.Divider/>

        <Card>
          <Button title="Green" onPress={(value) => (increaseGreenVote('green'))}/>
        </Card>
        <Card.Divider/>

        <Card>
          <Button title="Blue" onPress={(value) => (increaseBlueVote('blue'))}/>
        </Card>
        <Card.Divider/>

        <Card>
          <Button title="Purple" onPress={(value) => (increasePurpleVote('purple'))}/>
        </Card>
        <Card.Divider/>

        <Card>
          <Button title="Pink" onPress={(value) => (increasePinkVote('pink'))}/>
        </Card>
        <Card.Divider/>

        <Card>
          <Button title="Black" onPress={(value) => (increaseBlackVote('black'))}/>
        </Card>
        <Card.Divider/>

        <Card>
          <Button title="White" onPress={(value) => (increaseWhiteVote('white'))}/>
        </Card>
        <Card.Divider/>
        </View>
        )
      }
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
  }
});
