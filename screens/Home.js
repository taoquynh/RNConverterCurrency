/**
 * Home
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

function Home() {
  const [money, setMoney] = useState(0);
  const [newMoney, setNewMoney] = useState(0);
  const [unit, setUnit] = useState('usd');

  const formatterUSD = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 1,
  });

  const formatterVND = new Intl.NumberFormat('vi', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 1,
  });

  const calculate = (newUnit) => {
    let value = 0;
    if (newUnit === 'usd') {
      value = money / 23000;
    } else {
      value = 23000 * money;
    }
    setUnit(newUnit);
    setNewMoney(value);
  };

  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.containerView}>
        <Text style={styles.text}>
          Please enter the value of the currency you want to convert.
        </Text>
        <TextInput
          autoFocus
          style={styles.textInput}
          keyboardType={'number-pad'}
          placeholder="100.000.000"
          selectionColor="red"
          onChangeText={setMoney}
        />
        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor: `${
                unit === 'usd' ? 'lightblue' : 'transparent'
              }`,
            },
          ]}
          onPress={() => calculate('usd')}>
          <Text style={styles.textButton}>🇻🇳 VND to USD 🇺🇸</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor: `${
                unit === 'vnd' ? 'lightblue' : 'transparent'
              }`,
            },
          ]}
          onPress={() => calculate('vnd')}>
          <Text style={styles.textButton}>🇺🇸 USD to VND 🇻🇳</Text>
        </TouchableOpacity>
        <Text style={styles.text}>Current currency:</Text>
        <Text style={styles.currencyText}>
          {unit === 'vnd'
            ? `${formatterUSD.format(money)} 🇺🇸`
            : `${formatterVND.format(money)} 🇻🇳`}
        </Text>
        <Text style={styles.text}>Conversion currency:</Text>
        <Text style={styles.currencyText}>
          {unit === 'usd'
            ? `${formatterUSD.format(newMoney)} 🇺🇸`
            : `${formatterVND.format(newMoney)} 🇻🇳`}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
  },
  containerView: {
    flex: 1,
    marginHorizontal: 32,
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginTop: 16,
  },
  textInput: {
    width: '100%',
    marginTop: 16,
    marginBottom: 10,
    height: 60,
    paddingHorizontal: 10,
    fontSize: 24,
    borderWidth: 1,
    borderColor: 'lightblue',
    textAlign: 'center',
    borderRadius: 30,
  },
  button: {
    width: '50%',
    margin: 10,
    padding: 5,
    height: 40,
    borderColor: 'lightblue',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  currencyText: {
    marginTop: 8,
    fontSize: 32,
    fontWeight: '600',
    color: 'green',
  },
});

export default Home;
