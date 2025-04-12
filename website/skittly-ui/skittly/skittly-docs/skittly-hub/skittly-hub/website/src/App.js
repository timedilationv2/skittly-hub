import React, { useState } from 'react';
import axios from 'axios';

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
      setResponse('Error generating response.');
    }
    setLoading(false);
  };

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#f9f9f9',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        maxWidth: '700px',
        width: '100%',
        backgroundColor: '#fff',
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        textAlign: 'center'
      }}>
        <h1 style={{ marginBottom: '0.5rem' }}>Skittly Job Response Generator</h1>
        <p style={{ fontSize: '1rem', color: '#555' }}>
          OPENACCESS Project for the workers | Arsalan Khan, WA 2025
        </p>
        
        {/* Website Stack Badges */}
        <div style={{ margin: '1rem 0' }}>
          <img src="https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react" alt="React" style={{ margin: '0 4px' }} />
          <img src="https://img.shields.io/badge/FastAPI-0.115-blue?style=flat-square&logo=python" alt="FastAPI" style={{ margin: '0 4px' }} />
          <img src="https://img.shields.io/badge/OpenAI-API-green?style=flat-square&logo=openai" alt="OpenAI" style={{ margin: '0 4px' }} />
          <img src="https://img.shields.io/badge/Vercel-Static-blue?style=flat-square&logo=vercel" alt="Vercel" style={{ margin: '0 4px' }} />
          <img src="https://img.shields.io/badge/GitHub-Code-black?style=flat-square&logo=github" alt="GitHub" style={{ margin: '0 4px' }} />
        </div>

        <p style={{ fontStyle: 'italic', color: '#999', marginBottom: '1.5rem' }}>
          Under Construction
        </p>

        <form onSubmit={handleSubmit}>
          <textarea
            rows={8}
            cols={70}
            placeholder="Paste job description here..."
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '1rem',
              fontSize: '16px',
              borderRadius: '8px',
              border: '1px solid #ccc',
              marginBottom: '1rem',
              resize: 'vertical'
            }}
          />
          <br />
          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '1rem',
              backgroundColor: '#0070f3',
              color: '#fff',
              fontSize: '16px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            {loading ? 'Generating...' : 'Get Tailored Response'}
          </button>
        </form>

        {response && (
          <div style={{
            marginTop: '2rem',
            backgroundColor: '#f4f4f4',
            padding: '1rem',
            borderRadius: '8px',
            textAlign: 'left'
          }}>
            <h3 style={{ marginBottom: '1rem' }}>Tailored Response:</h3>
            <p style={{ whiteSpace: 'pre-wrap' }}>{response}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

import React from 'react';
// Import ATSButton clearly from your new package
import { ATSButton } from '@timedilationv2/skittly-ui';

function App() {
  return (
    <div>
      <ATSButton 
        text="Click me"
        onClick={() => alert('Your package works!')}
      />
    </div>
  );
}

export default App;

