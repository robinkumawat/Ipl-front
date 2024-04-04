import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import './footer.css'
import { Link } from 'react-router-dom'



function Footer() {
    return (
        <>
            <div className="footer">
                <Container>
                    <div className="footer-flex">
                        <div className="footer-team">
                            <ul>
                                <h2>Teams</h2>
                                <Link to="/Csk">
                                    <li>CSK</li>
                                </Link>
                                <Link to="/Mi">
                                    <li>MI</li>
                                </Link>
                                <Link to="/Kkr">
                                    <li>KKR</li>
                                </Link>
                                <Link to="/Rr">
                                    <li>RR</li>
                                </Link>
                                <Link to="/Rcb">
                                    <li>RCB</li>
                                </Link>
                                <Link to="/Lsg">
                                    <li>LSG</li>
                                </Link>
                                <Link to="/Gt">
                                    <li>GT</li>
                                </Link>
                                <Link to="/Pk">
                                    <li>PK</li>
                                </Link>
                                <Link to="/Sh">
                                    <li>SH</li>
                                </Link>
                                <Link to="/Dc">
                                    <li>DC</li>
                                </Link>
                            </ul>
                            <div className="social-media">
                                <h2>Contact Us</h2>
                                <ul>
                                    <Link to="https://telegram.me/FreeTipBets"><li>Telegram</li></Link>
                                    <Link to="https://youtube.com/@Suno_boss?si=sDq66EZP-CRds4OR"><li>Youtube</li></Link>
                                </ul>
                            </div>

                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Footer