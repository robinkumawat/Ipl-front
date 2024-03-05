import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import './mi.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MI from '../Image/MI-logo.png'
import Dark from '../Image/defalt-palyer.png'
import Card from 'react-bootstrap/Card';
import First from '../Image/First-slider.jpeg'
import Rohit from '../Miimage/Rohit.png'
import Ishan from '../Miimage/Ishan.png'
import Dewald from '../Miimage/Dewald.png'
import Suryakumar from '../Miimage/Suryakumar.png'
import Tilak from '../Miimage/Tilak.png'
import Tim from '../Miimage/Tim.png'
import Vishnu from '../Miimage/Vishnu.png'
import Arjun from '../Miimage/Arjun.png'
import Shams from '../Miimage/Shams.png'
import Nehal from '../Miimage/Nehal.png'
import Piyush from '../Miimage/Piyush.png'
import Kumar from '../Miimage/Kumar.png'
import Akash from '../Miimage/Akash.webp'
import Jason from '../Miimage/Jason.png'





const Miteam = () => {
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
                                <a href={card.link} target="_blank" rel="noopener noreferrer">
                                    <img src={card.image} alt={`Card ${index}`} />
                                </a>
                            </div>
                        ))}
                    </Slider>
                        </div>
                </Container>
                <div className="team-rec">
                    <div className="logo">
                        <img src={MI} alt="" />
                    </div>
                    <div className="line">
                        |
                    </div>
                    <div className="team-name">
                        <h3>MUMBIA INDIANS</h3>
                        <p>2013 , 2015 , 2017 , 2019 , 2020</p>
                    </div>
                    <div className="team-dea">
                        <p>OWNER - Indiawin sports PVT. Ltd.</p>
                        <p>COACH - Mark Boucher</p>
                        <p>VENUE - Wankhede Stadium</p>
                        <p>CAPTAIN - Hardik pandya</p>
                    </div>
                </div>
            </div>
            <section>
                <Container>
                    <div className="cskteam">
                        <h4>Batters</h4>
                        <div className="csk-team">
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Ishan} />
                                <Card.Body>
                                    <Card.Title>ISHAN</Card.Title>
                                    <Card.Text>
                                        Wk keeper-Batter
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Rohit} />
                                <Card.Body>
                                    <Card.Title>ROHIT SHARMA</Card.Title>
                                    <Card.Text>
                                        Batter
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Dewald} />
                                <Card.Body>
                                    <Card.Title>DEWALD BREVIS</Card.Title>
                                    <Card.Text>
                                       Batter
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Suryakumar} />
                                <Card.Body>
                                    <Card.Title>SURYAKUMAR YADAV</Card.Title>
                                    <Card.Text>
                                       Batter
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Tilak} />
                                <Card.Body>
                                    <Card.Title>N . TILAK VARMA</Card.Title>
                                    <Card.Text>
                                       Batter
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Tim} />
                                <Card.Body>
                                    <Card.Title>TIM DAVID</Card.Title>
                                    <Card.Text>
                                       Batter
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Vishnu} />
                                <Card.Body>
                                    <Card.Title>VISHNU VINOD</Card.Title>
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
                                    <Card.Title>HARDIK PANDYA</Card.Title>
                                    <Card.Text>
                                        All-Rounder , 
                                        <span>(CAPTAIN)</span>
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Dark} />
                                <Card.Body>
                                    <Card.Title>MOHAMMAD NABI</Card.Title>
                                    <Card.Text>
                                        All-rounder
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Arjun} />
                                <Card.Body>
                                    <Card.Title>ARJUN TENDULKAR</Card.Title>
                                    <Card.Text>
                                       All-rounder
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Dark} />
                                <Card.Body>
                                    <Card.Title>ROMARIO SHEPHERD</Card.Title>
                                    <Card.Text>
                                       All-rounder
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Shams} />
                                <Card.Body>
                                    <Card.Title>SHAMS MULANI</Card.Title>
                                    <Card.Text>
                                       All-rounder
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Nehal} />
                                <Card.Body>
                                    <Card.Title>NEHAL WADHERA</Card.Title>
                                    <Card.Text>
                                       All-rounder
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Dark} />
                                <Card.Body>
                                    <Card.Title>GERALD COETZEE</Card.Title>
                                    <Card.Text>
                                        All-rounder
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Dark} />
                                <Card.Body>
                                    <Card.Title>ANSHUL KAMBOL</Card.Title>
                                    <Card.Text>
                                        All-rounder
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Dark} />
                                <Card.Body>
                                    <Card.Title>NAMAN DHIR</Card.Title>
                                    <Card.Text>
                                        All-rounder
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Dark} />
                                <Card.Body>
                                    <Card.Title>SHIVALIK SHARMA</Card.Title>
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
                                    <Card.Title>JASPRIT BUMRAH</Card.Title>
                                    <Card.Text>
                                        Bowler
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Piyush} />
                                <Card.Body>
                                    <Card.Title>PIYUSH CHAWLA</Card.Title>
                                    <Card.Text>
                                        Bowler
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Kumar} />
                                <Card.Body>
                                    <Card.Title>KUMAR KARTIKEYA SINGH</Card.Title>
                                    <Card.Text>
                                       Bowler
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Akash} />
                                <Card.Body>
                                    <Card.Title>AKASH MADHWAL</Card.Title>
                                    <Card.Text>
                                       Bowler
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Jason} />
                                <Card.Body>
                                    <Card.Title>JASON BEHRENDORFF</Card.Title>
                                    <Card.Text>
                                       Bowler
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Dark} />
                                <Card.Body>
                                    <Card.Title>DILSHAN MADUSHANKA</Card.Title>
                                    <Card.Text>
                                       Bowler
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Dark} />
                                <Card.Body>
                                    <Card.Title>SHREYAS GOPAL</Card.Title>
                                    <Card.Text>
                                        Bowers
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Dark} />
                                <Card.Body>
                                    <Card.Title>NUWAN THUSHARA</Card.Title>
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

export default Miteam;
