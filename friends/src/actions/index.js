import axios from "axios"
import axiosWithAuth from "../axios/axiosWithAuth"

export const LOAD_FRIENDS_SUCCESS = "LOAD_FRIENDS_SUCCESS"

export const LOAD_FRIENDS_FAILURE = "LOAD_FRIENDS_FAILURE"

export const LOADING_FRIENDS = "LOADING_FRIENDS"

export const NAME_FRIEND = "NAME_FRIEND"

export const AGE_FRIEND = "AGE_FRIEND"

export const EMAIL_FRIEND = "EMAIL_FRIEND"

export const MAKE_FRIEND = "MAKE_FRIEND"

export const LOGIN_SUCCESS = "LOGIN_SUCCESS"

//////////////////////////////////////

export const friendSuccess = data => ({type: LOAD_FRIENDS_SUCCESS, payload: data})
export const friendFailure = data => ({type: LOAD_FRIENDS_FAILURE, payload: data})
export const friendLoading = () => ({type: LOADING_FRIENDS})
export const loginSuccess = () => ({type: LOGIN_SUCCESS})
//

export const friendNaming = data => ({type:NAME_FRIEND, payload: data})
export const friendAging = data => ({type: AGE_FRIEND, payload: data})
export const friendEmailing = data => ({type: EMAIL_FRIEND, payload: data})

//

export const friendMaking = data => ({type:MAKE_FRIEND, payload: data})

const redirect = data => {
    return data.history.push("/friends")
}
/////////////////////////

export const login = (payload, data) => dispatch => {
    dispatch(friendLoading())
    axios
        .post('http://localhost:5000/api/login', payload)
        .then(res => {
            console.log("this is res.data.payload", res.data.payload);
            localStorage.setItem("token", res.data.payload);
            loginSuccess()
            redirect(data)
        })
        .catch(err => {
            console.log("this is login error", err)
        })
}

export const fetchFriends = () => dispatch => {
    //dispatch(friendLoading()) this makes the response load twice
    const authAxios = axiosWithAuth();
    authAxios
        .get('http://localhost:5000/api/friends', {
            headers: {
                Authorization: localStorage.getItem("token"),
            }
        })
        .then(res => {
            console.log("this is fetch res.data", res.data);
           dispatch(friendSuccess(res.data))
        })
        .catch(err => {
            console.log("this is fetching error", err)
        })
   
} 

export const postFriend = (nameFriend, ageFriend, emailFriend) => dispatch => {
    const authAxios = axiosWithAuth();
    authAxios
        .post('http://localhost:5000/api/friends', { 
            name: nameFriend,
            age: ageFriend,
            email: emailFriend
        }
       
        )
        .then(res => {
            console.log("this is post friend res", res)
        })
        .catch(err => {
            console.log("this is posting error", err)
        })
}


//

export const updateName = name => dispatch =>{
    dispatch(friendNaming(name))
}

export const updateAge = age => dispatch => {
    dispatch(friendAging(age))
}

export const updateEmail = email => dispatch => {
    dispatch(friendEmailing(email))
}