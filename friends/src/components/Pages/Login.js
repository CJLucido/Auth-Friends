import React, {useState} from 'react'

import {connect} from 'react-redux'

import {login} from '../../actions'

function Login(props){
    const [userInput, setUserInput] = useState({'username': "", "password": ""})

    const handleChange = type => e => {
       setUserInput({ ...userInput, type: userInput[type] = e.target.value })
    }

    const handleLogin = (e) => {
        e.preventDefault()
        let captureEntries = {
            username: userInput['username'],
            password: userInput['password']
        }
        props.login(captureEntries, props)
    
   
    }


    return(
        <div>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    name= "username"
                    value= {userInput['username']}
                    onChange={handleChange('username')}
                />
                <input
                    type="password"
                    name="password"
                    value= {userInput['password']}
                    onChange={handleChange('password')}
                />
                <button>Login!</button>
            </form>
        
        
        </div>
    )
}


const mapDispatchToProps ={
    login
}

export default connect(state => state, mapDispatchToProps)(Login);