import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import './cskteam.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import KKR from '../Image/KKR-logo.png'
import Mcsk from '../Image/Mcsk.png'
import Dark from '../Image/defalt-palyer.png'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import First from '../Image/First-slider.jpeg'
import Nitish from '../Kkrimage/Nitish.png'
import Rinku from '../Kkrimage/Rinku.png'
import Rahmanullah from '../Kkrimage/Rahmanullah.png'
import Shreyas from '../Kkrimage/Shreyas.png'
import Jason from '../Kkrimage/Jason.png'
import Anukul from '../Kkrimage/Anukul.png'
import Andre from '../Kkrimage/Andre.png'
import Venkatesh from '../Kkrimage/Venkatesh.png'
import Suyash from '../Kkrimage/Suyash.png'
import Harshit from '../Kkrimage/Sunil.png'
import Vaibhav from '../Kkrimage/Vaibhav.png'
import Varun from '../Kkrimage/Varun.png'
import Sunil from '../Kkrimage/Sunil.png'





const Kkrteam = () => {
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
                        <img src={KKR} alt="" />
                    </div>
                    <div className="line">
                        |
                    </div>
                    <div className="team-name">
                        <h3>KOLKATA KNIGHT RIDERS </h3>
                        <p>2012 , 2014 </p>
                    </div>
                    <div className="team-dea">
                        <p>OWNER - Knight Riders Sports Private Ltd.</p>
                        <p>COACH - Chandrakant Pandit</p>
                        <p>VENUE - Eden Gargens</p>
                        <p>CAPTAIN - Shreyas Iyer</p>
                    </div>
                </div>
            </div>
            <section>
                <Container>
                    <div className="cskteam">
                        <h4>Batters</h4>
                        <div className="csk-team">
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Shreyas} />
                                <Card.Body>
                                    <Card.Title>SHREYAS IYER</Card.Title>
                                    <Card.Text>
                                        Batter
                                        <span>CAPTAIN</span>
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Nitish} />
                                <Card.Body>
                                    <Card.Title>NITISH RANA</Card.Title>
                                    <Card.Text>
                                        Batter
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Rinku} />
                                <Card.Body>
                                    <Card.Title>RINKU SINGH</Card.Title>
                                    <Card.Text>
                                       Batter
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Rahmanullah} />
                                <Card.Body>
                                    <Card.Title>RAHMANULLAH GURBAZ</Card.Title>
                                    <Card.Text>
                                       Batter
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Dark} />
                                <Card.Body>
                                    <Card.Title>SHERFANE RUTHERFORD</Card.Title>
                                    <Card.Text>
                                       Batter
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Dark} />
                                <Card.Body>
                                    <Card.Title>K.L BHARAT</Card.Title>
                                    <Card.Text>
                                       Batter
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Dark} />
                                <Card.Body>
                                    <Card.Title>MANISH PANDEY</Card.Title>
                                    <Card.Text>
                                        Batter
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Jason} />
                                <Card.Body>
                                    <Card.Title>JASON ROY</Card.Title>
                                    <Card.Text>
                                        Batter
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Dark} />
                                <Card.Body>
                                    <Card.Title>ANGKRISH RAGHUVANSHI</Card.Title>
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
                                <Card.Img variant="top" src={Anukul} />
                                <Card.Body>
                                    <Card.Title>ANUKUL ROY</Card.Title>
                                    <Card.Text>
                                        All-Rounder
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Dark} />
                                <Card.Body>
                                    <Card.Title>RAMANDEEP SINGH </Card.Title>
                                    <Card.Text>
                                        All-rounder
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Andre} />
                                <Card.Body>
                                    <Card.Title>ANDRA RUSSELL</Card.Title>
                                    <Card.Text>
                                       All-rounder
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Venkatesh} />
                                <Card.Body>
                                    <Card.Title>VENKATESH IYER</Card.Title>
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
                                <Card.Img variant="top" src={Suyash} />
                                <Card.Body>
                                    <Card.Title>SUYASH SHARMA</Card.Title>
                                    <Card.Text>
                                        Bowler
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Dark} />
                                <Card.Body>
                                    <Card.Title>MUJEEB UR RAHMAN</Card.Title>
                                    <Card.Text>
                                        Bowler
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Dark} />
                                <Card.Body>
                                    <Card.Title>GUS ATKINSON</Card.Title>
                                    <Card.Text>
                                       Bowler
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Dark} />
                                <Card.Body>
                                    <Card.Title>SAKIB HUSSAIN</Card.Title>
                                    <Card.Text>
                                       Bowler
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Harshit} />
                                <Card.Body>
                                    <Card.Title>HARSHIT RANA</Card.Title>
                                    <Card.Text>
                                       Bowler
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Sunil} />
                                <Card.Body>
                                    <Card.Title>SUNIL NARINE</Card.Title>
                                    <Card.Text>
                                       Bowler
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Vaibhav} />
                                <Card.Body>
                                    <Card.Title>VAIBHAV aRORA</Card.Title>
                                    <Card.Text>
                                        Bowler
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Varun} />
                                <Card.Body>
                                    <Card.Title>VARUN CHAKARAVARTHY</Card.Title>
                                    <Card.Text>
                                        Bowler
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Dark} />
                                <Card.Body>
                                    <Card.Title>MITCHELL STARC</Card.Title>
                                    <Card.Text>
                                        Bowler
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Dark} />
                                <Card.Body>
                                    <Card.Title>CHETAN SAKARIYA</Card.Title>
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

export default Kkrteam;
