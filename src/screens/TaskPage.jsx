import React, { useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useTasks } from '../context/tasksContext';
import { TaskCard } from '../components/tasks/TaskCard';
import { ImFileEmpty } from 'react-icons/im';

export function TasksPage() {
  const { tasks, getTasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <View style={styles.container}>
      {tasks.length === 0 ? (
        <View style={styles.emptyContainer}>
          <ImFileEmpty style={styles.emptyIcon} />
          <Text style={styles.emptyText}>No tasks yet, please add a new task</Text>
        </View>
      ) : (
        <FlatList
          data={tasks}
          renderItem={({ item }) => <TaskCard task={item} />}
          keyExtractor={(item) => item._id}
          numColumns={3}
          contentContainerStyle={styles.taskList}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  emptyIcon: {
    fontSize: 60,
    color: '#ccc',
    marginBottom: 10,
  },
  emptyText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666',
    textAlign: 'center',
  },
  taskList: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
});
