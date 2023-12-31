import { useState } from "react"
import { useDispatch } from "react-redux"
import { register } from "../store/userAuth/authSlice"
import { toast } from "react-toastify"

function Register() {

  const dispatch = useDispatch()

  const [form, setForm] = useState({
    name: "",
    email: '',
    password: '',
    password2: ''
  })
  const { name, email, password, password2 } = form


  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })

  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (password !== password2) {
      toast.error('password are not same')
          } else {
      dispatch(register(form))
    }
  }
  const isloading = false
  if (isloading) {
    return (
      <>loding</>
    )
  } return (
    <>
      <section className='heading'>
        <h1>
          {/* <FaUser />  */}
          Register
        </h1>
        <p>Please create an account</p>
      </section>

      <section className='form'>
        <form onSubmit={handleSubmit} >
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='name'
              name='name'
              value={name}
              onChange={handleChange}
              placeholder='Enter your name'
              required />
          </div>
          <div className='form-group'>
            <input
              // type='email'
              className='form-control'
              id='email'
              name='email'
              type="email"
              value={email}
              onChange={handleChange}
              placeholder='Enter your email'
              required />
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
              required />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password2' 
              name='password2'
              value={password2}
              onChange={handleChange}
              placeholder='Confirm password'
              required />
          </div>
          <div className='form-group'>
            <button className='btn btn-block'>Submit</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Register
