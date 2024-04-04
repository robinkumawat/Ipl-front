import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import './mi.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import GT from '../Image/GT-logo.png'
import Dark from '../Image/defalt-palyer.png'
import Card from 'react-bootstrap/Card';
import First from '../Image/First-slider.jpeg'
import David from '../Gtimage/David.png'
import Shubman from '../Gtimage/Shubman.png'
import Matthew from '../Gtimage/Wriddhiman.png'
import Wriddhiman from '../Gtimage/Wriddhiman.png'
import Kane from '../Gtimage/Kane.png'
import Abhinav from '../Gtimage/Abhinav.png'
import BSai from '../Gtimage/BSai.png'
import Darshan from '../Gtimage/Darshan.png'
import Vijay from '../Gtimage/Vijay.png'
import Jayant from '../Gtimage/Jayant.png'
import Rahul from '../Gtimage/Mohammad.png'
import Noor from '../Gtimage/Noor.png'
import Sai from '../Gtimage/Sai.png'
import Rashid from '../Gtimage/Rashid.png'
import Joshua from '../Gtimage/Joshua.png'
import Mohit from '../Gtimage/Mohit.png'
import Mohammad from '../Gtimage/Mohammad.png'
import {Link} from 'react-router-dom';







const Gteam = () => {
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
                        <img src={GT} alt="" />
                    </div>
                    <div className="line">
                        |
                    </div>
                    <div className="team-name">
                        <h3>GUJARAT TITANS</h3>
                        <p> 2022</p>
                    </div>
                    <div className="team-dea">
                        <p>OWNER - CVC Capital Partners</p>
                        <p>COACH - Ashish Nehra</p>
                        <p>VENUE - Narendra Modi Stadium</p>
                        <p>CAPTAIN - Shubman Gill</p>
                    </div>
                </div>
            </div>
            <section>
                <Container>
                    <div className="cskteam">
                        <h4>Batters</h4>
                        <div className="csk-team">
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Wriddhiman} />
                                <Card.Body>
                                    <Card.Title>WRIDDHIMAN SAHA</Card.Title>
                                    <Card.Text>
                                        Wk keeper-Batter
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Shubman} />
                                <Card.Body>
                                    <Card.Title>SHUBMAN GILL</Card.Title>
                                    <Card.Text>
                                        Batter ,
                                        <span>(CAPTAIN)</span>
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={David} />
                                <Card.Body>
                                    <Card.Title>DAVID MILLER</Card.Title>
                                    <Card.Text>
                                        Batter
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Matthew} />
                                <Card.Body>
                                    <Card.Title>MATTHEW WADE</Card.Title>
                                    <Card.Text>
                                        Batter
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Dark} />
                                <Card.Body>
                                    <Card.Title>ROBIN MINZ</Card.Title>
                                    <Card.Text>
                                        Batter
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Kane} />
                                <Card.Body>
                                    <Card.Title>KANE WILLIAMSON</Card.Title>
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
                                <Card.Img variant="top" src={Abhinav} />
                                <Card.Body>
                                    <Card.Title>ABHINAV MANOHAR</Card.Title>
                                    <Card.Text>
                                        All-Rounder
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={BSai} />
                                <Card.Body>
                                    <Card.Title>B . SAI SUDHARSAN</Card.Title>
                                    <Card.Text>
                                        All-rounder
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Darshan} />
                                <Card.Body>
                                    <Card.Title>DARSHAN NALKANDE</Card.Title>
                                    <Card.Text>
                                        All-rounder
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Vijay} />
                                <Card.Body>
                                    <Card.Title>VIJAY SHANKAR</Card.Title>
                                    <Card.Text>
                                        All-rounder
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Dark} />
                                <Card.Body>
                                    <Card.Title>AZMATULLAH OMARZAI</Card.Title>
                                    <Card.Text>
                                        All-rounder
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Dark} />
                                <Card.Body>
                                    <Card.Title>SHAHRUKH KHAN</Card.Title>
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
                                <Card.Img variant="top" src={Jayant} />
                                <Card.Body>
                                    <Card.Title>JAYANT YADAV</Card.Title>
                                    <Card.Text>
                                        Bowler
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Rahul} />
                                <Card.Body>
                                    <Card.Title>RAHUL TEWATIA</Card.Title>
                                    <Card.Text>
                                        Bowler
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Mohammad} />
                                <Card.Body>
                                    <Card.Title>MOHAMMAD SHAMI</Card.Title>
                                    <Card.Text>
                                        Bowler
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Dark} />
                                <Card.Body>
                                    <Card.Title>KARTIK TYAGI</Card.Title>
                                    <Card.Text>
                                        Bowler
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Dark} />
                                <Card.Body>
                                    <Card.Title>SUSHANT MISHRA</Card.Title>
                                    <Card.Text>
                                        Bowler
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Dark} />
                                <Card.Body>
                                    <Card.Title>SPENCER JOHNSON</Card.Title>
                                    <Card.Text>
                                        Bowler
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Noor} />
                                <Card.Body>
                                    <Card.Title>NOOR AHMAD</Card.Title>
                                    <Card.Text>
                                        Bowler
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Sai} />
                                <Card.Body>
                                    <Card.Title>SAI KISHORE</Card.Title>
                                    <Card.Text>
                                        Bowler
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Dark} />
                                <Card.Body>
                                    <Card.Title>UMESH YADAV</Card.Title>
                                    <Card.Text>
                                        Bowler
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Rashid} />
                                <Card.Body>
                                    <Card.Title>RASHID KHAN</Card.Title>
                                    <Card.Text>
                                        Bowler
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Joshua} />
                                <Card.Body>
                                    <Card.Title>JOSHUA LITTLE</Card.Title>
                                    <Card.Text>
                                        Bowler
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Mohit} />
                                <Card.Body>
                                    <Card.Title>MOHIT SHARMA</Card.Title>
                                    <Card.Text>
                                        Bowler
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Dark} />
                                <Card.Body>
                                    <Card.Title>MANAV SUTHAR</Card.Title>
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

export default Gteam;
