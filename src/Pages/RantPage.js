import React, { useState } from 'react';

export default function RantPage() {
  const [rant, setRant] = useState('');
  const [savedRants, setSavedRants] = useState([]);

  const handleSave = () => {
    if (rant.trim()) {
      setSavedRants([...savedRants, rant]);
      setRant('');
    }
  };

  return (
    <div
      className="min-vh-100 py-5 px-4"
      style={{
        background: 'linear-gradient(to right, #ffe0f0, #e0f7fa)',
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <h2
        className="text-center mb-4"
        style={{
          fontFamily: "'Dancing Script', cursive",
          fontSize: '2.6rem',
          color: '#ff4d6d',
        }}
      >
        Let it Out 💬
      </h2>

      <div className="container text-center">
        <textarea
          rows="6"
          className="form-control mb-3 rounded-4 shadow-sm"
          placeholder="Type your rant here... I'm all ears 👂💖"
          value={rant}
          onChange={(e) => setRant(e.target.value)}
          style={{ resize: 'none', fontSize: '1rem' }}
        />

        <button
          onClick={handleSave}
          className="btn btn-lg mb-4"
          style={{
            backgroundColor: '#ff4d6d',
            color: 'white',
            borderRadius: '50px',
            padding: '10px 30px',
          }}
        >
          Save Rant 💌
        </button>

        <div className="text-start mt-4">
          {savedRants.map((r, idx) => (
            <div
              key={idx}
              className="p-3 mb-3 rounded-3 shadow-sm"
              style={{ background: '#fff0f5', color: '#444' }}
            >
              <strong>Rant #{idx + 1}</strong>
              <p className="mb-0">{r}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
