import React, { useState } from 'react'
import '../../App.css';


const ResetPassword = () => {
    
    const[email, setEmail] = useState('');
    const handleReset = () => {
    
    }
  
    return (
    <div className='login-container'>
        <form className='login-form'>
        <h2 style={{textAlign:"center"}}>Reset Password</h2>
            <br/>
        <input 
        type="text"
        placeholder='Enter your registered email'
        value={email}
        />
        <button style={{margin:"1px"}} type="submit" onClick={handleReset}>Submit</button>
        </form>
    </div>
  )
}

export default ResetPassword;