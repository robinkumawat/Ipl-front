
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './score.css'

const Score = () => {
  const [matches, setMatches] = useState([]);
  const [filteredMatches, setFilteredMatches] = useState([]);
  const [filter, setFilter] = useState('live'); 


  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://free-cricket-live-score1.p.rapidapi.com/matches',
        headers: {
          'X-RapidAPI-Key': '2fadd9b56cmsh2dd5daac18c27c9p173083jsnd7f80593ae3a',
          'X-RapidAPI-Host': 'free-cricket-live-score1.p.rapidapi.com'
        }
      };

     

      try {
        const response = await axios.request(options);
        console.log(response.data.res.matches);
        setMatches(response.data.res.matches);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();

    const interval = setInterval(fetchData, 30000);

    return () => clearInterval(interval);

  }, []); 

  
  useEffect(() => {
    if (filter === ' ') {
      setFilteredMatches(matches);
    } else {
      setFilteredMatches(matches.filter(match => match.matchStatus.toLowerCase() === filter));
    }
  }, [filter, matches]);

  filteredMatches

  return (
    <div className='score'>
      <h1>Score Board</h1>
      <div className='scorebutton'>
        <button onClick={() => setFilter('live')}>Live</button>
        <button onClick={() => setFilter('upcoming')}>Upcoming</button>
        <button onClick={() => setFilter('finished')}>Finished</button>
      </div>
      <div className='scoreboard'>
        {filteredMatches.map((match, index) => (
          <div className='scorecard' key={index}>
            <p>Series : {match?.srs}</p>
            <p>{match?.teams?.t1?.name} vs {match?.teams?.t2?.name}</p>
            <p>Format : {match?.format}</p>
            <p className='scorestatus'>Status: {match?.matchStatus}</p>
            <p>Matches : {match?.matchSuffix}</p>
            {match.matchStatus.toLowerCase() !== 'upcoming' &&
           ( <p>Score: {match?.teams?.t1?.sName} {match?.teams?.t1?.score} vs {match?.teams?.t2?.sName} {match?.teams?.t2?.score}</p>)}
            {match.matchStatus.toLowerCase() !== 'live' && <p>Time: {new Date(match.time * 1000).toLocaleString()}</p>}
           {match.matchStatus.toLowerCase() !== 'finished' && <p>Stadium: {match?.venue}</p>}
           {match.matchStatus.toLowerCase() === 'finished' && <p>Result : {match?.result?.message}</p> }
          </div>
        ))}
         {filter === 'live' && filteredMatches.length === 0 && <p className='scorenote'>Note : No more live matches</p>}
      </div>
    </div>
  );
};

export default Score;




// get time...........
// // Unix timestamp provided in the data structure
// var unixTimestamp = 1710579600;

// // Convert Unix timestamp to milliseconds (required by JavaScript Date object)
// var milliseconds = unixTimestamp * 1000;

// // Create a new Date object using the milliseconds
// var date = new Date(milliseconds);

// // Extract the components of the date (year, month, day, hour, minute, second)
// var year = date.getFullYear();
// var month = ("0" + (date.getMonth() + 1)).slice(-2); // Months are zero-indexed, so we add 1
// var day = ("0" + date.getDate()).slice(-2);
// var hours = ("0" + date.getHours()).slice(-2);
// var minutes = ("0" + date.getMinutes()).slice(-2);
// var seconds = ("0" + date.getSeconds()).slice(-2);

// // Format the date
// var formattedDate = year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;

// console.log(formattedDate);




















