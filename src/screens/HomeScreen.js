import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {

  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        onPress={() => navigation.navigate('Components')}
        title="Components"
      />

      <Button onPress={() => navigation.navigate('List')}
        title="List"
      />

      <Button onPress={() => navigation.navigate('Image')}
        title="Image"
      />

      <Button onPress={() => navigation.navigate('Counter')}
        title="Counter"
      />
      <Button onPress={() => navigation.navigate('Color')}
        title="Color"
      />
      <Button onPress={() => navigation.navigate('Square')}
        title="Square"
      />

      {/* <TouchableOpacity
        onPress={() => props.navigation.navigate('List')}>
        <Text>List</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
