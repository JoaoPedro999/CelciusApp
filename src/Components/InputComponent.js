import React from "react";
import { TextInput } from "react-native";
import styles from "../Styles/styles";

export default function InputComponent({ placeholder }) {
  return <TextInput style={styles.input} placeholder={placeholder} />;
}
