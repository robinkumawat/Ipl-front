import React, { useState } from 'react'
import './Adminteam.css'

function AdminPlayer() {

    const [captain, setCaptain] = useState("")
    const [vic, setVic] = useState("")
    const [keeper, setKeeper] = useState("")
    const [batter, setBatter] = useState("")
    const [rounder, setRounder] = useState("")
    const [bowler, setBowler] = useState("")
    const [matchbtwen, setMatchbtwen] = useState("")





    return (

        <div className='Adminteam'>
            <h1>Add Team</h1>
            <form action="">
                <input type="text" placeholder='Match btn' value={matchbtwen} onChange={(e) => { setMatchbtwen(e.target.value) }} />
                <input type="text" placeholder='Captain' value={captain} onChange={(e) => { setCaptain(e.target.value) }} />
                <input type="text" placeholder='Vic-Captain' value={vic} onChange={(e) => { setVic(e.target.value) }} />
                <input type="text" placeholder='WK keeper ' value={keeper} onChange={(e) => { setKeeper(e.target.value) }} />
                <input type="text" placeholder='Batter' value={batter} onChange={(e) => { setBatter(e.target.value) }} />
                <input type="text" placeholder='All Rounder' value={rounder} onChange={(e) => { setRounder(e.target.value) }} />
                <input type="text" placeholder='Bowler' value={bowler} onChange={(e) => { setBowler(e.target.value) }} />
                <button onClick={(e) => {
                    e.preventDefault();
                }}>Add Product</button>
            </form>
        </div>

    )
}

export default AdminPlayer