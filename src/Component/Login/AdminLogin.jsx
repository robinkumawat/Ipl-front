
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';

function AdminLogin() {

    const navigate = useNavigate();
    const [AdminEmail, setAdminEmail] = useState("")
    const [AdminPassword, setAdminPassword] = useState("")

    useEffect(() => {
        const adminAuth = localStorage.getItem("adminData")
        if (adminAuth) {
            navigate("/")
        }
    }, [])

    const loginHandle = async () => {
        let result = await axios.post(" ", {
            Email: AdminEmail,
            Password: AdminPassword
        })
        result = result.data
        if (result.admintologin.name) {
            localStorage.setItem("adminData", JSON.stringify(result))
            navigate("/")
        }
        else {
            alert("plese enrter Correct Detils")
        }
    }

    return (
        <div className='admin'>
            <h2>Admin Login</h2>
            <Form action="">
                <Row>
                    <Form.Group as={Col} md="4" >
                        <Form.Label htmlFor="">Email :</Form.Label>
                        <Form.Control type="email" placeholder='Enter your email' value={AdminEmail} onChange={(e) => setAdminEmail(e.target.value)} />
                    </Form.Group>
                    <Form.Group as={Col} md="4" >
                    <Form.Label htmlFor="">Password :</Form.Label>
                        <Form.Control type="password" placeholder='Enter your password' value={AdminPassword} onChange={(e) => setAdminPassword(e.target.value)} />
                    </Form.Group>

                    {/* <Link id='fgtpass' to="Password-reset-User" >Forgot Password</Link> */}

                </Row>
                <Button onClick={() => navigate("/AdminSignup")}>Sign Up</Button>
                <Button type="submit" onClick={(e) => {
                    e.preventDefault()
                    loginHandle()
                }} > Login </Button>
            </Form>
        </div>
    )
}

export default AdminLogin