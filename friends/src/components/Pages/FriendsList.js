import React from 'react'

import {connect} from "react-redux"

import {fetchFriends} from "../../actions"

function FriendsList(props){

    fetchFriends()
    return(
        null
    )
}

const mapDispatchToProps ={
    fetchFriends
}

export default connect(state => state, mapDispatchToProps)(FriendsList)