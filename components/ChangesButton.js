import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const ChangesButton = ({ style, performAction, title }) => {
  return (
    <TouchableOpacity
      style={style}
      onPress={performAction}
    >
      <Text style={styles.buttonText}> {title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: "#FFFFFF"
  }
});

export default ChangesButton;