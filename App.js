import React, { useState } from "react";
import { View, Modal } from "react-native";
import TxtComponent from "./src/Components/txtComponent";
import InputComponent from "./src/Components/InputComponent";
import BtnComponent from "./src/Components/btnComponent";
import styles from "./src/Styles/styles";

export default function App() {
  const [celsius, setCelsius] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [fahrenheitValue, setFahrenheit] = useState("");

  const calcular = () => {
    const fahrenheitValue = (celsius * 9) / 5 + 32;
    if (celsius === "") {
      alert("Preencha todos os campos!");
    } else {
      setFahrenheit(fahrenheitValue);
      console.log(fahrenheitValue);
      setModalVisible(true);
    }
  };
  const fechar = () => {
    setCelsius("");
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TxtComponent
        styles={styles.titulo}
        texto={"CONVERSÃO CELSIUS - FAHRENHEIT"}
      />
      <TxtComponent styles={styles.texto} texto={"Graus Celsius (°C)"} />
      <InputComponent
        placeholder={"Insira a temperatura"}
        value={celsius}
        onChangeText={setCelsius}
        inputMode="numeric"
      />
      <BtnComponent onPress={calcular}>
        <TxtComponent styles={styles.btnText} texto={"Converter"} />
      </BtnComponent>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalcontainer}>
          <TxtComponent
            styles={styles.btnText}
            texto={`É Equivalente a ${fahrenheitValue} Fahrenheit`}
          />
          <BtnComponent onPress={fechar}>
            <TxtComponent styles={styles.btnText} texto={"fechar"} />
          </BtnComponent>
        </View>
      </Modal>
    </View>
  );
}
