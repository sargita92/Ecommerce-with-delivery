//Como sera o state inicial
const INITIAL_STATE = {
    shopping: '',
    payment: '',
};

//O que o reducer vai fazer quando mandar setar um usuário
// Execução do comando para alterar o state 
export default function info(state = INITIAL_STATE, action){

    if( action.type === 'SET_SHOPPING_INFO' ){
        return{
            ...state,
            shopping: action.data,
        } 
    }else if( action.type === 'SET_PAYMENT_INFO' ){
        return{
            ...state,
            payment: action.data,
        } 
    }

    return state;
}