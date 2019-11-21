import React from 'react'

import {connect} from "react-redux"

import {fetchFriends} from "../../actions"

import FriendForm from "../Molecules/FriendForm"

function FriendsList(props){
    
const handleClick = e => {
     props.fetchFriends()
    }

    return(
        <div>
            <button onClick={handleClick}>FriendsList</button>
            <FriendForm/>
            {props.friends.map(friend => 
               <div key={friend.id} style={{border: "3px solid white"}}>
                    <p>{friend.name}</p>
                    <p>{friend.age}</p>
                    <p>{friend.email}</p>
                </div>
            )}
        </div>
    )
}

const mapDispatchToProps ={
    fetchFriends
}

export default connect(state => state, mapDispatchToProps)(FriendsList)

// friendlies.map(friend => { DONT WRAP IN CURLY BRACES!!!!
//     <div>
//         <p>{friend.name}</p>
//         <p>{friend.age}</p>
//         <p>{friend.email}</p>
//     </div>
// })

// {props.friends.map(friend => {
//     <div>
//         <p>{friend.name}</p>
//         <p>{friend.age}</p>
//         <p>{friend.email}</p>
//     </div>
// }) }

// {props.friends.map(friend => {
//     <div>
//         <p>{friend.name}</p>
//         <p>{friend.age}</p>
//         <p>{friend.email}</p>
//     </div>
// }) }