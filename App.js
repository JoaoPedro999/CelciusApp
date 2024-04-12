import React, { useState } from "react";
import { View, Modal } from "react-native";
import TxtComponent from "./src/Components/txtComponent";
import InputComponent from "./src/Components/InputComponent";
import BtnComponent from "./src/Components/btnComponent";
import styles from "./src/Styles/styles";

export default function App() {
  const [celsius, setCelsius] = useState(""); // Estado para armazenar o valor em Celsius
  const [modalVisible, setModalVisible] = useState(false); // Estado para controlar a visibilidade do modal
  const [fahrenheitValue, setFahrenheit] = useState(""); // Estado para armazenar o valor convertido para Fahrenheit

  // Função para calcular o valor em Fahrenheit a partir do valor em Celsius
  const calcular = () => {
    const fahrenheitValue = (celsius * 9) / 5 + 32; // Fórmula de conversão de Celsius para Fahrenheit
    // Verifica se o campo Celsius está vazio
    if (celsius === "") {
      alert("Preencha todos os campos!"); // Mostra um alerta se o campo estiver vazio
    } else {
      setFahrenheit(fahrenheitValue); // Define o valor convertido para Fahrenheit no estado
      console.log(fahrenheitValue); // Exibe o valor convertido no console
      setModalVisible(true); // Torna o modal visível
    }
  };

  // Função para fechar o modal e limpar o campo Celsius
  const fechar = () => {
    setCelsius(""); // Limpa o campo Celsius
    setModalVisible(false); // Torna o modal invisível
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
            texto={`É Equivalente a ${fahrenheitValue} °F`}
          />
          <BtnComponent onPress={fechar}>
            <TxtComponent styles={styles.btnText} texto={"fechar"} />
          </BtnComponent>
        </View>
      </Modal>
    </View>
  );
}
