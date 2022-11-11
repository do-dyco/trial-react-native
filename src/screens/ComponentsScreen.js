//import
import React from "react";
import { Text, StyleSheet, View } from "react-native";

//jsx
const ComponentsScreen = () => {
  const name = <Text>James</Text>;

  return (
    <View>
      <Text style={styles.textStyle}>Getting started with React Native</Text>
      <Text style={styles.subHeaderStyle}>My name is {name}</Text>
    </View>
  );
};

//js
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  subHeaderStyle: {
    fontSize: 20
  }
});


//export
export default ComponentsScreen;
