import { View } from 'react-native';
import Form from './components/Form';
/* import tw from 'twrnc' */
import {ToDoService} from './Services/ToDoService'
import ToDoList from './components/ToDoList';
import React,{Component} from 'react';

class App extends Component{

  state = {
    list: []
  }
  /*  metodo que recebe a lista */
  async componentDidMount(){

    const list = await ToDoService.list()/*  await, fica aguardando receber algo */
    this.setState(list)/*  state para ir atualizando a lista */
  }

  /*  metodo add da lista */
  add =  async (text) =>{/*   =>, arrow function, a arrow mantem o escopo da função, não deixa ser alterado*/
    const newItem = await ToDoService.create({text})
    const list = [...this.state.list, newItem]
    this.setState({list})
  }
  /*  metodo remove da lista */
  remove = async (item) =>{
    await ToDoService.remove(item.id)
    const list = this.state.list.filter(itemList => itemList.id !== item.id)
    this.setState(list)
  }
  render(){
    const {state} = this
    return (
      <View>
        <ToDoList list={state.list} onRemove={this.remove}/>  
        <Form
          onAdd={this.add}/*  submeter formulario */
        />
      </View>
    );
  }
}

export default App

