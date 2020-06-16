import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import Counter from './Counter/Counter.js';

const App: () => React$Node = () => {
  const [state1, setState1] = useState(4);
  const [state2, setState2] = useState(5);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <Text>Default Counter</Text>
          <Counter value={state1} onValueChange={setState1} />
        </View>
        <View style={{marginTop: 20}}>
          <Text>Custom Counter</Text>
          <Counter
            value={state2}
            onValueChange={setState2}
            minValue={4}
            maxValue={9}
            activeBackgroundColor="#E6EFFF"
            buttonStyle={{
              backgroundColor: '#008080',
              paddingVertical: 7,
            }}
            buttonnTextStyle={{
              color: 'white',
              fontSize: 20,
              paddingHorizontal: 5,
            }}
            labelStyle={{
              backgroundColor: '#ffffff',
            }}
            labelTextStyle={{
              color: '#008080',
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 40,
  },
});

export default App;
