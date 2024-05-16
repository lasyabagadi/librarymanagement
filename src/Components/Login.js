import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <>
    
    <div className="card one mx-auto">
        <div className="card-body">
            <center>
            <h3 className="card-title two">Library management System</h3>
            </center>
            <br/>
            <center>
            <h3>Enter your login credentials</h3>
            </center>
            <br/>
            <label for="username" className='four'>Username:</label><br/>
            <br/>
            <input type="text" placeholder='Enter your Username' className='three'/>
            <br/>
            <br/>
            <label for="password"className='four'>Password:</label><br/>
            <br/>
            <input type="password" placeholder='Enter your Password' className='three'/>
            <br/>
            <br/>
            <br/>
            <input type = "submit" className='five'/>
            <br/>
            <br/>
            <br/>
            
            <center>
                <h5>Not a member? <Link to="/" className='six'>Signup</Link></h5>
            </center>
        </div>
    </div>

    </>
  )
}
