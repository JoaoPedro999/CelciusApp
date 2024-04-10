import { TextInput } from "react-native";
import styles from "../Styles/styles";

export default function InputComponent({
  placeholder,
  value,
  onChangeText,
  inputMode,
}) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      inputMode={inputMode}
    />
  );
}
