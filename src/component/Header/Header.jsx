import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logOut } from '../../service/action/Auth.action'

function Header() {

    const { user } = useSelector(state => state.AuthReducer)
    const dispatch = useDispatch()

    const handleLogOut = () => {
        dispatch(logOut())
    }

    return (
        <>
            <header className='bg-dark'>
                <div className='container'>
                    <div className='row align-item-center'>
                        <div className='logo col-2 text-white'>
                            <h2 className='m-0'>
                                Student Crud
                            </h2>
                        </div>
                        <nav className='col'>
                            <ul className='list-unstyled d-flex justify-content-end m-0'>
                                <li className='p-2'>
                                    <NavLink to='/' className='text-decoration-none text-white'>
                                        Home
                                    </NavLink>
                                </li>
                                <li className='p-2 '>
                                    <NavLink to='/about' className='text-decoration-none text-white'>
                                        Aboute
                                    </NavLink>
                                </li>
                                <li className='p-2'>
                                    <NavLink to='/CreateStu' className='text-decoration-none text-white'>
                                        Create Emp
                                    </NavLink>
                                </li>
                                <li className='p-2'>
                                    <NavLink to='/contact' className='text-decoration-none text-white'>
                                        Contact
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                        <div className='cta col-2' >
                            {
                                user !== null ? 
                                <Button variant='danger' onClick={() => {handleLogOut()}}>
                                    LogOut
                                </Button> :
                            <NavLink to='/signUp' className='btn btn-success'>
                                SignUp
                            </NavLink>
                            }
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header