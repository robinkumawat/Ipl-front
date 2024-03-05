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
                  <a href="/Csk">
                    <img src={Csk} alt="" />
                    <h3>Chennai Super Kings</h3>
                  </a>
                  <div className="trophy">
                    <a href="/Csk">
                      <img src={Csk} alt="" />
                      <img src={Tro} alt="" />
                      <div className="year">2010 | 2011 | 2018 | 2021 | 2023</div>
                    </a>
                  </div>
                </div>


              </Card>
              <Card style={{ width: '18rem' }}>
              <div className="Dc">
                  <a href="/Dc">
                    <img src={DC} alt="" />
                    <h3>Delhi Capitals</h3>
                  </a>
                  {/* <div className="trophy">
                    <a href="">
                      <img src={Csk} alt="" />
                      <img src={Tro} alt="" />
                      <div className="year">2010 | 2011 | 2018 | 2021 | 2023</div>
                    </a>
                  </div> */}
                </div>

              </Card>
              <Card style={{ width: '18rem' }}>
              <div className="GT">
                  <a href="Gt">
                    <img src={GT} alt="" />
                    <h3>Gujarat  Titans</h3>
                  </a>
                  <div className="trophy">
                    <a href="Gt">
                      <img src={GT} alt="" />
                      <img src={Tro} alt="" />
                      <div className="year"> 2022</div>
                    </a>
                  </div>
                </div>

              </Card>
              <Card style={{ width: '18rem' }}>
              <div className="KKR">
                  <a href="Kkr">
                    <img src={KKR} alt="" />
                    <h3>Kolkata knight Riders</h3>
                  </a>
                  <div className="trophy">
                    <a href="Kkr">
                      <img src={KKR} alt="" />
                      <img src={Tro} alt="" />
                      <div className="year">2012 | 2014 </div>
                    </a>
                  </div>
                </div>

              </Card>
              <Card style={{ width: '18rem' }}>
              <div className="LSG">
                  <a href="Lsg">
                    <img src={LSG} alt="" />
                    <h3>Lucknow Super Giants</h3>
                  </a>
                  {/* <div className="trophy">
                    <a href="">
                      <img src={Csk} alt="" />
                      <img src={Tro} alt="" />
                      <div className="year">2010 | 2011 | 2018 | 2021 | 2023</div>
                    </a>
                  </div> */}
                </div>

              </Card>
              <Card style={{ width: '18rem' }}>
              <div className="MI">
                  <a href="/Mi">
                    <img src={MI} alt="" />
                    <h3>Mumbia Indians</h3>
                  </a>
                  <div className="trophy">
                    <a href="Mi">
                      <img src={MI} alt="" />
                      <img src={Tro} alt="" />
                      <div className="year">2013 | 2015 | 2017 | 2019 | 2020</div>
                    </a>
                  </div>
                </div>

              </Card>
              <Card style={{ width: '18rem' }}>
              <div className="PK">
                  <a href="Pk">
                    <img src={PK} alt="" />
                    <h3>Punjab Kings</h3>
                  </a>
                  {/* <div className="trophy">
                    <a href="">
                      <img src={PK} alt="" />
                      <img src={Tro} alt="" />
                      <div className="year">2010 | 2011 | 2018 | 2021 | 2023</div>
                    </a>
                  </div> */}
                </div>

              </Card>
              <Card style={{ width: '18rem' }}>
              <div className="RR">
                  <a href="Rr">
                    <img src={RR} alt="" />
                    <h3>Rajasthan Royals</h3>
                  </a>
                  <div className="trophy">
                    <a href="Rr">
                      <img src={RR} alt="" />
                      <img src={Tro} alt="" />
                      <div className="year">2008 </div>
                    </a>
                  </div>
                </div>

              </Card>
              <Card style={{ width: '18rem' }}>
              <div className="RCB">
                  <a href="Rcb">
                    <img src={RCB} alt="" />
                    <h3>Royal Challengers Bangalore</h3>
                  </a>
                  {/* <div className="trophy">
                    <a href="">
                      <img src={Csk} alt="" />
                      <img src={Tro} alt="" />
                      <div className="year">2010 | 2011 | 2018 | 2021 | 2023</div>
                    </a>
                  </div> */}
                </div>

              </Card>
              <Card style={{ width: '18rem' }}>
              <div className="SH">
                  <a href="Sh">
                    <img src={SH} alt="" />
                    <h3>Sunrisers Haderabad</h3>
                  </a>
                  <div className="trophy">
                    <a href="Sh">
                      <img src={SH} alt="" />
                      <img src={Tro} alt="" />
                      <div className="year">2016</div>
                    </a>
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