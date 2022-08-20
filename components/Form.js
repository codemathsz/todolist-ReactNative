import react,{Component} from "react";
import { Button, TextInput, View } from "react-native";
import tailwind from "twrnc";
class Form extends Component{

    static defaultProps ={
        onAdd: () => {}
    }

    state = {

        text: ''
    }

    // verficicar se existe algo escrito
    add = () =>{
        const {state} = this
        if (state.text) {
            this.props.onAdd(state.text)
            this.handlerChanger('')
        }
    }

    //  mudar estado do text
    handlerChanger = (text) =>{
        this.setState({text})
    }
    render(){

        return(
            <View style={tailwind.style("  flex-row  flex m-5 rounded-xl justify-around content-between  ")}>
                <TextInput 
                style={tailwind.style("bg-zinc-800 text-white outline-none w-70 p-2 rounded-l uppercase font-bold")}
                    value={this.state.text}
                    onChangeText={this.handlerChanger}
                />
                <Button
                    title="Adicionar"
                    color="#8b5cf6"
                    onPress={this.add}
                />
            </View>
        )
    }
}

export default Form