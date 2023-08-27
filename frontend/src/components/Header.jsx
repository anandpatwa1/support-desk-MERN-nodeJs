import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../store/userAuth/authSlice'

function Header() {

    const {user , isSuccess , isError , isLoding} = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleClick = () => {
     dispatch(logout())
     navigate('/login')
    }
    useEffect(()=>{
      if (user && isSuccess ) {
        navigate('/')
      }
    },[user , isSuccess , isError , isLoding])
    return (
        <header className='header'>
            <div className='logo'>
                <Link to='/'>Support Desk</Link>
            </div>
            <ul>
                {
                    user ? (
                        <li><button className='btn' onClick={handleClick}>Logout</button></li>
                    ) : (
                        <>
                            <li> <Link to='/login'> Login </Link> </li>
                            <li> <Link to='/register'> Register </Link> </li>
                        </>
                    )
                }

            </ul>
        </header>
    )
}

export default Header
