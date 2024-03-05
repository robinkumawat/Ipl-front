import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Admin-Sign.css'
import axios from 'axios'

function AdminSignup() {


  const Navigate = useNavigate();
  const [AdminName, setAdminName] = useState("")
  const [AdminLast, setAdminLast] = useState("")
  const [AdminEmail, setAdminEmail] = useState("")
  const [AdminPassword, setAdminPassword] = useState("")

  useEffect(() => {
    const adminAuth = localStorage.getItem("adminData")
    if (adminAuth) {
      Navigate("/")
    }
  })


  const AdminSubmit = async () => {

    let admindetails = {
      name: AdminName,
      last: AdminLast,
      email: AdminEmail,
      password: AdminPassword
    }
    let result = await axios.post("http://localhost:4000/admin/register ",admindetails )
    result = result.data
    if (result.name) {
      alert("New Admin Registered")
      Navigate("/adminlogin")
    }
  }



  return (
    <div className='admin'>
      <h2>Admin SignUp</h2>
      <form onSubmit={AdminSubmit}>
        <Row >
          <Form.Group as={Col} md="4" >
            <Form.Label htmlFor="">Name :</Form.Label>
            <Form.Control type="text" placeholder='Enter your name' value={AdminName} onChange={(e) => setAdminName(e.target.value)} />
          </Form.Group>

          <Form.Group as={Col} md="4" >
          <Form.Label htmlFor="">last name :</Form.Label>
          <Form.Control type="text" placeholder='Enter your last name' value={AdminLast} onChange={(e) => setAdminLast(e.target.value)} />
          </Form.Group>

          <Form.Group as={Col} md="4" >
          <Form.Label htmlFor="">Email :</Form.Label>
          <Form.Control type="email" placeholder='Enter your email' value={AdminEmail} onChange={(e) => setAdminEmail(e.target.value)} />
          </Form.Group>
          
          <Form.Group as={Col} md="4" >
            <Form.Label htmlFor="">Password :</Form.Label>
            <Form.Control type="Password" placeholder='Enter your password' value={AdminPassword} onChange={(e) => setAdminPassword(e.target.value)} />
          </Form.Group>
        </Row>
        <Button type='submit'>submit</Button>
      </form>
    </div>
  )
}

export default AdminSignup