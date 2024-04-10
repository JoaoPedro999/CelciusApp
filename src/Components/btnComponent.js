import { TouchableOpacity } from "react-native";
import styles from "../Styles/styles";

export default function BtnComponent({ onPress, children }) {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
}
