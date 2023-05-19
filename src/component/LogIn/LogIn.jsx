import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { Google } from 'react-bootstrap-icons'
import { logInGoogle, logInInitiate } from '../../service/action/Auth.action'
import './LogIn.css'

function SignUp() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, error } = useSelector(state => state.AuthReducer)
    console.log("error", user);

    const [initial, setInitial] = useState({
        email: '',
        password: ''
    })

    const handleClick = () => {
        navigate('/')
    }

    const handleLogin = () => {
        dispatch(logInInitiate())
    }

    const googleLogin = () => {
        dispatch(logInGoogle())
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setInitial({ ...initial, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(initial);
        dispatch(logInInitiate(initial.email, initial.password));
    }

    if (user !== null) {
        navigate('/')
    } else {
        return (
            <>
                <div className='form-wrapper vw-100 vh-100 position-fixed top-0 start-0 d-flex justify-content-center align-items-center bg-white'>
                    <div className='main-form bg-secondary bg-gradient p-3 rounded'>
                        <h4 className='pb-3 border-bottom'>
                            LogIn
                        </h4>
                        <Form onSubmit={(e) => handleSubmit(e)}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name='email' value={initial.email} onChange={(e) => { handleChange(e) }} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name='password' value={initial.password} onChange={(e) => { handleChange(e) }} />
                            </Form.Group>

                            {
                                error !== null ? 
                                    error === 'auth/user-not-found' ? 
                                    <p className='text-danger'> Please Create Account. </p>
                                    : 
                                    error === 'auth/wrong-password' ? 
                                    <p className='text-danger'> Password Wrong*</p>
                                    : <p className='text-danger'> Somthing Went Wrong </p>
                                    : null
                            }

                            <div className='text-center d-flex justify-content-center' >
                                <div>
                                    <Button variant="primary" type="submit" onClick={() => { handleLogin() }}>
                                        LogIn
                                    </Button>
                                </div>
                                <div>
                                    <Button variant="danger" type="submit" onClick={() => { handleClick() }}>
                                        Cancel
                                    </Button>
                                </div>
                            </div>
                            <div className='p-3'>
                                <div className='text-center'>
                                    <p>
                                        Don't have account ?
                                        <span>
                                            <NavLink to='/signUp' className='text-dark'>
                                                SignUp
                                            </NavLink>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </Form>

                        <div className='text-center'>
                            <Button variant='outline-success' onClick={() => { googleLogin() }}>
                                <Google /> <span> Login With Google </span>
                            </Button>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}

export default SignUp