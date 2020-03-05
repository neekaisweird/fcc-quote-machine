import React, { useState, useEffect } from 'react';
import QuoteBox from './QuoteBox';

const API_URL = 'http://quotes.stormconsultancy.co.uk/random.json';

const App = () => {
  const [quote, setQuote] = useState();
  const [loader, setLoader] = useState(true);

  const getQuote = async () => {
    try {
      let res = await fetch(API_URL);
      if (!res.ok) {
        throw new Error('Error with network response');
      }
      let data = await res.json();
      setQuote({ text: data.quote, author: data.author });
      setLoader(false);
    } catch (e) {
      console.log(e);
    }
  };

  const newQuote = () => {
    setLoader(true);
    getQuote();
  };
  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="App">
      <QuoteBox loader={loader} quote={quote} newQuote={newQuote} />
    </div>
  );
};

export default App;
