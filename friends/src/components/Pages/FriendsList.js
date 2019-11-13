import React from 'react'

import {connect} from "react-redux"

function FriendsList(props){
    return(
        null
    )
}

const mapDispatchToProps ={
    fetchFriends
}

export default connect(state => state, mapDispatchToProps)(FriendsList)