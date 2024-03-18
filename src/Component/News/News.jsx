



import React, { useEffect, useState } from 'react';
import './news.css'

function News() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const apiKey = '006a4af7e12f4195937c1a0ae3ceb38a'; // Use environment variable for API key

            if (!apiKey) {
                console.error("API key is missing. Please set REACT_APP_NEWS_API_KEY in your environment.");
                return;
            }

            let url = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${apiKey}`;

            try {
                let response = await fetch(url);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                let parsedData = await response.json();
                setArticles(parsedData.articles);
            } catch (error) {
                console.error("Error fetching data:", error);
                setError("Error fetching data. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='news-detail'>
            <h2>Cricket news</h2>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <div className="row">
                {articles.map((value) => (
                    <div className='col-md-4' key={value.url}>
                        <div className="card">
                            <img src={value.urlToImage} className='card-image' alt={value.title || "Image not available"} />
                            <div className="card-body">
                                <h5 className='card-title'>{value.title}</h5>
                                <p className='card-text'>{value.description}</p>
                                <a href={value.url} className='btn btn-primary' target='_blank' rel="noopener noreferrer">Read More</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default News;

