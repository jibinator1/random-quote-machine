import React, { useState, useEffect  } from 'react';
import './GetQuote.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


function GetQuote() {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    useEffect(() => {
        getQuote();
    }, []);
    async function getQuote() {
        const response = await axios.get('https://api.api-ninjas.com/v1/quotes', { headers: { 'X-Api-Key': import.meta.env.VITE_QUOTE_API_KEY } });
        setQuote(response.data[0].quote);
        setAuthor(response.data[0].author);
        var randomColor = Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.backgroundColor = "#" + randomColor;
        document.body.style.color= "#" + randomColor;
    }

    return (
        <div>
            <div className='quote-container' id="quote-box">
                <h1 id="text">"{quote}"</h1>
                <p id="author">- {author}</p>
                <div className = "buttons-container">
                <a target="_blank" id="tweet-quote"><button className="btn btn-primary">Tweet</button></a>
                <button onClick={getQuote} id="new-quote " className="btn btn-secondary">New Quote</button>
                </div>  
            </div>
        </div>
    );
}

export default GetQuote;