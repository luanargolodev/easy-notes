import { View, Text, StyleSheet, FlatList } from 'react-native'
import { prismaClient } from '../../screen/Home/services/db'
import { TaskList } from './list';

export function Tasks() {
  const tasks = prismaClient.task.useFindMany();

  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => <TaskList data={item} />}
    />
  )
}

const styles = StyleSheet.create({
  container: {

  }
})