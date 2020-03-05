import React from 'react';

const QuoteBox = ({ quote, newQuote, loader }) => {
  const handleClick = e => {
    e.preventDefault();
    newQuote();
  };

  return (
    // ids are used for freecodecamp
    <div id="quote-box">
      {loader ? (
        <h1 className="loader">Loading...</h1>
      ) : (
        <>
          <h1 id="text">{quote.text}</h1>
          <h4 id="author">-{quote.author}</h4>
        </>
      )}
      <div className="buttons">
        <a
          id="tweet-quote"
          href={
            loader
              ? `https://twitter.com/intent/tweet`
              : `https://twitter.com/intent/tweet?text="${quote.text}" ${quote.author}`
          }
        >
          Tweet
        </a>
        <button id="new-quote" onClick={handleClick}>
          New Quote
        </button>
      </div>
    </div>
  );
};

export default QuoteBox;
