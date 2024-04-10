import { View } from "react-native";
import TxtComponent from "./src/Components/txtComponent";
import InputComponent from "./src/Components/InputComponent";
import BtnComponent from "./src/Components/btnComponent";
import styles from "./src/Styles/styles";

export default function App() {
  const [celcius, setCelcius] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [farenheit, setFarenheit] = useState("");

  const calcular = () => {
    const celcius = parseFloat(celcius);
    const farenheit = celsius * (9 / 5) + 32;
    setFarenheit(Farenheit);
    setModalVisible(true);
  };
  return (
    <View style={styles.container}>
      <TxtComponent texto={"CONVERSÃO CELCIUS - FARENHEIT"} />

      <TxtComponent texto={"Graus Celcius (°C)"} />
      <InputComponent placeholder={"Insira a temperatura"} />
      <BtnComponent>
        <TxtComponent texto={"Converter"} />
      </BtnComponent>
    </View>
  );
}
