import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Navbar } from './src/Navbar';
import { AddTodo } from './src/AddTodo';
import { Todo } from './src/Todo';

export default function App() {
  const [todos, setTodos] = useState([])

  const AddTodos = (title) => {
    setTodos(prev => [...prev, {
      id: Date.now().toString(),
      title
    }])
  }

  const RemoveTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  return (
    <View>
      <Navbar title='Todo App'/>
      <View style={styles.container}>
        <AddTodo onSubmit={AddTodos} />

        <FlatList
          keyExtractor={item => item.id}
          data={todos}
          renderItem={({item}) => <Todo todo={item} onRemove={RemoveTodo}/>}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    height:'90%'
  }
});
