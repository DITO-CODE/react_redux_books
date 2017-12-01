//state argumento no es el state de la aplicaion
//solo el state el reducer es el responsable
export default function(state=null,action){
    switch(action.type){
        case 'BOOK_SELECTED':
            return action.payload;
    }
    
    return state
}