// // import React, { useState, useEffect } from 'react';

// // const Videos = () => {
// //   const [apiResponse, setApiResponse] = useState(null);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const myHeaders = new Headers();
// //         myHeaders.append("apikey", "SlUQli1fz21TjDlhrL9tESAB5HrFIr65");
// // console.log( append)
// //         const requestOptions = {
// //           method: 'GET',
// //           redirect: 'follow',
// //           headers: myHeaders,
// //         };

// //         // Replace the URL with the actual YouTube API endpoint and parameters

// //        const apiUrl = `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${apiKey}`

// //         const response = await fetch(apiUrl, requestOptions);
// //         const result = await response.json();

// //         setApiResponse(result);
// //       } catch (error) {
// //         console.log('Error fetching data:', error);
// //       }
// //     };

// //     fetchData();
// //   }, []); // Empty dependency array to ensure useEffect runs only once on component mount

// //   return (
// //     <div>
// //       <h1>YouTube API Response</h1>
// //       {apiResponse ? (
// //         <div>
// //           {apiResponse.items.slice(0, 3).map((item) => (
// //             <div key={item.id}>
// //               <h2>{item.snippet.title}</h2>
// //               <p>{item.snippet.description}</p>
// //               {/* Add other card details based on the API response */}
// //               <img
// //                 src={item.snippet.thumbnails.default.url}
// //                 alt={item.snippet.title}
// //               />
// //             </div>
// //           ))}
// //         </div>
// //       ) : (
// //         <p>Loading...</p>
// //       )}
// //     </div>
// //   );
// // };

// // export default Videos;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Videos = () => {
//   const [channelData, setChannelData] = useState(null);
//   const channelId = 'SlUQli1fz21TjDlhrL9tESAB5HrFIr65'; // Replace with the actual channel ID

//   useEffect(() => {
//     const fetchChannelData = async () => {
//       try {
//         const apiKey = 'AIzaSyC1jRrJWsT0aahOmo0OGKUDhocFTrEGBWs'; // Replace with your YouTube API key
//         const apiUrl = `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${apiKey}`;

//         const response = await axios.get(apiUrl);
//         console.log(response)
//         setChannelData(response.data.items[0]);
//       } catch (error) {
//         console.error('Error fetching channel data:', error);
//       }
//     };

//     fetchChannelData();
//   }, [channelId]);

//   return (
//     <div>
//       <h1>YouTube Channel Information</h1>
//       {channelData ? (
//         <div>
//           <h2>{channelData.snippet.title}</h2>
//           <p>{channelData.snippet.description}</p>
//           {/* Add other channel details based on the API response */}
//           <img
//             src={channelData.snippet.thumbnails.default.url}
//             alt={channelData.snippet.title}
//           />
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default Videos;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Videos = () => {
//   const [channelData, setChannelData] = useState(null);
//   const channelId = 'DpU79YLfZJM'; // Replace with the actual channel ID

//   useEffect(() => {
//     const fetchChannelData = async () => {
//       try {
//         const apiKey = 'AIzaSyC1jRrJWsT0aahOmo0OGKUDhocFTrEGBWs'; // Replace with your YouTube API key
//         const apiUrl = `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${apiKey}`;

//         const response = await axios.get(apiUrl);
//         console.log(response)
//         setChannelData(response.data.items[3]);
//       } catch (error) {
//         console.error('Error fetching channel data:', error);
//       }
//     };

//     fetchChannelData();
//   }, [channelId]);

//   return (
//     <div>
//       <h1>YouTube Channel Information</h1>
//       {channelData ? (
//         <div>
//           <h2>{channelData.snippet.title}</h2>
//           <p>{channelData.snippet.description}</p>
//           {channelData.videos && channelData.videos.map((video) => (
//             <div key={video.id}>
//               <h3>{video.snippet.title}</h3>
//               <p>{video.snippet.description}</p>
//               <img
//                 src={video.snippet.thumbnails.default.url}
//                 alt={video.snippet.title}
//               />
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default Videos;









import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Videos = () => {
  const [channelData, setChannelData] = useState(null);
  const channelId = 'SlUQli1fz21TjDlhrL9tESAB5HrFIr65'; // Replace with the actual channel ID

  useEffect(() => {
    const fetchChannelData = async () => {
      try {
        const apiKey = 'AIzaSyC1jRrJWsT0aahOmo0OGKUDhocFTrEGBWs'; // Replace with your YouTube API key
        const apiUrl = `https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics&id=${channelId}&key=${apiKey}`;

        const response = await axios.get(apiUrl);
        setChannelData(response.data.items[0]);
      } catch (error) {
        // console.error('Error fetching channel data:', error);
      }
    };

    fetchChannelData();
  }, [channelId]);

  return (
    <div>
      <h1>YouTube Channel Information</h1>
      {channelData ? (
        <div>
          <h2>{channelData.snippet.title}</h2>
          <p>{channelData.snippet.description}</p>
          <p>Subscribers: {channelData.statistics.subscriberCount}</p>
          <p>Views: {channelData.statistics.viewCount}</p>
          <p>Videos: {channelData.statistics.videoCount}</p>
          <img
            src={channelData.snippet.thumbnails.default.url}
            alt={channelData.snippet.title}
          />

          <h2>Latest Videos</h2>
          {channelData.videos && channelData.videos.map((video) => (
            <div key={video.id}>
              <h3>{video.snippet.title}</h3>
              <p>{video.snippet.description}</p>
              <p>Published at: {video.snippet.publishedAt}</p>
              <img
                src={video.snippet.thumbnails.default.url}
                alt={video.snippet.title}
              />
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Videos;

