import { SafeAreaView, StatusBar, StyleSheet, Text } from "react-native"
import { FormTask } from "../../components/Form"
import { Tasks } from "../../components/Tasks"

export function Home() {
  return (
    <>
      <StatusBar backgroundColor="#0f172a" barStyle="light-content" />

      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Easy Notes</Text>
        <Text style={styles.text}>Crie e gerencie suas tarefas</Text>

        <FormTask />

        <Tasks />
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    paddingLeft: 14,
    paddingRight: 14,
    paddingTop: 14,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  text: {
    color: "#e4e4e7",
  }
})