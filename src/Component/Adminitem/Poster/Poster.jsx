import React, { useState } from 'react'
import './Adminteam.css'

function Poster() {

const [posterimg , setPosterimg ] = useState("")
const [link , setLink] =useState ("")


  return (
    <div className='Adminteam'>
       <form action="">
       <input type="file" onChange={(e)=>{setPosterimg(e.target.value)}}/>
         <input type="text" placeholder='Loss team' value={link} onChange={(e)=>{setLink(e.target.value)}} />
       </form>
    </div>
  )
}

export default Poster