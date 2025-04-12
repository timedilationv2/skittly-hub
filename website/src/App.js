import React, { useState } from 'react';
import axios from 'axios';
// Import ATSButton from your new package
import { ATSButton } from '@timedilationv2/skittly-ui';

function App() {
  const [jobDescription, setJobDescription] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await axios.post(
        'https://skittly.onrender.com/generate-response',
        { job_description: jobDescription }
      );
      setResponse(result.data.response);
    } catch (error) {
      console.error(error);
      setResponse('An error occurred. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <h1>Job Description Generator</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          placeholder="Enter job description here"
          rows={5}
          cols={50}
        />
        <ATSButton type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Submit'}
        </ATSButton>
      </form>
      {response && (
        <div className="response">
          <h2>Response:</h2>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}

export default App;

