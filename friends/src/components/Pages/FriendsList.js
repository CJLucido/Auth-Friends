import React from 'react'

import {connect} from "react-redux"

import {fetchFriends} from "../../actions"



function FriendsList(props){
    
const handleClick = e => {
     props.fetchFriends()
    }

    let friendArray = []
    friendArray = props.friends

    console.log("this is friends", props.friends)
    console.log("this is friends array", friendArray)
    return(
        <div>
            <button onClick={handleClick}>FriendsList</button>
            {friendArray.map(friend => 
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

// friendlies.map(friend => {
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