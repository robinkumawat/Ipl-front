import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import './cskteam.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PK from '../Image/PK-logo.png'
import Dark from '../Image/defalt-palyer.png'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import First from '../Image/First-slider.jpeg'
import Shikar from '../Pkimage/Sikhar.png'
import Jitesh from '../Pkimage/Jitesh.png'
import Jonny from '../Pkimage/Jonny.png'
import Prabhsimran from '../Pkimage/Prabhsimran.png'
import Harpreet from '../Pkimage/Harpreet.png'
import Liam from '../Pkimage/Liam.png'
import Atharva from '../Pkimage/Atharva.png'
import Rishi from '../Pkimage/Rishi.png'
import Sam from '../Pkimage/Sam.png'
import Sikandar from '../Pkimage/Sikandar.png'
import Shivam from '../Pkimage/Shivam.png'
import Vidwath from '../Pkimage/vidwath.png'
import Rahul from '../Pkimage/Rahul.png'
import Nathan from '../Pkimage/Nathan.png'
import Kagiso from '../Pkimage/Kagiso.png'
import Arshdeep from '../Pkimage/Arshdeep.png'
import Brar from '../Pkimage/Brar.png'
import {Link} from 'react-router-dom';






const Pkteam = () => {
    const cards = [
        {

            image: 'src/Component/Image/MI-logo.png',
            link: '/Mi'

        },
        {

            image: 'src/Component/Image/CSK-logo.png',
            link: '/Csk'
        },
        {

            image: 'src/Component/Image/GT-logo.png',
            link: 'Gt'

        },

        {

            image: 'src/Component/Image/DC-logo.png',
            link: 'Dc'

        },
        {

            image: 'src/Component/Image/KKR-logo.png',
            link: 'Kkr'

        },
        {

            image: 'src/Component/Image/LSG-logo.png',
            link: 'Lsg'

        },
        {

            image: 'src/Component/Image/PK-logo.png',
            link: 'Pk'

        },
        {

            image: 'src/Component/Image/RCB-logo.png',
            link: 'Rcb'

        },
        {

            image: 'src/Component/Image/RR-logo.png',
            link: 'Rr'

        },
        {
            image: 'src/Component/Image/SH-logo.png',
            link: 'Sh'
        },

    ];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,

    }

    const handleReadMore = (url) => {
        window.open(url, "_self");
    };

    return (
        <>
            <div className="wapper">
                <Container>
                    <div className="allteam">
                        <Slider {...sliderSettings}>
                            {cards.map((card, index) => (
                                <div key={index} className="carda">
                                    <Link to={`/${card.link}`}>
                                        <img src={card.image} alt={`Card ${index}`} />
                                    </Link>

                                </div>
                            ))}
                        </Slider>
                    </div>
                </Container>
                <div className="team-rec">
                    <div className="logo">
                        <img src={PK} alt="" />
                    </div>
                    <div className="line">
                        |
                    </div>
                    <div className="team-name">
                        <h3>PUNJAB KING </h3>
                        {/* <p>2010 , 2011 , 2018 , 2021 , 2023</p> */}
                    </div>
                    <div className="team-dea">
                        <p>OWNER - KPH Dream Cricket Private Ltd.</p>
                        <p>COACH - Trevor Bayliss</p>
                        <p>VENUE - Punjab Cricket Associatoin is Bindra Stadium</p>
                        <p>CAPTAIN - Shikhar Dhawan</p>
                    </div>
                </div>
            </div>
            <section>
                <Container>
                    <div className="cskteam">
                        <h4>Batters</h4>
                        <div className="csk-team">
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Shikar} />
                                <Card.Body>
                                    <Card.Title>SHIKAR DHAWAN</Card.Title>
                                    <Card.Text>
                                        Batter ,
                                        <span>CAPTAIN</span>
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Jitesh} />
                                <Card.Body>
                                    <Card.Title>JITESH SHARMA</Card.Title>
                                    <Card.Text>
                                        Wk Keeper-Batter
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Jonny} />
                                <Card.Body>
                                    <Card.Title>JONNY BAIRSTOW</Card.Title>
                                    <Card.Text>
                                        Batter
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Prabhsimran} />
                                <Card.Body>
                                    <Card.Title>PRABHSIMRAN SINGH</Card.Title>
                                    <Card.Text>
                                        Batter
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Liam} />
                                <Card.Body>
                                    <Card.Title>LIAM LIVINGSTONE</Card.Title>
                                    <Card.Text>
                                        Batter
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Harpreet} />
                                <Card.Body>
                                    <Card.Title>HARPREET BHATIA</Card.Title>
                                    <Card.Text>
                                        Batter
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Dark} />
                                <Card.Body>
                                    <Card.Title>RILEE ROSSOUW</Card.Title>
                                    <Card.Text>
                                        Batter
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Dark} />
                                <Card.Body>
                                    <Card.Title>SHASHANK SINGH</Card.Title>
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
                                <Card.Img variant="top" src={Dark} />
                                <Card.Body>
                                    <Card.Title>CHRIS WOAKES</Card.Title>
                                    <Card.Text>
                                        All-Rounder
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Dark} />
                                <Card.Body>
                                    <Card.Title>VISHWANATH PRATAP SINGH</Card.Title>
                                    <Card.Text>
                                        All-rounder
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Dark} />
                                <Card.Body>
                                    <Card.Title>ASHUTOSH SHARMA</Card.Title>
                                    <Card.Text>
                                        All-rounder
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Dark} />
                                <Card.Body>
                                    <Card.Title>TANAY THYAGARAJANN</Card.Title>
                                    <Card.Text>
                                        All-rounder
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Atharva} />
                                <Card.Body>
                                    <Card.Title>ATHARVA TAIDE </Card.Title>
                                    <Card.Text>
                                        All-rounder
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Rishi} />
                                <Card.Body>
                                    <Card.Title>RISHI DHAWAN</Card.Title>
                                    <Card.Text>
                                        All-rounder
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Sam} />
                                <Card.Body>
                                    <Card.Title>SAM CURRAN</Card.Title>
                                    <Card.Text>
                                        All-rounder
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Sikandar} />
                                <Card.Body>
                                    <Card.Title>SIKANDAR RAZA</Card.Title>
                                    <Card.Text>
                                        All-rounder
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Shivam} />
                                <Card.Body>
                                    <Card.Title>SHIVAM SINGH</Card.Title>
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
                                <Card.Img variant="top" src={Dark} />
                                <Card.Body>
                                    <Card.Title>PRINCE CHOUDHARY</Card.Title>
                                    <Card.Text>
                                        Bowler
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Brar} />
                                <Card.Body>
                                    <Card.Title>HARPREET BRAR</Card.Title>
                                    <Card.Text>
                                        Bowler
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Arshdeep} />
                                <Card.Body>
                                    <Card.Title>ARSHDEEP SINGH</Card.Title>
                                    <Card.Text>
                                        Bowler
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Kagiso} />
                                <Card.Body>
                                    <Card.Title>KAGISO RABADA</Card.Title>
                                    <Card.Text>
                                        Bowler
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Nathan} />
                                <Card.Body>
                                    <Card.Title>NATHAN ELLIS</Card.Title>
                                    <Card.Text>
                                        Bowler
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Rahul} />
                                <Card.Body>
                                    <Card.Title>RAHUL CHAHAR</Card.Title>
                                    <Card.Text>
                                        Bowler
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Vidwath} />
                                <Card.Body>
                                    <Card.Title>VIDWATH KAVERAPPA</Card.Title>
                                    <Card.Text>
                                        Bowler
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Dark} />
                                <Card.Body>
                                    <Card.Title>HARSHAL PATEL</Card.Title>
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

export default Pkteam;
