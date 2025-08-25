import React, { useState } from 'react';
import axios from 'axios';

const QuoteGenerator = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateQuote = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get("https://zenquotes.io/api/quotes", {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      const data = response.data;
      const randomIndex = Math.floor(Math.random() * data.length);
      setQuote(data[randomIndex]);
    } catch (error) {
      console.error("Error fetching quote:", error);
      setError("Failed to fetch quote. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex flex-col h-screen mx-auto items-center justify-center gap-4'>
      <h1 className='text-xl text-red-400 font-bold'>Random Quote Generator</h1>

      <button
        className='text-green-700 font-bold bg-green-200 rounded-xl px-4 py-2 disabled:opacity-50'
        onClick={generateQuote}
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Generate'}
      </button>

      <div className='mt-6 text-center'>
        {error && (
          <p className="text-red-500">{error}</p>
        )}
        
        {quote && (
          <>
            <h2 className='text-lg font-semibold'>"{quote.q}"</h2>
            <p className='text-gray-600 mt-2'>— {quote.a}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default QuoteGenerator;