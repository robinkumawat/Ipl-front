import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import './cskteam.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SH from '../Image/SH-logo.png'
// import Mcsk from '../Image/Mcsk.png'
import Dark from '../Image/defalt-palyer.png'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
// import First from '../Image/First-slider.jpeg'
import Abdul from '../Shimage/Abdul.png'
import Aiden from '../Shimage/Aiden.png'
import Rahul from '../Shimage/Rahul.png'
import Glenn from '../Shimage/Glenn.png'
import Mayank from '../Shimage/Mayank.png'
import Anmolpreet from '../Shimage/Anmolpreet.png'
import Heinrich from '../Shimage/Heinrich.png'
import Upendra from '../Shimage/Upendra.png'
import Nitish from '../Shimage/Nitish.png'
import Abhishek from '../Shimage/Abhishek.png'
import Marco from '../Shimage/Marco.png'
import Sundar from '../Shimage/Sundar.png'
import Sanvir from '../Shimage/Sanvir.png'
import Bhuv from '../Shimage/Bhuv.png'
import Fazalhaq from '../Shimage/Fazalhaq.png'
import T from '../Shimage/T.png'
import Umran from '../Shimage/Umran.png'
import Mark from '../Shimage/Mark.png'
import {Link} from 'react-router-dom';


const Shteam = () => {
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
                        <img src={SH} alt="" />
                    </div>
                    <div className="line">
                        |
                    </div>
                    <div className="team-name">
                        <h3>SUNRISERS HADERABAD </h3>
                        <p> 2016</p>
                    </div>
                    <div className="team-dea">
                        <p>OWNER - Sun TV Network</p>
                        <p>COACH - Daniel Vettori</p>
                        <p>VENUE -Rajiv Ghandi INTL. Cricket Stadium</p>
                        <p>CAPTAIN - PAT CUMMINS</p>
                    </div>
                </div>
            </div>
            <section>
                <Container>
                    <div className="cskteam">
                        <h4>Batters</h4>
                        <div className="csk-team">
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Abdul} />
                                <Card.Body>
                                    <Card.Title>ABDUL SAMAD</Card.Title>
                                    <Card.Text>
                                        Batter ,
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Aiden} />
                                <Card.Body>
                                    <Card.Title>AIDEN MARKRAM</Card.Title>
                                    <Card.Text>
                                        Batter
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Rahul} />
                                <Card.Body>
                                    <Card.Title>RAHUL TRIPATHI</Card.Title>
                                    <Card.Text>
                                        Batter
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Glenn} />
                                <Card.Body>
                                    <Card.Title>GLENN PHILLIPS</Card.Title>
                                    <Card.Text>
                                        Batter
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Mayank} />
                                <Card.Body>
                                    <Card.Title>MAYANK AGARWAL</Card.Title>
                                    <Card.Text>
                                        Batter
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Anmolpreet} />
                                <Card.Body>
                                    <Card.Title>ANMOLPREET SINGH</Card.Title>
                                    <Card.Text>
                                        Batter
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Heinrich} />
                                <Card.Body>
                                    <Card.Title>HEINRICH KLAASEN</Card.Title>
                                    <Card.Text>
                                        Batter
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Upendra} />
                                <Card.Body>
                                    <Card.Title>UPENDRA SINGH YADAV</Card.Title>
                                    <Card.Text>
                                        Batter
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Nitish} />
                                <Card.Body>
                                    <Card.Title>NITISH KUMAR REDDY</Card.Title>
                                    <Card.Text>
                                        Batter
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Dark} />
                                <Card.Body>
                                    <Card.Title>TRAVIS HEAD</Card.Title>
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
                                <Card.Img variant="top" src={Abhishek} />
                                <Card.Body>
                                    <Card.Title>ABHISHEK SHARMA</Card.Title>
                                    <Card.Text>
                                        All-Rounder
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Marco} />
                                <Card.Body>
                                    <Card.Title>MARCO JANSEN</Card.Title>
                                    <Card.Text>
                                        All-rounder
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Sundar} />
                                <Card.Body>
                                    <Card.Title>WASHINGTON SUNDAR</Card.Title>
                                    <Card.Text>
                                        All-rounder
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Sanvir} />
                                <Card.Body>
                                    <Card.Title>SANVIR SINGH</Card.Title>
                                    <Card.Text>
                                        All-rounder
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Dark} />
                                <Card.Body>
                                    <Card.Title>WANINDU HASARANGA</Card.Title>
                                    <Card.Text>
                                        All-rounder
                                    </Card.Text>

                                </Card.Body>
                            </Card>



                        </div>
                    </div>
                    <div className="cskteam">
                        <h4>Bowler</h4>
                        <div className="csk-team">
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Dark} />
                                <Card.Body>
                                    <Card.Title>PAT CUMMINS</Card.Title>
                                    <Card.Text>
                                        Bowler
                                        <span>(CAPTAIN)</span>
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Dark} />
                                <Card.Body>
                                    <Card.Title>JHATHAVEDH SUBRAMANYAN</Card.Title>
                                    <Card.Text>
                                        Bowler
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Dark} />
                                <Card.Body>
                                    <Card.Title>AKASH SINGH</Card.Title>
                                    <Card.Text>
                                        Bowler
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Dark} />
                                <Card.Body>
                                    <Card.Title>SHARHBAR AHAMAD</Card.Title>
                                    <Card.Text>
                                        Bowler
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Bhuv} />
                                <Card.Body>
                                    <Card.Title>BHUVNESHWAR KUMAR</Card.Title>
                                    <Card.Text>
                                        Bowler
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Fazalhaq} />
                                <Card.Body>
                                    <Card.Title>FAZALHAQ FAROOQI</Card.Title>
                                    <Card.Text>
                                        Bowler
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Dark} />
                                <Card.Body>
                                    <Card.Title>JATDEV UNADKAT</Card.Title>
                                    <Card.Text>
                                        Bowler
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={T} />
                                <Card.Body>
                                    <Card.Title>T NATARAJAN</Card.Title>
                                    <Card.Text>
                                        Bowler
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Umran} />
                                <Card.Body>
                                    <Card.Title>UMRAN MALIK</Card.Title>
                                    <Card.Text>
                                        Bowler
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Mark} />
                                <Card.Body>
                                    <Card.Title>MAYANK MARKANDA</Card.Title>
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

export default Shteam;
