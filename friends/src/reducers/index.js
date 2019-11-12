

const initialState = {
    isFetching: false,
    error: null,
    credentials: {
        username: "",
        password: ""
      },
    isLoggedIn: false
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
        default:
            return state
    }
}