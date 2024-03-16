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
 

function Home() {

//     const [articales, setArticles] = useState([]);
//     const [error, setError] = useState(null);


//     useEffect(() => {

//         const fetchData = async () => {
//             const apiKey = "006a4af7e12f4195937c1a0ae3ceb38a"

//             if (!apiKey) {
//                 console.error("API key is missing")
//             }

//             let url = `http://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${apiKey}`

//             try {
//                 let response = await fetch(url)

//                 if (!response.ok) {
//                     throw new Error(`HTTP error! Status: ${response.status}`)
//                 }
//                 let parsedData = await response.json();
//                 setArticles(parsedData.articales);
//             } catch (error) {
//                 console.error("Error fetching data" , error);
//                 setError ("Error fetching data ,Please try again later")
//             }
//         }
// fetchData();
//     } ,[])

//  const displayedArticles = articales.slice(0,3)

    return (
        <>
            <div className="home">
                <Carousel data-bs-theme="dark">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={First}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h2>Mitchell Starc becomes the most expensive player in IPL Auction history</h2>
                            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Second}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h2>Top buys from IPL Player Auction 2024</h2>
                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={First}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h2>Harshal Patel earns big, joins Punjab Kings at INR 11.75 Crore</h2>
                            {/* <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Forth}
                            alt="Forth slide"
                        />
                        <Carousel.Caption>
                            <h2>Pat Cummins hits jackpot with INR 20.5 Crore</h2>

                        </Carousel.Caption>
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