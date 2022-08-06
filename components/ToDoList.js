import react,{Component} from "react";
import { FlatList, View, Text } from "react-native";
import { Button } from "react-native-web";
import tailwind from "twrnc";
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
            <View style={tailwind.style(" bg-black flex-row  flex m-5 rounded-xl justify-around content-between")}> 
                <Text style={tailwind.style(" text-black-500 text-white flex")}>        {/* id,          descrição */}
                    {this.formatListNumber(index)} - {item.text}
                </Text>
                <Button  title="delete" style={tailwind.style("bg-white rounded-xl")} onPress={() => this.props.onRemove(item)}/>
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
            <View>
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

