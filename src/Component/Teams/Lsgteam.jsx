import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import './cskteam.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import LSG from '../Image/LSG-logo.png'
import Mcsk from '../Image/Mcsk.png'
import Dark from '../Image/defalt-palyer.png'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import First from '../Image/First-slider.jpeg'
import Kl from '../Lsgimage/Kl.png'
import Quinton from '../Lsgimage/Quinton.png'
import Nicholas from '../Lsgimage/Nicholas.png'
import Ayush from '../Lsgimage/Ayaush.png'
import Deepak from '../Lsgimage/Deepak.png'
import Krishnappa from '../Lsgimage/Krishnappa.png'
import Krunal from '../Lsgimage/Krunal.png'
import Kyle from '../Lsgimage/Kyle.png'
import Marcus from '../Lsgimage/Marcus.png'
 import Prerak from '../Lsgimage/Prerak.png'
 import Yudhvir from '../Lsgimage/Yudhvir.png'
 import Mark from '../Lsgimage/Mark.png'
 import Mayank from '../Lsgimage/Mayank.png'
 import Mohsin from '../Lsgimage/Mohsin.png'
 import Ravi from '../Lsgimage/Ravi.png'
 import Yash from '../Lsgimage/Yash.png'
 import Amit from '../Lsgimage/Amit.png'
 import Naveen from '../Lsgimage/Naveen.png'






const Lsgteam = () => {
    const cards = [
        {

            image: 'src/Component/Image/MI-logo.png',
            href: '/Mi'

        },
        {

            image: 'src/Component/Image/CSK-logo.png',
            href: '/Csk'
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
                                    <button onClick={() => handleReadMore(card.href)}>
                                        <img src={card.image} alt={`Card ${index}`} />
                                    </button>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </Container>
                <div className="team-rec">
                    <div className="logo">
                        <img src={LSG} alt="" />
                    </div>
                    <div className="line">
                        |
                    </div>
                    <div className="team-name">
                        <h3>LUCKNOW SUPER GIANTS </h3>
                        {/* <p>2010 , 2011 , 2018 , 2021 , 2023</p> */}
                    </div>
                    <div className="team-dea">
                        <p>OWNER - RPSG Group</p>
                        <p>COACH - Justin Langer</p>
                        <p>VENUE - Brsabv Ekana Cricket Stadium</p>
                        <p>CAPTAIN - KL Rahul</p>
                    </div>
                </div>
            </div>
            <section>
                <Container>
                    <div className="cskteam">
                        <h4>Batters</h4>
                        <div className="csk-team">
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Kl} />
                                <Card.Body>
                                    <Card.Title>KL RAHUL </Card.Title>
                                    <Card.Text>
                                        Batter
                                        <span>CAPTAIN</span>
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Quinton} />
                                <Card.Body>
                                    <Card.Title>QUINTON DE KOCK</Card.Title>
                                    <Card.Text>
                                       Wk-keeper-Batter
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Dark} />
                                <Card.Body>
                                    <Card.Title>DEVDUTT PADIKKAL</Card.Title>
                                    <Card.Text>
                                       Batter
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Nicholas} />
                                <Card.Body>
                                    <Card.Title>NICHOLAS POORAN</Card.Title>
                                    <Card.Text>
                                       Batter
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Dark} />
                                <Card.Body>
                                    <Card.Title>ASHTON TURNER</Card.Title>
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
                                <Card.Img variant="top" src={Ayush} />
                                <Card.Body>
                                    <Card.Title>AYUSH BADONI</Card.Title>
                                    <Card.Text>
                                        All-Rounder
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Deepak} />
                                <Card.Body>
                                    <Card.Title>DEEPAK HOODA</Card.Title>
                                    <Card.Text>
                                        All-rounder
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Krishnappa} />
                                <Card.Body>
                                    <Card.Title>KRISHNAPPA GOWTHAM</Card.Title>
                                    <Card.Text>
                                       All-rounder
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Krunal} />
                                <Card.Body>
                                    <Card.Title>KRUNAL PANDYA</Card.Title>
                                    <Card.Text>
                                       All-rounder
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Kyle} />
                                <Card.Body>
                                    <Card.Title>KYLE MAYERS</Card.Title>
                                    <Card.Text>
                                       All-rounder
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Marcus} />
                                <Card.Body>
                                    <Card.Title>MARCUS STOINIS</Card.Title>
                                    <Card.Text>
                                       All-rounder
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Dark} />
                                <Card.Body>
                                    <Card.Title>MOHD.ARSHAD KHAN</Card.Title>
                                    <Card.Text>
                                        All-rounder
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Prerak} />
                                <Card.Body>
                                    <Card.Title>PRERAK MANKAD</Card.Title>
                                    <Card.Text>
                                        All-rounder
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Yudhvir} />
                                <Card.Body>
                                    <Card.Title>YUDHVIR SINGH</Card.Title>
                                    <Card.Text>
                                        All-rounder
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Dark} />
                                <Card.Body>
                                    <Card.Title>ARSHIN KULKARNI</Card.Title>
                                    <Card.Text>
                                        All-rounder
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Dark} />
                                <Card.Body>
                                    <Card.Title>DAVID WILLEY</Card.Title>
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
                                    <Card.Title>SHIVAM MAVI</Card.Title>
                                    <Card.Text>
                                        Bowler
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Mark} />
                                <Card.Body>
                                    <Card.Title>MARK WOOD</Card.Title>
                                    <Card.Text>
                                        Bowler
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Mayank} />
                                <Card.Body>
                                    <Card.Title>MAYANK YADAV</Card.Title>
                                    <Card.Text>
                                       Bowler
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Mohsin} />
                                <Card.Body>
                                    <Card.Title>MOHSIN KHAN</Card.Title>
                                    <Card.Text>
                                       Bowler
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Ravi} />
                                <Card.Body>
                                    <Card.Title>RAVI BISHNOI</Card.Title>
                                    <Card.Text>
                                       Bowler
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Yash} />
                                <Card.Body>
                                    <Card.Title>YASH THAKUR</Card.Title>
                                    <Card.Text>
                                       Bowler
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Amit} />
                                <Card.Body>
                                    <Card.Title>AMIT MISHRA</Card.Title>
                                    <Card.Text>
                                        Bowler
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Naveen} />
                                <Card.Body>
                                    <Card.Title>NAVEEN UL HAQ</Card.Title>
                                    <Card.Text>
                                        Bowler
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Dark} />
                                <Card.Body>
                                    <Card.Title>M. SIDDHARTH</Card.Title>
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

export default Lsgteam;
