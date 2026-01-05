import React from 'react'

const Login = () => {
  return (
    <>
    <div>
      <h1>Login Form</h1>
      <div>
        <label htmlFor="username"></label>
        <input type="text" name="username" id="username" placeholder='Enter your username' />
      </div>
    </div>
    </>
  )
}

export default Login