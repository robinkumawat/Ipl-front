import React from 'react'
import './Adminteam.css'

function Adminteam() {



  const [match, setMatch] = useState("")
  const [teamA, setTeamA] = useState("")
  const [teamB, setTeamB] = useState("")
  const [win, setWin] = useState("")
  const [loss, setLoss] = useState("")
  const [image, setImage] = useState("")


  return (
    <div className='Adminteam'>
      <h1>Add Team</h1>
      <form action="">
        <input type="text" placeholder='No. of match' value={match} onChange={(e)=>{setMatch(e.target.value)}}/>
        <input type="text" placeholder='Team (A)' value={teamA} onChange={(e)=>{setTeamA(e.target.value)}}/>
        <input type="text" placeholder='Team (B)' value={teamB} onChange={(e)=>{setTeamB(e.target.value)}}/>
        <input type="text" placeholder='Wining team' value={win} onChange={(e)=>{setWin(e.target.value)}} />
        <input type="text" placeholder='Loss team' value={loss} onChange={(e)=>{setLoss(e.target.value)}} />
        <input type="file" onChange={(e)=>{setImage(e.target.value)}}/>
        <button onClick={
          (e)=>{e.preventDefault();
          }}>Add Product</button>
      </form>
    </div>
  )
}

export default Adminteam