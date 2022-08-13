import { ApiService } from "./ApiService";

const endpoint = 'todolist'

export const ToDoService ={
    
    list(){
        return(
            ApiService.get(endpoint)
        )
    },
    create(item){
        return(
            ApiService.post(endpoint,item)
        )
    },
    remove(id){
        return(
            ApiService.delete(endpoint,id)
        )
    }
}