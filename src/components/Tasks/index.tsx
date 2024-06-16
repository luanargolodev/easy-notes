import { View, Text, StyleSheet, FlatList } from 'react-native'
import { prismaClient } from '../../screen/Home/services/db'
import { TaskList } from './list';

interface Props {
  filter: boolean;
}

export function Tasks({ filter } : Props) {
  const tasks = prismaClient.task.useFindMany({
    where: {
      completed: filter,
    }
  });

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