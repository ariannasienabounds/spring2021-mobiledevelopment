import 'react-native-gesture-handler';
import React, {useState, setState} from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-elements';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

function HomeScreen(props){
  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>
        Weather Tracker
      </Text>
      <Button
        title="Sunny Day"
        onPress={() => props.navigation.navigate('Sun')}
      />
      <Button
        title="Rainy Day"
        onPress={() => props.navigation.navigate('Rain')}
      />
    </View>
  );
}

function SunScreen (props){
  const [days, setDays] = useState(0);

  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>
        Sunny Days: {days}
      </Text>
      <Button
        title="Add Sunny Day"
        onPress={() => setDays(days + 1)}
      />
      <Button
        title="Reset Counter"
        onPress={() => setDays(0)}
      />
      <Button
        title="Back to Home"
        onPress={() => props.navigation.navigate("Home")}
      />
    </View>
  );
}

class RainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0
    };
  }

  render() {
    return(
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>
          Rainy Days
        </Text>
        <Button
          title="Add Rainy Day"
          onPress={() => this.setState({days: this.state.days + 1})}
        />
        <Button
          title="Reset Counter"
          onPress={() => this.setState({days: 0})}
        />
        <Button
          title="Back to Home"
          onPress={() => this.props.navigation.navigate("Home")}
        />
      </View>
    );
  }
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Sun" component={SunScreen}/>
        <Stack.Screen name="Rain" component={RainScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
