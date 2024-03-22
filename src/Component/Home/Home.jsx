import Carousel from 'react-bootstrap/Carousel';
import First from '../Image/First-slider.jpeg'
import Second from '../Image/Sec-slider.jpeg'
// import Third from '../Image/Third-slider.jpg'
import Forth from '../Image/Forth-slider.jpg'
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';
import './home.css'
// import NewsComp from '../News/News';
import NewsComponent from '../News/NewsComponent/NewsComponent';
// import Video from './Videos/Video';
// import Score from '../Home/Scores/Score'
import Video from '../Home/Scores/Score';
import Main from '../Image/mainlogo.jpeg'
 

function Home() {


    return (
        <>
            <div className="home">
                <Carousel data-bs-theme="dark">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Main}
                            alt="First slide"
                        />
                    </Carousel.Item>
                   
                </Carousel>
            </div>

            {/* ..........Magic Moments............... */}

            {/* <div className="slider-sec">
                <div className="latest">
                    <h3>Magic moments</h3>
                    <Button href='/Video'>Show more</Button>
                </div>
                <Container>
                    <div className="card-moment">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={First} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={Second} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={First} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </Container>
            </div> */}

            {/* ............Latest videos............. */}


            <div className="latest-sec">
                
                <Container>
            
                    <Video/>
            
                </Container>
            </div>

            {/* .....................Point Table............... */}
            
            {/* <div className="point-table">
            <div className="latest">
                   <h3>Point Table</h3>
                    <Button>Show more</Button>
                   </div>
                <Container>
                <div className="all-team">
                    <div className="csk">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={First} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={First} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={First} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={First} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </div>
                </div>
                </Container>
            </div> */}

            {/* .............latest video .......... */}
           
            <div className="slider-sec">
                <div className="latest">
                    <h3>Crickets  News</h3>
                    <Button href='/News'>Show more</Button>
                </div>
                {/* {error && <p> {error} </p>} */}
                <Container>
                    <div className="card-moment">
                            <NewsComponent maxCardsToShow={4} />
                        
                    </div>
                </Container>
            </div>
            

        </>
    );
}

export default Home;