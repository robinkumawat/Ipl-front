import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import './mi.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DC from '../Image/DC-logo.png'
import Dark from '../Image/defalt-palyer.png'
import Card from 'react-bootstrap/Card';
// import First from '../Image/First-slider.jpeg'
import David from '../Dcimage/David.png'
import Prithvi from '../Dcimage/Prithvi.png'
import Yash from '../Dcimage/Yash.png'
import Abishek from '../Dcimage/Abishek.png'
import Axar from '../Dcimage/Axar.png'
import Lalit from '../Dcimage/Lalit.png'
import Mitchell from '../Dcimage/Mitchell.png'
import Pravin from '../Dcimage/Pravin.png'
// import Vicky from '../Dcimage/vicky.png'
import Anrich from '../Dcimage/Anrich.png'
import Kuldeep from '../Dcimage/Kuldeep.png'
import Lungi from '../Dcimage/Lungi.png'
import Khaleel from '../Dcimage/Khaleel.png'
import Ishant from '../Dcimage/Ishant.png'
import Mukesh from '../Dcimage/Mukesh.png'
import {Link} from 'react-router-dom';







const Dcteam = () => {
    const cards = [
        {

            image: 'src/Component/Image/MI-logo.png',
            link: 'Mi'

        },
        {

            image: 'src/Component/Image/CSK-logo.png',
            link: 'Csk'
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
                        <img src={DC} alt="" />
                    </div>
                    <div className="line">
                        |
                    </div>
                    <div className="team-name">
                        <h3>DELHI CAPITALS</h3>
                        {/* <p>2013 , 2015 , 2017 , 2019 , 2020</p> */}
                    </div>
                    <div className="team-dea">
                        <p>OWNER - GMR & JSW sports PVT. Ltd.</p>
                        <p>COACH - Ricky Ponting</p>
                        <p>VENUE - Arun Jaitley Stadium</p>
                        <p>CAPTAIN - David warner</p>
                    </div>
                </div>
            </div>
            <section>
                <Container>
                    <div className="cskteam">
                        <h4>Batters</h4>
                        <div className="csk-team">
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Dark} />
                                <Card.Body>
                                    <Card.Title>Rishabh pant</Card.Title>
                                    <Card.Text>
                                        Wk keeper-Batter
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={David} />
                                <Card.Body>
                                    <Card.Title>David warner</Card.Title>
                                    <Card.Text>
                                        Batter ,
                                        <span>(CAPTAIN)</span>
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Prithvi} />
                                <Card.Body>
                                    <Card.Title>PRITHVI SHAW</Card.Title>
                                    <Card.Text>
                                        Batter
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Yash} />
                                <Card.Body>
                                    <Card.Title>YASH DHULL</Card.Title>
                                    <Card.Text>
                                        Batter
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Dark} />
                                <Card.Body>
                                    <Card.Title>SHAI HOPE</Card.Title>
                                    <Card.Text>
                                        Batter
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Dark} />
                                <Card.Body>
                                    <Card.Title>SWASTIK CHHIKARA</Card.Title>
                                    <Card.Text>
                                        Batter
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Abishek} />
                                <Card.Body>
                                    <Card.Title>ABISHEK POREL</Card.Title>
                                    <Card.Text>
                                        Batter
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Dark} />
                                <Card.Body>
                                    <Card.Title>HARRY BROOK</Card.Title>
                                    <Card.Text>
                                        Batter
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Dark} />
                                <Card.Body>
                                    <Card.Title>RICKY BHUI</Card.Title>
                                    <Card.Text>
                                        Batter
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Dark} />
                                <Card.Body>
                                    <Card.Title>KUMAR KUSHAGRA</Card.Title>
                                    <Card.Text>
                                        Batter
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Dark} />
                                <Card.Body>
                                    <Card.Title>TRISTAN STUBBS</Card.Title>
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
                                <Card.Img variant="top" src={Axar} />
                                <Card.Body>
                                    <Card.Title>AXAR PATEL</Card.Title>
                                    <Card.Text>
                                        All-Rounder
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Lalit} />
                                <Card.Body>
                                    <Card.Title>LALIT YADAV</Card.Title>
                                    <Card.Text>
                                        All-rounder
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Mitchell} />
                                <Card.Body>
                                    <Card.Title>MITCHELL MARSH</Card.Title>
                                    <Card.Text>
                                        All-rounder
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Dark} />
                                <Card.Body>
                                    <Card.Title>SUMIT KUMAR</Card.Title>
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
                                <Card.Img variant="top" src={Pravin} />
                                <Card.Body>
                                    <Card.Title>PRAVIN DUBEY</Card.Title>
                                    <Card.Text>
                                        Bowler
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Dark} />
                                <Card.Body>
                                    <Card.Title>VICKY OSTWAL</Card.Title>
                                    <Card.Text>
                                        Bowler
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Anrich} />
                                <Card.Body>
                                    <Card.Title>ANRICH NORTJI</Card.Title>
                                    <Card.Text>
                                        Bowler
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Kuldeep} />
                                <Card.Body>
                                    <Card.Title>KULDEEP YADAV</Card.Title>
                                    <Card.Text>
                                        Bowler
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Lungi} />
                                <Card.Body>
                                    <Card.Title>LUNGI NGIDI</Card.Title>
                                    <Card.Text>
                                        Bowler
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Khaleel} />
                                <Card.Body>
                                    <Card.Title>KHALEEL AHMED</Card.Title>
                                    <Card.Text>
                                        Bowler
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Ishant} />
                                <Card.Body>
                                    <Card.Title>ISHANT SHARMA</Card.Title>
                                    <Card.Text>
                                        Bowler
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Dark} />
                                <Card.Body>
                                    <Card.Title>JHYE RICHARDSON</Card.Title>
                                    <Card.Text>
                                        Bowler
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Mukesh} />
                                <Card.Body>
                                    <Card.Title>MUKASH KUMAR</Card.Title>
                                    <Card.Text>
                                        Bowler
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Dark} />
                                <Card.Body>
                                    <Card.Title>RASIKH DAR</Card.Title>
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

export default Dcteam;
