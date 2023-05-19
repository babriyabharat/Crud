import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { UpdateStu } from '../../service/action/StudentList.ation'
import { useDispatch, useSelector } from 'react-redux'
import './EditStu.css'
import { useNavigate } from 'react-router-dom'


function EditStu({ handleEdit }, props) {
    const { studentInfo, isEdit } = useSelector(state => state.studentReducer)
    const [initial, setInitial] = useState(studentInfo)
    
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setInitial({ ...initial, [name]: value })

    }

    const handleSubmit = (e) => {

        e.preventDefault()

        const data = initial

        dispatch(UpdateStu(data))

        handleEdit()
    }

    if (!isEdit) {
        navigate('/')
    }
    else {
        return (
            <>
                <Container>
                    <Row className='align-item-center'>
                        <Col className='col-6'>
                            <h2 style={{ paddingInlineStart: "160px" }}>
                                Edit Student Portal :-
                            </h2>
                            <Form onSubmit={(e) => handleSubmit(e)} className='m-2'>
                                <div className='d-flex'>
                                    <Form.Group className="col-6 mb-3 px-3">
                                        <Form.Label>FirstName :</Form.Label>
                                        <Form.Control type="text" placeholder="Enter firstname" name='fname' value={initial.fname} onChange={(e) => (handleChange(e))} />
                                    </Form.Group>

                                    <Form.Group className="col-6 mb-3 px-3">
                                        <Form.Label>LastName :</Form.Label>
                                        <Form.Control type="text" placeholder="Enter lastname" name='lname' value={initial.lname} onChange={(e) => (handleChange(e))} />
                                    </Form.Group>
                                </div>

                                <div className='d-flex'>
                                    <Form.Group className="col-6 mb-3 px-3">
                                        <Form.Label>Email :</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" name='email' value={initial.email} onChange={(e) => (handleChange(e))} />
                                    </Form.Group>

                                    <Form.Group className="col-6 mb-3 px-3">
                                        <Form.Label>Mobile No :</Form.Label>
                                        <Form.Control type="text" placeholder="Enter mobile number" name='mobile_no' value={initial.mobile_no} onChange={(e) => (handleChange(e))} />
                                    </Form.Group>
                                </div>

                                <div className='d-flex'>
                                    <Form.Group className="col-6 mb-3 px-3">
                                        <Form.Label>Parents No :</Form.Label>
                                        <Form.Control type="text" placeholder="Enter parents number" name='parents_no' value={initial.parents_no} onChange={(e) => (handleChange(e))} />
                                    </Form.Group>

                                    <Form.Group className="col-6 mb-3 px-3">
                                        <Form.Label>Address :</Form.Label>
                                        <Form.Control type="text" placeholder="Enter address" name='address' value={initial.address} onChange={(e) => (handleChange(e))} />
                                    </Form.Group>
                                </div>

                                <div className='radio'>
                                    <Form.Label>Gender : </Form.Label>
                                    <Form.Group>
                                        <Form.Check
                                            inline
                                            label="Male"
                                            name="gender"
                                            type='radio'
                                            value="male"
                                            checked={initial.gender === 'male'}
                                            onChange={handleChange}
                                        />
                                        <Form.Check
                                            inline
                                            label="Female"
                                            name="gender"
                                            type='radio'
                                            value="female"
                                            checked={initial.gender === 'female'}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>
                                </div>
                                <div style={{ paddingInlineStart: "270px" }}>
                                    <Button variant="primary" type="submit" >
                                        Update
                                    </Button>
                                </div>
                            </Form>
                        </Col>
                        <Col className='col-6'>
                            <div>
                                <img src={props.img} alt='' ></img>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default EditStu;