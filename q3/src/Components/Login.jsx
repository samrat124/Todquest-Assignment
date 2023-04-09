import React,{useState} from 'react'
import './login.css'
import {Link} from 'react-router-dom'

const Login = () => {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(inputs);
      alert('Login Successful');
    }
  return (
    <div className='section'>
        <div className='imagebox'></div>
        <div className='loginContent'>
            
            <form className='loginform'  >
            <div className='headDiv'><h3 className='loginhead'>ALREADY  MEMBERS</h3>
            <Link className='helpLink'  to='/help'>Need help?</Link>
            </div>
             <input type="text" name='username' onChange={handleChange} placeholder='Enter your username'/>
             <br/>
             
             <input type="password" name='password' onChange={handleChange} placeholder='Enter your password' />
             <br/>
              
             <button className='loginbtn' onClick={handleSubmit} >LogIn</button>
            </form>
            <h3 style={{color:'white'}}>Don't have an account yet?</h3>
            <Link  style={{padding:'0px',margin:'0px',textDecoration:'none',color:'black',fontSize:'20px'}} to='/signup'>Create an account</Link>
        </div>
    </div>
  )
}

export default Login