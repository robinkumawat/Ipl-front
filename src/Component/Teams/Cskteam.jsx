import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import './cskteam.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Csk from '../Image/CSK-logo.png'
import Mcsk from '../Image/Mcsk.png'
import Dark from '../Image/defalt-palyer.png'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
// import First from '../Image/First-slider.jpeg'
import Devon from '../Image/Devon.png'
import Ruturaj from '../Image/Ruturaj.png'
import Ajinkya from '../Image/Ajinkya.png'
import Shaik from '../Image/Shaik.png'
import Ravindra from '../Image/Ravindra.png'
import Mitchell from '../Image/Mitchell.png'
import Moeen from '../Image/Moeen.png'
import Shivam from '../Image/Shivam.png'
import Nishant from '../Image/Nishant.png'
import Ajay from '../Image/Ajay.png'
import Rajvardhan from '../Image/Rajvardhan.png'
import Deepak from '../Image/Deepak.png'
import Maheesh from '../Image/Maheesh.png'
import Mukash from '../Image/Mukash.png'
import Prashant from '../Image/Prashant.png'
import Simarjeet from '../Image/Simarjeet.png'
import Tushar from '../Image/Tushar.png'
import Matheesha from '../Image/Matheesha.png'




const Cskteam = () => {
    const cards = [
        {

            image: 'src/Component/Image/MI-logo.png',
            href: 'Mi'

        },
        {

            image: 'src/Component/Image/CSK-logo.png',
            href: 'Csk'
        },
        {

            image: 'src/Component/Image/GT-logo.png',
            href: 'Gt'

        },

        {

            image: 'src/Component/Image/DC-logo.png',
            href: 'Dc'

        },
        {

            image: 'src/Component/Image/KKR-logo.png',
            href: 'Kkr'

        },
        {

            image: 'src/Component/Image/LSG-logo.png',
            href: 'Lsg'

        },
        {

            image: 'src/Component/Image/PK-logo.png',
            href: 'Pk'

        },
        {

            image: 'src/Component/Image/RCB-logo.png',
            href: 'Rcb'

        },
        {

            image: 'src/Component/Image/RR-logo.png',
            href: 'Rr'

        },
        {
            image: 'src/Component/Image/SH-logo.png',
            href: 'Sh'
        },


    ];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 2,

    }

    return (
        <>
            <div className="wapper">
                <Container>
                    <div className="allteam">
                        <Slider {...sliderSettings}>
                            {cards.map((card, index) => (
                                <div key={index} className="card">
                                    <a href={card.href} target="_blank" rel="noopener noreferrer">
                                        <img src={card.image} alt={`Card ${index}`} />
                                    </a>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </Container>
                <div className="team-rec">
                    <div className="logo">
                        <img src={Csk} alt="" />
                    </div>
                    <div className="line">
                        |
                    </div>
                    <div className="team-name">
                        <h3>CHENNAI SUPER KING </h3>
                        <p>2010 , 2011 , 2018 , 2021 , 2023</p>
                    </div>
                    <div className="team-dea">
                        <p>OWNER - Chennai Super Kings Cricket Ltd.</p>
                        <p>COACH - Stephen Fleming</p>
                        <p>VENUE - M. A. Chidambaram Stadium</p>
                        <p>CAPTAIN - MS Dhoni</p>
                    </div>
                </div>
            </div>
            <section>
                <Container>
                    <div className="cskteam">
                        <h4>Batters</h4>
                        <div className="csk-team">
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Mcsk} />
                                <Card.Body>
                                    <Card.Title>M S DHONI</Card.Title>
                                    <Card.Text>
                                        Wk keeper-Batter
                                        <span>CAPTAIN</span>
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Devon} />
                                <Card.Body>
                                    <Card.Title>DEVON CONWAY</Card.Title>
                                    <Card.Text>
                                        Batter
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Ruturaj} />
                                <Card.Body>
                                    <Card.Title>RUTUJAR GAIKWAD</Card.Title>
                                    <Card.Text>
                                       Batter
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Ajinkya} />
                                <Card.Body>
                                    <Card.Title>AJINKYA RAHANE</Card.Title>
                                    <Card.Text>
                                       Batter
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Shaik} />
                                <Card.Body>
                                    <Card.Title>SHAIK RASHEED</Card.Title>
                                    <Card.Text>
                                       Batter
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Dark} />
                                <Card.Body>
                                    <Card.Title>SAMEER RIZVI</Card.Title>
                                    <Card.Text>
                                       Batter
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Dark} />
                                <Card.Body>
                                    <Card.Title>AVANISH ARAVELLY</Card.Title>
                                    <Card.Text>
                                        Batter
                                    </Card.Text>

                                </Card.Body>
                            </Card>

                        </div>
                    </div>
                    <div className="cskteam">
                        <h4>All-Rounders</h4>
                        <div className="csk-team">
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Ravindra} />
                                <Card.Body>
                                    <Card.Title>RAVINDRA JADEJA </Card.Title>
                                    <Card.Text>
                                        All-Rounder
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Mitchell} />
                                <Card.Body>
                                    <Card.Title>MITCHELL SANTNER</Card.Title>
                                    <Card.Text>
                                        All-rounder
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Moeen} />
                                <Card.Body>
                                    <Card.Title>MOEEN ALI</Card.Title>
                                    <Card.Text>
                                       All-rounder
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Shivam} />
                                <Card.Body>
                                    <Card.Title>SHIVAM DUBE </Card.Title>
                                    <Card.Text>
                                       All-rounder
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Nishant} />
                                <Card.Body>
                                    <Card.Title>NISHANT SINDHU</Card.Title>
                                    <Card.Text>
                                       All-rounder
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Ajay} />
                                <Card.Body>
                                    <Card.Title>AJAY MANDAL
                                    </Card.Title>
                                    <Card.Text>
                                       All-rounder
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Dark} />
                                <Card.Body>
                                    <Card.Title>RACHIN RAVINDRA </Card.Title>
                                    <Card.Text>
                                        All-rounder
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Dark} />
                                <Card.Body>
                                    <Card.Title>SHARDUL THAKUR</Card.Title>
                                    <Card.Text>
                                        All-rounder
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Dark} />
                                <Card.Body>
                                    <Card.Title>DARYL MITCHELL</Card.Title>
                                    <Card.Text>
                                        All-rounder
                                    </Card.Text>

                                </Card.Body>
                            </Card>

                        </div>
                    </div>
                    <div className="cskteam">
                        <h4>Bowlers</h4>
                        <div className="csk-team">
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Rajvardhan} />
                                <Card.Body>
                                    <Card.Title>RAJVARDHAN HANGARGEKAR</Card.Title>
                                    <Card.Text>
                                        Bowler
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Deepak} />
                                <Card.Body>
                                    <Card.Title>DEEPAK CHAHAR</Card.Title>
                                    <Card.Text>
                                        Bowler
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Maheesh} />
                                <Card.Body>
                                    <Card.Title>MAHEESH THEEKSHANA</Card.Title>
                                    <Card.Text>
                                       Bowler
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Mukash} />
                                <Card.Body>
                                    <Card.Title>MUKASH CHOUDHARY</Card.Title>
                                    <Card.Text>
                                       Bowler
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Dark} />
                                <Card.Body>
                                    <Card.Title>MUSKTAFIZUR RAHMAN</Card.Title>
                                    <Card.Text>
                                       Bowler
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Prashant} />
                                <Card.Body>
                                    <Card.Title>PRASHANT SOLANKI</Card.Title>
                                    <Card.Text>
                                       Bowler
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Simarjeet} />
                                <Card.Body>
                                    <Card.Title>SIMARJEET SINGH</Card.Title>
                                    <Card.Text>
                                        Bowler
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Tushar} />
                                <Card.Body>
                                    <Card.Title>TUSHAR DESHPANDE</Card.Title>
                                    <Card.Text>
                                        Bowler
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Matheesha} />
                                <Card.Body>
                                    <Card.Title>MATHEESHA PATHIRANA</Card.Title>
                                    <Card.Text>
                                        Bowler
                                    </Card.Text>

                                </Card.Body>
                            </Card>

                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default Cskteam;
