const url = ' http://localhost:3002/api/react-native'

export const ApiService ={

    /*  metodo get */
    get(endpoint){
        return fetch(`${url}${endpoint}`)
        .then(Response => Response.json())
    },
    /*  metodo post */
    post(endpoint, data){
        return fetch(`${url}${endpoint}`,{
            method: 'POST',
            body: JSON.stringify(data)/*  converter os dados em string */
        })
    },
    /*  metodo delete */
    delete(endpoint, id){
        return fetch(`${url}${endpoint}?id=${id}`,{
            method:'DELETE',
            
        }).then(Response => Response.json())
    }
}