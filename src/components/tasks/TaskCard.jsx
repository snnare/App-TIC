import React from 'react';
import { View, Text, Button } from 'react-native';
import { useTasks } from '../../context/tasksContext';

export function TaskCard({ task }) {
  const { deleteTask } = useTasks();

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>{task.title}</Text>
        <View style={styles.buttonsContainer}>
          <Button title="Delete" onPress={() => deleteTask(task._id)} />
          {/* Agregar navegación para editar */}
          {/* <Button title="Edit" onPress={() => navigation.navigate('EditTask', { taskId: task._id })} /> */}
        </View>
      </View>
      <Text style={styles.description}>{task.description}</Text>
      {/* Formatear la fecha */}
      <Text>{task.date && new Date(task.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</Text>
    </View>
  );
}

const styles = {
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  description: {
    marginBottom: 10,
  },
};
