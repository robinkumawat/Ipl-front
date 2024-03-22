import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import './mi.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import RR from '../Image/RR-logo.png'
import Dark from '../Image/defalt-palyer.png'
import Card from 'react-bootstrap/Card';
// import First from '../Image/First-slider.jpeg'
import Sanju from '../Rrimage/Sanju.png'
import Jos from '../Rrimage/Jos.png'
import Shimron from '../Rrimage/Shimron.png'
import Yashasvi from '../Rrimage/Yashasvi.png'
import Dhruv from '../Rrimage/Dhruv.png'
import Riyan from '../Rrimage/Riyan.png'
import Kunal from '../Rrimage/Kunal.png'
import Donovan from '../Rrimage/Donovan.png'
import Ravichandran from '../Rrimage/Ravichandran.png'
import Kuldeep from '../Rrimage/kuldeep.png'
import Navdeep from '../Rrimage/Navdeep.png'
import Sandeep from '../Rrimage/Sandeep.png'
import Trent from '../Rrimage/Trent.png'
import Yuzvendra from '../Rrimage/Yuzvendra.png'
import Adam from '../Rrimage/Adam.png'





const Rrteam = () => {
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
                        <img src={RR} alt="" />
                    </div>
                    <div className="line">
                        |
                    </div>
                    <div className="team-name">
                        <h3>RAJASTHAN ROYALS</h3>
                        <p> 2008</p>
                    </div>
                    <div className="team-dea">
                        <p>OWNER - The Royals Sports Group </p>
                        <p>COACH - Kumar Sangakkara</p>
                        <p>VENUE - Sawai Mansingh Stadium </p>
                        <p>CAPTAIN - Sanju Samson</p>
                    </div>
                </div>
            </div>
            <section>
                <Container>
                    <div className="cskteam">
                        <h4>Batters</h4>
                        <div className="csk-team">
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Sanju} />
                                <Card.Body>
                                    <Card.Title>SANJU SAMSON</Card.Title>
                                    <Card.Text>
                                        Wk keeper-Batter , 
                                        <span>(CAPTAIN)</span>
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Jos} />
                                <Card.Body>
                                    <Card.Title>JOS BUTTLER</Card.Title>
                                    <Card.Text>
                                        Batter ,
                                        {/* <span>CAPTAIN</span> */}
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Shimron} />
                                <Card.Body>
                                    <Card.Title>SHIMRON HETMYER</Card.Title>
                                    <Card.Text>
                                       Batter
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Yashasvi} />
                                <Card.Body>
                                    <Card.Title>YASHASVI JAISWAL</Card.Title>
                                    <Card.Text>
                                       Batter
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Dhruv} />
                                <Card.Body>
                                    <Card.Title>DHRUV JUREL</Card.Title>
                                    <Card.Text>
                                       Batter
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Riyan} />
                                <Card.Body>
                                    <Card.Title>RIYAN PARAG</Card.Title>
                                    <Card.Text>
                                       Batter
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Kunal} />
                                <Card.Body>
                                    <Card.Title>KUNAL RATHORE</Card.Title>
                                    <Card.Text>
                                        Batter
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Donovan} />
                                <Card.Body>
                                    <Card.Title>DONOVAN FERREIRA</Card.Title>
                                    <Card.Text>
                                        Batter
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Dark} />
                                <Card.Body>
                                    <Card.Title>ROVMAN POWELL</Card.Title>
                                    <Card.Text>
                                        Batter
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Dark} />
                                <Card.Body>
                                    <Card.Title>SHUBHAM DUBEY</Card.Title>
                                    <Card.Text>
                                        Batter
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Dark} />
                                <Card.Body>
                                    <Card.Title>TOM KOHLER-CADMORE</Card.Title>
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
                                <Card.Img variant="top" src={Ravichandran} />
                                <Card.Body>
                                    <Card.Title>RAVICHANDRAN ASHWIN</Card.Title>
                                    <Card.Text>
                                        All-Rounder
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Dark} />
                                <Card.Body>
                                    <Card.Title>ABID MUSHTAQ</Card.Title>
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
                                    <Card.Title>AVESH KHAN</Card.Title>
                                    <Card.Text>
                                        Bowler
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Kuldeep} />
                                <Card.Body>
                                    <Card.Title>KULDEEP SEN</Card.Title>
                                    <Card.Text>
                                        Bowler
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Navdeep} />
                                <Card.Body>
                                    <Card.Title>NAVDEEP SAINI</Card.Title>
                                    <Card.Text>
                                       Bowler
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Dark} />
                                <Card.Body>
                                    <Card.Title>PRASIDH KRISHNA</Card.Title>
                                    <Card.Text>
                                       Bowler
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Sandeep} />
                                <Card.Body>
                                    <Card.Title>SANDEEP SHARMA</Card.Title>
                                    <Card.Text>
                                       Bowler
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Trent} />
                                <Card.Body>
                                    <Card.Title>TRENT BOULT</Card.Title>
                                    <Card.Text>
                                       Bowler
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Yuzvendra} />
                                <Card.Body>
                                    <Card.Title>YUZVENDRA CHAHAL</Card.Title>
                                    <Card.Text>
                                        Bowler
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                           
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Adam} />
                                <Card.Body>
                                    <Card.Title>ADAM ZAMPA</Card.Title>
                                    <Card.Text>
                                        Bowler
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={Dark} />
                                <Card.Body>
                                    <Card.Title>NANDRE BURGER</Card.Title>
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

export default Rrteam;
