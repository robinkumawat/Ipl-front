
import React, { useState, useEffect } from 'react';
import './video.css'

const API_KEY = "AIzaSyBSaKhw7WnIll-NndwWx38AmlRgZpghwS8";

function Video() {
  const [videoList, setVideoList] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=In&videoCategoryId=17&key=${API_KEY}`
      );
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      console.log(data)
      setVideoList(data.items);
    } catch (error) {
      console.error('Error fetching data:', error);

    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='wapper-video'>
      <h1> Videos</h1>
      <ul className='videos'>
        {videoList.map((video) => (
          <li key={`video/${video.snippet.categoryID}/${video.id}`}>
            <img src={video.snippet.thumbnails.medium.url}alt="" />
            <p>{video.snippet.title}</p>
            
            {/* You can add more details or customize the rendering here */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Video;
