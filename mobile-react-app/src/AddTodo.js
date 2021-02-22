import React, {useState} from 'react'
import {View, StyleSheet, TextInput, Button, Alert} from 'react-native'

export const AddTodo = ({onSubmit}) => {
  const [value, setValue] = useState('')

  const presHandler = () => {
    if(value.trim()){
      onSubmit(value)
      setValue('')
    }else{
      Alert.alert('Пустое поле')
    }
  }

  return (
    <View style={styles.block}>
      <TextInput 
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder='Название дела'
        autoCorrect={false}
      />
      <Button title='Добавить' onPress={presHandler}/>
    </View>)
};

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15
  },
  input: {
    width: '70%',
    padding: 10,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#1E90FF'
  }
});