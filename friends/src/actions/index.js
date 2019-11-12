import axios from "axios"

export const LOAD_FRIENDS_SUCCESS = "LOAD_FRIENDS_SUCCESS"

export const LOAD_FRIENDS_FAILURE = "LOAD_FRIENDS_FAILURE"

export const LOADING_FRIENDS = "LOADING_FRIENDS"

export const NAME_FRIEND = "NAME_FRIEND"

export const AGE_FRIEND = "AGE_FRIEND"

export const EMAIL_FRIEND = "EMAIL_FRIEND"

//////////////////////////////////////

export const friendSuccess = data => ({type: LOAD_FRIENDS_SUCCESS, payload: data})
export const friendFailure = data => ({type: LOAD_FRIENDS_FAILURE, payload: data})
export const friendLoading = () => ({type: LOADING_FRIENDS})
//
export const friendNaming = data => ({type:NAME_FRIEND, payload: data})
export const friendAging = data => ({type: AGE_FRIEND, payload: data})
export const friendEmailing = data => ({type: EMAIL_FRIEND, payload: data})
/////////////////////////

export const login = (payload) => dispatch => {
    dispatch(friendLoading())
    axios
        .post('http://localhost:5000/api/login', payload)
        .then(res => {
            console.log("this is res.data.payload", res.data.payload);
            localStorage.setItem("token", res.data.payload);
            friendSuccess()
        })
        .catch(err => {
            console.log("this is login error", err)
        })
}

export const fetchFriends = () => dispatch => {
    dispatch(friendLoading())
    axios
        .get('http://localhost:5000/api/login')
        .then(res => {
            console.log("this is res", res)
        })
        .catch(err => {
            console.log("this is fetching error", err)
        })
} 

export const postFriend = (nameFriend, ageFriend, emailFriend) => dispatch => {
    dispatch(friendLoading())
    axios
        .post('http://localhost:5000/api/login', 
        { 
            name: nameFriend,
            age: ageFriend,
            email: emailFriend}
        )
        .then(res => {
            console.log("this is res", res)
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