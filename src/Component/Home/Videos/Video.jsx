
// import React, { useState, useEffect } from 'react';
// import './video.css'

// const API_KEY = "AIzaSyBSaKhw7WnIll-NndwWx38AmlRgZpghwS8";

// function Video() {
//   const [videoList, setVideoList] = useState([]);

//   const fetchData = async () => {
//     try {
//       const response = await fetch(
//         `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=In&videoCategoryId=17&key=${API_KEY}`
//       );
      
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
      
//       const data = await response.json();
//       console.log(data)
//       setVideoList(data.items);
//     } catch (error) {
//       console.error('Error fetching data:', error);

//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div className='wapper-video'>
//       <h1> Videos</h1>
//       <ul className='videos'>
//         {videoList.map((video) => (
//           <li key={`video/${video.snippet.categoryID}/${video.id}`}>
//             <img src={video.snippet.thumbnails.medium.url}alt="" />
//             <p>{video.snippet.title}</p>
            
//             {/* You can add more details or customize the rendering here */}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Video;













import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Video = () => {


  const [matches , setMatches] = useState([])

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
        setMatches(response.data.res.matches)
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(); 

  }, []); 


  return (
    <div>
    <h1>Live Scores</h1>
    <div>
      {matches.map((match, index) => (
        <div key={index}>
          <p>{match?.teams?.t1?.name} vs {match?.teams?.t2?.name}</p>
          <p>{match?.teams?.t1?.score} vs {match?.teams?.t2?.score}</p>

          <p>Status: {match?.matchStatus}</p>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Video;









// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Video = () => {
//   const [matches, setMatches] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const options = {
//         method: 'GET',
//         url: 'https://free-cricket-live-score1.p.rapidapi.com/matches',
//         headers: {
//           'X-RapidAPI-Key': '2fadd9b56cmsh2dd5daac18c27c9p173083jsnd7f80593ae3a',
//           'X-RapidAPI-Host': 'free-cricket-live-score1.p.rapidapi.com'
//         }
//       };

//       try {
//         const response = await axios.request(options);
//         console.log(response.data.res.matches);
//         setMatches(response.data.res.matches);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();

//     // Reload the page after 1 second
//     const reloadTimeout = setTimeout(() => {
//       window.location.reload();
//     }, 40000);

//     // Clear the timeout when the component is unmounted
//     return () => clearTimeout(reloadTimeout);
//   }, []);

//   return (
//     <div>
//       <h1>Live Scores</h1>
//       <div>
//         {matches.map((match, index) => (
//           <div key={index}>
//             <p>{match?.teams?.t1?.name} vs {match?.teams?.t2?.name}</p>
//             <p>Score: {match?.teams?.t2?.score}</p>
//             <p>Status: {match?.matchStatus}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Video;

