import React, { useState } from 'react'
import axios from 'axios'

const QuoteGenerator = () => {
  const [quote, setQuote] = useState([]);

  const generateQuote = async () => {
    try {
      const response = await axios.get("https://zenquotes.io/api/quotes");
      const data = response.data;
      setQuote([response.data]);
    } catch (error) {
      console.log("error is", error);
    }
  };

  return (
    <div className='flex flex-col h-screen mx-auto items-center justify-center gap-4'>
      <h1 className='text-xl text-red-400 font-bold'>Random Quote Generator</h1>

      <button
        className='text-green-700 font-bold bg-green-200 rounded-xl px-4 py-2'
        onClick={generateQuote}
      >
        Generate
      </button>

      <div className='mt-6 text-center'>
        {quote.length > 0 && (
          <>
            <h2 className='text-lg font-semibold'>“{quote[0].q}”</h2>
            <p className='text-gray-600 mt-2'>— {quote[0].a}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default QuoteGenerator;
