import React from 'react';

const QuoteBox = ({ quote, newQuote }) => {
  const handleClick = e => {
    e.preventDefault();
    newQuote();
  };

  return (
    <div>
      <h1>{quote.text}</h1>
      <h4>-{quote.author}</h4>
      <a
        href={`https://twitter.com/intent/tweet?text="${quote.text}" ${quote.author}`}
      >
        Tweet
      </a>
      <button onClick={handleClick}>New Quote</button>
    </div>
  );
};

export default QuoteBox;
