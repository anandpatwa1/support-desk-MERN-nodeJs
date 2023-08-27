import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../store/userAuth/authSlice'

function Login() {
  const dispatch = useDispatch()
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const { email, password } = form

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(login(form))
  }

  return (
    <>
      <section className='heading'>
        <h1>
          {/* <FaSignInAlt /> */}
          Login
        </h1>
        <p>Please log in to get support</p>
      </section>

      <section className='form'>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <input
              // type='email'
              className='form-control'
              id='email'
              name='email'
              value={email}
              onChange={handleChange}
              placeholder='Enter your email'
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              value={password}
              onChange={handleChange}
              placeholder='Enter password'
              required
            />
          </div>
          <div className='form-group'>
            <button className='btn btn-block'>Submit</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login
