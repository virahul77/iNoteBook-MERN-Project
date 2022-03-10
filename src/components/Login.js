import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'

const Login = (props) => {
  const [credential,setCredential] = useState({email : '', password : ''})
  let navigate = useNavigate();
  const handleSubmit = async (e)=> {
    e.preventDefault()
    const response = await fetch("http://localhost:5000/api/auth/login",{
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json',
      },
      body : JSON.stringify({email : credential.email ,password : credential.password})
    })
    const json = await response.json()
    console.log(json);
    if(json.success){
      // Redirect to home
      localStorage.setItem('token',json.authtoken)
      props.showAlert("Logged In Successfully", "success")
      navigate('/')
    }
    else props.showAlert("Invalid Credentials", "dander")
  }
  const onChange = (e)=> {
    setCredential({...credential, [e.target.name]:e.target.value})
  }
  return (
    <div className="container">
    <form onSubmit={handleSubmit}>
      <h2>Login to Continue to iNoteBook</h2>
    <div className="mb-3">
      <label htmlFor="email" className="form-label">Email address</label>
      <input onChange={onChange} type="email" className="form-control" id="email" name='email' value={credential.email} aria-describedby="emailHelp" />
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <label htmlFor="password" className="form-label">Password</label>
      <input onChange={onChange} type="password" className="form-control" id="password" name="password" value={credential.password}/>
    </div>
    <button type="submit" className="btn btn-primary">Log In</button>
  </form>
  <h3 className='my-3'>New to iNoteBook Please <Link className='btn btn-outline-success' to="/signup">SignUp Here</Link> </h3>
  </div>
  )
}

export default Login
