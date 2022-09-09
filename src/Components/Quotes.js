import React, { useState, useEffect } from 'react'
import '../App.css'


const Quotes = () => {

    const [quote, setQuote] = useState('')
    const [author, setAuthor] = useState('')


    const getQuote = async () => {
        try {
            const response = await fetch(`https://type.fit/api/quotes`)
            let data = await response.json()
            let randomNum = Math.floor(Math.random() * 10)
            let randomQuote = (data[randomNum])
            setQuote(randomQuote.text)
            setAuthor(randomQuote.author)
        } catch (error) {
            console.log(error)
        }

    }

    const handleClick = () => {
        getQuote();
    }

    useEffect(() => {
        getQuote();
    }, [])

    return (
        <>

            <div id="main">
                <h1 id='heading'>Random  Quotes </h1>
                <div id="quote-box">

                    <div id="text">
                        <p>" {quote} "  </p>
                    </div>
                    <div id="author">
                        <p> {author}</p>
                    </div>

                    <div id="buttons">
                        <div className="socia-media">
                            <a target='blank' href="https://twitter.com/" id='tweet-quote'><span><i className="fa-brands fa-twitter" id='icon'></i></span></a>
                        </div>

                        <button onClick={handleClick} id='new-quote'>New Quote</button>
                    </div>
                </div>
            </div>




        </>
    )
}

export default Quotes