import { StyleSheet, Text, View } from 'react-native';
import ToDoList from './components/ToDoList';
import tw from 'twrnc'
import Form from './components/Form';

export default function App() {

  const state = {
    list: [
      {
          id:'1', text: 'senai Ricardo Lenner'
      },
      {
          id:'2', text: 'Rua direita, 956'
      }
  ],
  }
  return (
    <View>
      <ToDoList  list={state.list}/> 
      <Form/>
    </View>
  );
}


