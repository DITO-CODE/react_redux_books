export function selectBook(book){
    
    //SelectBook es un ActionCreator, eso necesita retornar una accion
    // un objeto con un tipo propiedad
    return{
        type: 'BOOK_SELECTED',
        payload: book
    };
}