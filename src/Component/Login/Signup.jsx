import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import './Admin-Sign.css'


function Signup() {


  const Navigate = useNavigate();
  const [Name, setName] = useState("")
  const [Last, setLast] = useState("")
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")




  const handleSubmit = async () => {

    let userdetails = {
      name: Name,
      last: Last,
      email: Email,
      password: Password
    }

    let result = await axios.post(" ", userdetails)
    result = result.data
    console.log(result)
    if (result.name) {
      alert("New Admin Registered")
      Navigate("/userlogin")
    }
  }



  return (
    <div className='admin'>
      <h2>Sign up</h2>
      <Form >
        <Row className='md-3'>
          <Form.Group as={Col} md="4" >
            <Form.Label htmlFor="">Name :</Form.Label>
            <Form.Control type="text" placeholder='Enter your name' value={Name} onChange={(e) => setName(e.target.value)} />
          </Form.Group>

          <Form.Group as={Col} md="4" >
            <Form.Label htmlFor="">last name :</Form.Label>
            <Form.Control type="text" placeholder='Enter your last name' value={Last} onChange={(e) => setLast(e.target.value)} />
          </Form.Group>

          <Form.Group as={Col} md="4" >
            <Form.Label htmlFor="">Email :</Form.Label>
            <Form.Control type="email" placeholder='Enter your email' value={Email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>

          <Form.Group as={Col} md="4" >
            <Form.Label htmlFor="">Password :</Form.Label>
            <Form.Control type="Password" placeholder='Enter your password' value={Password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>
        </Row>
        <Button onClick={(e) => {
          e.preventDefault()
          handleSubmit()
        }}>Submit</Button>
      </Form>
    </div>
  )
}

export default Signup