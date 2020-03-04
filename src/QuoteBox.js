import React from 'react';

const QuoteBox = ({ quote }) => {
  return (
    <div>
      <h1>{quote.text}</h1>
      <h4>-{quote.author}</h4>
    </div>
  );
};

export default QuoteBox;
