import {Component} from "react";
import {  View } from "react-native";
import tailwind from "twrnc";

class Title extends Component{

    render(){

        return(
            <View style={tailwind.style("h-auto flex aling-center justify-center text-center text-6xl p-3.5 ")}>
                ToDoList
            </View>
        )
    }
}

export default Title