import { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native'
import { Ionicons } from "@expo/vector-icons";

export default function FormTask() {
  const [task, setTask] = useState("");

  function handleNewTask() {
    console.log("TESTE", task)
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Digite sua próxima tarefa"
        value={task}
        onChangeText={setTask}
        style={styles.input}
      />

      <Pressable style={styles.button} onPress={handleNewTask}>
        <Text style={styles.buttonText}>Cadastrar</Text>
        <Ionicons name="add" size={24} color="#fff" />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#f1f5f9",
    padding: 8,
    borderRadius: 4,
    marginTop: 8,
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#22c55e",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    padding: 8,
    gap: 8,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "500",
  }
})