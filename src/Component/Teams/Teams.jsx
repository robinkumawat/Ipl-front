import React from 'react'
import Container from 'react-bootstrap/Container';
import './teams.css'
// import CardHeader from 'react-bootstrap/esm/CardHeader';
// import Header from '../Header/Header'
import IPL from '../Image/team-ipl.png'
import Card from 'react-bootstrap/Card'
import Csk from '../Image/CSK-logo.png'
import DC from '../Image/DC-logo.png'
import GT from '../Image/GT-logo.png'
import KKR from '../Image/KKR-logo.png'
import LSG from '../Image/LSG-logo.png'
import MI from '../Image/MI-logo.png'
import PK from '../Image/PK-logo.png'
import RR from '../Image/RR-logo.png'
import RCB from '../Image/RCB-logo.png'
import SH from '../Image/SH-logo.png'
import Tro from '../Image/Teams-trophy.svg'
import { Link } from 'react-router-dom';


function Teams() {
  return (
    <>
    
      <div className='Team'>
        <img src={IPL} alt="" />
        <Container>
          <div className="all-teams">
            <div className="team">
              <Card style={{ width: '18rem' }}>
                <div className="Csk">
                  <Link to="/Csk">
                    <img src={Csk} alt="" />
                    <h3>Chennai Super Kings</h3>
                  </Link>
                  <div className="trophy">
                    <Link to="/Csk">
                      <img src={Csk} alt="" />
                      <img src={Tro} alt="" />
                      <div className="year">2010 | 2011 | 2018 | 2021 | 2023</div>
                    </Link>
                  </div>
                </div>


              </Card>
              <Card style={{ width: '18rem' }}>
              <div className="Dc">
                  <Link to="/Dc">
                    <img src={DC} alt="" />
                    <h3>Delhi Capitals</h3>
                  </Link>
                  {/* <div className="trophy">
                    <link to="">
                      <img src={Csk} alt="" />
                      <img src={Tro} alt="" />
                      <div className="year">2010 | 2011 | 2018 | 2021 | 2023</div>
                    </link>
                  </div> */}
                </div>

              </Card>
              <Card style={{ width: '18rem' }}>
              <div className="GT">
                  <Link to="/Gt">
                    <img src={GT} alt="" />
                    <h3>Gujarat  Titans</h3>
                  </Link>
                  <div className="trophy">
                    <Link to="/Gt">
                      <img src={GT} alt="" />
                      <img src={Tro} alt="" />
                      <div className="year"> 2022</div>
                    </Link>
                  </div>
                </div>

              </Card>
              <Card style={{ width: '18rem' }}>
              <div className="KKR">
                  <Link to="/Kkr">
                    <img src={KKR} alt="" />
                    <h3>Kolkata knight Riders</h3>
                  </Link>
                  <div className="trophy">
                    <Link to="Kkr">
                      <img src={KKR} alt="" />
                      <img src={Tro} alt="" />
                      <div className="year">2012 | 2014 </div>
                    </Link>
                  </div>
                </div>

              </Card>
              <Card style={{ width: '18rem' }}>
              <div className="LSG">
                  <Link to="/Lsg">
                    <img src={LSG} alt="" />
                    <h3>Lucknow Super Giants</h3>
                  </Link>
                  {/* <div className="trophy">
                    <link to="">
                      <img src={Csk} alt="" />
                      <img src={Tro} alt="" />
                      <div className="year">2010 | 2011 | 2018 | 2021 | 2023</div>
                    </link>
                  </div> */}
                </div>

              </Card>
              <Card style={{ width: '18rem' }}>
              <div className="MI">
                  <Link to="/Mi">
                    <img src={MI} alt="" />
                    <h3>Mumbia Indians</h3>
                  </Link>
                  <div className="trophy">
                    <Link to="/Mi">
                      <img src={MI} alt="" />
                      <img src={Tro} alt="" />
                      <div className="year">2013 | 2015 | 2017 | 2019 | 2020</div>
                    </Link>
                  </div>
                </div>

              </Card>
              <Card style={{ width: '18rem' }}>
              <div className="PK">
                  <Link to="/Pk">
        link           <img src={PK} alt="" />
                    <h3>Punjab Kings</h3>
                  </Link>
                  {/* <div className="trophy">
                    <link to="">
                      <img src={PK} alt="" />
                      <img src={Tro} alt="" />
                      <div className="year">2010 | 2011 | 2018 | 2021 | 2023</div>
                    </link>
                  </div> */}
                </div>

              </Card>
              <Card style={{ width: '18rem' }}>
              <div className="RR">
                  <Link to="/Rr">
                    <img src={RR} alt="" />
                    <h3>Rajasthan Royals</h3>
                  </Link>
                  <div className="trophy">
                    <Link to="/Rr">
                      <img src={RR} alt="" />
                      <img src={Tro} alt="" />
                      <div className="year">2008 </div>
                    </Link>
                  </div>
                </div>

              </Card>
              <Card style={{ width: '18rem' }}>
              <div className="RCB">
                  <Link to="/Rcb">
                    <img src={RCB} alt="" />
                    <h3>Royal Challengers Bangalore</h3>
                  </Link>
                  {/* <div className="trophy">
                    <link to="">
                      <img src={Csk} alt="" />
                      <img src={Tro} alt="" />
                      <div className="year">2010 | 2011 | 2018 | 2021 | 2023</div>
                    </link>
                  </div> */}
                </div>

              </Card>
              <Card style={{ width: '18rem' }}>
              <div className="SH">
                  <Link to="/Sh">
                    <img src={SH} alt="" />
                    <h3>Sunrisers Haderabad</h3>
                  </Link>
                  <div className="trophy">
                    <Link to="/Sh">
                      <img src={SH} alt="" />
                      <img src={Tro} alt="" />
                      <div className="year">2016</div>
                    </Link>
                  </div>
                </div>

              </Card>

            </div>
          </div>
        </Container>



      </div>
    </>
  )
}

export default Teams