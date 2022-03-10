import React , {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const SignUp = (props) => {
  const [credential,setCredential] = useState({name : '', email : '', password : '', cpassword : ""})
  let navigate = useNavigate();
  const handleSubmit = async (e)=> {
    e.preventDefault()
    let {name,email,password} = credential
    const response = await fetch("http://localhost:5000/api/auth/createuser",{
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json',
      },
      body : JSON.stringify({name,email,password})
    })
    const json = await response.json()
    console.log(json);
    if (json.success){
      // Redirect to home
      localStorage.setItem('token',json.authtoken)
      props.showAlert("Account Created Successfully", "success")
      navigate('/')
    }
    else {
      props.showAlert("invalid credentials" , "danger")
    }
  }
  const onChange = (e)=> {
    setCredential({...credential, [e.target.name]:e.target.value})
  }
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
    <div className="mb-3">
      <label htmlFor="name" className="form-label">Name</label>
      <input onChange={onChange} type="text" className="form-control" onChange={onChange} id="name" name='name' value={credential.name} aria-describedby="emailHelp" />
    </div>
    <div className="mb-3">
      <label htmlFor="email" className="form-label">Email address</label>
      <input onChange={onChange} type="email" className="form-control" onChange={onChange} id="email" name='email' value={credential.email} aria-describedby="emailHelp" />
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <label htmlFor="password" className="form-label">Password</label>
      <input onChange={onChange} type="password" className="form-control" onChange={onChange} id="password" name="password" value={credential.password} minLength={5} required />
    </div>
    <div className="mb-3">
      <label htmlFor="cpassword" className="form-label">Confirm Password</label>
      <input onChange={onChange} type="password" className="form-control" onChange={onChange} id="cpassword" name="cpassword" value={credential.cpassword} minLength={5} required />
    </div>
    <button type="submit" className="btn btn-primary">Sign Up</button>
  </form>
    </div>
  )
}

export default SignUp
