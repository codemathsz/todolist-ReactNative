import react,{Component} from "react";
import { FlatList, View, Text } from "react-native";
import { Button } from "react-native";
import tailwind from "twrnc";
import { StyleSheet } from "react-native";
class ToDoList extends Component{

    // lista estatica para teste
    static defaultProps = {
        list: [],
        onRemove: () =>{

        }
    }

    // função que controla estrutura da lista
    handleRow = ({item, index}) =>{// index com a posição 0

        return(
            <View style={tailwind.style("w-80 h-auto bg-violet-500 flex-row  flex items-center  rounded-md justify-around text-left  mb-1 ")}> 
                <Text style={tailwind.style(" w-4/5 text-white font-bold text-lg flex-wrap ")}>        {/* id,          descrição */}
                    {this.formatListNumber(index)} - {item.text}
                </Text>
                <Button 
                    color='#8b5cf6'
                    title="delete"  
                    onPress={() => this.props.onRemove(item)}
                 />
            </View>
        )
    }
    
    //metodo para formatar id para vim com dois digitos
    formatListNumber(number){

        const digits = 2;// numero de digitos
        return('0'.repeat(digits) + (number + 1) ).slice(-digits)//slice para recortar a quantidade de casas que queremos, da direita pra esquerda

    }
 
    render(){
        const {props} = this
        const keyExtractor = item => item.id;// retorna o item e o id da lista
        return(
            <View style={tailwind.style("bg-zinc-800 w-full h-full flex justify-center items-center pt-10 rounded-t-3xl ")}>
                <FlatList 
                    data={props.list}
                    keyExtractor={keyExtractor}
                    renderItem={this.handleRow}
                />
            </View>
        )
    }
}

export default ToDoList

