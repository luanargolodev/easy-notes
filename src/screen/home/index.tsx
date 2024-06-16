import { SafeAreaView, StatusBar, StyleSheet, Text } from "react-native"

export function Home() {
  return (
    <>
      <StatusBar backgroundColor="#0f172a" barStyle="light-content" />

      <SafeAreaView style={styles.container}>
        <Text>
          Sujeito Programador
        </Text>
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
  }
})