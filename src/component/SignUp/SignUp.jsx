import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { signUpInitiate } from '../../service/action/Auth.action'
import './SignUp.css'

function SignUp() {

    const [initial, setInitial] = useState({
        email: '',
        password: '',
        cpassword: ''
    })
    const [err, setErr] =useState('')
    const { user } = useSelector(state => state.AuthReducer)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
 
        setInitial({ ...initial, [name]: value })

    }

    const handleSignUp = () => {
        dispatch(signUpInitiate())
    }

    const handleSubmit = (e) => {

        e.preventDefault()

        if(initial.password === initial.cpassword){
            dispatch(signUpInitiate(initial.email, initial.password))
            console.log("Done");
        } else {
            setErr("Password and Confirm Password is dosen't match")
            console.log("Error");
        }
    }

    const handleClick = () => {
        navigate('/')
    }

    if(user !== null){
        navigate('/')
    } else {
        return (
            <>
                <div className='form-wrapper vw-100 vh-100 position-fixed top-0 start-0 d-flex justify-content-center align-items-center bg-white'>
                    <div className='main-form bg-secondary bg-gradient p-3 rounded'>
                        <h4 className='pb-3 border-bottom'>
                            SignUp
                        </h4>
                        <Form onSubmit={(e) => handleSubmit(e)} >
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name='email' value={initial.email} onChange={(e) => {handleChange(e)}} />
                            </Form.Group>
    
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name='password' value={initial.password} onChange={(e) => {handleChange(e)}} />
                            </Form.Group>
    
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Confirm Password" name='cpassword' value={initial.cpassword} onChange={(e) => {handleChange(e)}} />
                                <Form.Text className='text-danger'>
                                    {
                                        err
                                    }
                                </Form.Text>
                            </Form.Group>
    
                            <div className='text-center d-flex justify-content-center' >
                                <div>
                                    <Button variant="primary" type="submit" onClick={() => { handleSignUp() }}>
                                        SignUp
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
                                        Have account ? 
                                        <span>
                                            <NavLink to='/logIn' className='text-dark'>
                                                 LogIn
                                            </NavLink>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </>
        )
    }
}

export default SignUp