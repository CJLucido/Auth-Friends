import React from 'react'

import {connect} from 'react-redux'

import {postFriend, updateName, updateAge, updateEmail} from '../../actions'

function FriendForm(props){

    const handleNewName = e => {
        props.updateName(e.target.value)
    }

    const handleNewAge = e => {
        props.updateAge(e.target.value)
    }

    const handleNewEmail = e => {
        props.updateEmail(e.target.value)
    }

    return (
        <form>
        <label name='name' >Name</label>
        <input type="text" name='name' value={props.name} onChange={handleNewName}/>

        <label name='age'>Age</label>
        <input type="text" name='age' value={props.age} onChange={handleNewAge}/>
    
        <label name='email'>Email</label>
        <input type="text" name='email' value={props.email} onChange={handleNewEmail}/>

        <button type="button" onClick={()=> props.postFriend(props.name, props.age, props.email)}>Make a Friend!</button>
        
        
        </form>
    )


}

const mapDispatchToProps ={
    updateName,
    updateAge,
    updateEmail, 
    postFriend
}


export default connect(state => state, mapDispatchToProps)(FriendForm)