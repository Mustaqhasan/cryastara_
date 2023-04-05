import * as types from "./actiontypes.login";

const intialstate = {
    user: '',
    isAuth: false,
    admin: {},
    isLoading: false,
    isError: false
}

export const loginReducer=(state = intialstate ,action)=>{

switch(action.type){
    case types.isLOADING :
        return {...state, isLoading : true};
    
    case types.isERROR :
        return {...state, isLoading: false, isError: true};
    
    case types.REGISTER_USER :
        return {...state, isLoading: false}
    
    case types.USER_LOGIN :
        return {...state, isLoading: false, isAuth: true, user: action.payload[0].first_name}
    
    case types.ADMIN_LOGIN :
        return {...state, isLoading: false, admin: action.payload[0]}
    
    default: return state
}

}