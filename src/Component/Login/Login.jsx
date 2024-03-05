import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Admin-Sign.css'

function Login() {

    const navigate = useNavigate();
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    useEffect(() => {
        const userAuth = localStorage.getItem("userData");
        if (userAuth) {
            navigate("/")
        }
    }, [])

    const loginHandle = async () => {
        let result = await axios.post(" ", {
            email: Email,
            password: Password
        })
        result = result.data
        if (result.usertologin.name){
            localStorage.setItem("userData",JSON.stringify(result))
            navigate("/")
        }
        else{
            alert("Plese enter correct detils")
        }

    }
    return (
        <div className='admin'>
            <h2>Sign in</h2>
            <Form action="">
                <Row>
                    {/* <label htmlFor="">Email</label> */}
                    <Form.Group as={Col} md="4" >
                        <Form.Control type="email" placeholder='Enter your email' value={Email} onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>
                    <Form.Group as={Col} md="4" >
                        <Form.Control type="password" placeholder='Enter your password' value={Password} onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>

                    {/* <Link id='fgtpass' to="Password-reset-User" >Forgot Password</Link> */}

                </Row>
                <Button onClick={() => navigate("/Signup")}>Sign Up</Button>
                <Button type="submit" onClick={(e) => {
                    e.preventDefault()
                    loginHandle()
                }} > Login </Button>
            </Form>
        </div>
    )
}

export default Login