import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import './footer.css'



function Footer() {
    return (
        <>
            <div className="footer">
                <Container>
                    <div className="footer-flex">
                        <div className="footer-team">
                            <ul>
                                <h2>Teams</h2>
                                <a href="/Csk">
                                    <li>CSK</li>
                                </a>
                                <a href="/Mi">
                                    <li>MI</li>
                                </a>
                                <a href="/Kkr">
                                    <li>KKR</li>
                                </a>
                                <a href="/Rr">
                                    <li>RR</li>
                                </a>
                                <a href="/Rcb">
                                    <li>RCB</li>
                                </a>
                                <a href="/Lsg">
                                    <li>LSG</li>
                                </a>
                                <a href="/Gt">
                                    <li>GT</li>
                                </a>
                                <a href="/Pk">
                                    <li>PK</li>
                                </a>
                                <a href="/Sh">
                                    <li>SH</li>
                                </a>
                                <a href="/Dc">
                                    <li>DC</li>
                                </a>
                            </ul>
                            <div className="social-media">
                                <h2>Contact Us</h2>
                                <ul>
                                    <a href="https://telegram.me/FreeTipBets"><li>Telegram</li></a>
                                    <a href=""><li>Instagram</li></a>
                                    <a href="https://youtube.com/@Suno_boss?si=sDq66EZP-CRds4OR"><li>Youtube</li></a>
                                    <a href=""><li>Whatsapp</li></a>

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