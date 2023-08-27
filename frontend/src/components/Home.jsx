import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Home() {
  const localUser = localStorage.getItem('user')
  const userInLocal = JSON.parse(localUser)?.name

  const navigate = useNavigate()
  const { user } = useSelector(store => store.auth)
 

  useEffect(() => {
    if (!user) {
      navigate('/register')
    }
  }, [])
 

  return (
    <>
      <section className='heading'>
        <h1>What do you need help with?</h1>
        <p>Please choose from an option below</p>
      </section>

      <a to='/new-ticket' className='btn btn-reverse btn-block'>
        Create New Ticket
      </a>

      <a to='/tickets' className='btn btn-block'>
        View My Tickets
      </a>
    </>
  )
}

export default Home
