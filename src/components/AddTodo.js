import React, { useState } from "react";
import { View, StyleSheet, TextInput, Alert, Keyboard } from "react-native";
import { THEME } from "../theme";
import { AntDesign } from "@expo/vector-icons";

export const AddTodo = (props) => {
  const [value, setValue] = useState("");

  const { onSubmit } = props;

  const pressHandler = () => {
    if (value.trim()) {  // trim() - убирает все пробелы
      onSubmit(value);
      setValue("");
      Keyboard.dismiss(); // закрывает клавиатуру при клике
    } else {
      Alert.alert("Название дела не может быть пустым!");
    }
  };

  return (
    <View style={styles.block}>
      <TextInput
        onChangeText={setValue}
        value={value}
        placeholder="Введите название дела..."
        autoCorrect={false}
        style={styles.input}
        autoCapitalize="none"
        // keyboardType='number-pad'
      />
      <AntDesign.Button onPress={pressHandler} name="pluscircleo">
        Добавить
      </AntDesign.Button>
      {/* <Button title="Добавить" onPress={pressHandler} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  input: {
    width: "60%",
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: THEME.MAIN_COLOR,
    padding: 10,
  },
});
