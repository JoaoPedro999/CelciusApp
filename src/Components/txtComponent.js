import React from "react";
import { Text, View } from "react-native";

export default function TxtComponent({ texto, styles }) {
  return (
    <View>
      <Text style={styles}>{texto}</Text>
    </View>
  );
}
