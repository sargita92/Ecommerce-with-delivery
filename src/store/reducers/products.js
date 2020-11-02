//Como sera o state inicial
const INITIAL_STATE = {
    store: [],
    favorites: [],
    cart: [],
};

//O que o reducer vai fazer quando mandar setar um usuário
// Execução do comando para alterar o state 
export default function products(state = INITIAL_STATE, action){

    if( action.type === 'SET_STORE' ){
        return{
            ...state,
            store: action.data,
        } 
    }else if( action.type === 'SET_FAVORITES' ){
        return{
            ...state,
            favorites: action.data,
        } 
    }else if( action.type === 'SET_CART' ){
        return{
            ...state,
            cart: action.data,
        } 
    }

    return state;
}