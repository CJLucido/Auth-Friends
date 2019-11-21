import {
    LOAD_FRIENDS_SUCCESS,  
    LOAD_FRIENDS_FAILURE,  
    LOADING_FRIENDS,  
    NAME_FRIEND, 
    AGE_FRIEND,  
    EMAIL_FRIEND,  
} from '../actions'

const initialState = {
    friends: [],
    isFetching: false,
    error: null,
    credentials: {
        username: "",
        password: ""
      },
    isLoggedIn: false,
    name: "",
    age: "",
    email: ""
}

export function reducer(state = initialState, action){
    switch(action.type){
        case"BOILER":
            return {
                isFetching: false,
                error: null,
                credentials: {
                    username: "",
                    password: ""
                  },
                isLoggedIn: false
            }
        case LOAD_FRIENDS_SUCCESS:
            return {
                ...state,
                friends: action.payload,
                isFetching: false,
                error: null
            }
        case LOAD_FRIENDS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case LOADING_FRIENDS:
            return {
                ...state,
                isFetching: true,
                error: null
            }
        case NAME_FRIEND:
            return {
                ...state,
                name: action.payload
            }
        case AGE_FRIEND:
            return {
                ...state,
                age: action.payload
            }
        case EMAIL_FRIEND:
            return {
                ...state,
                email: action.payload
            }
        default:
            return state
    }
}