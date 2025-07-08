import React from 'react';
import rosesBg from '../Images/roses-bg.jpg';

export default function HomePage() {
  return (
    <div
  className="vh-100 d-flex justify-content-center align-items-center"
  style={{
    backgroundImage: `url(${rosesBg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    fontFamily: "'Poppins', sans-serif",
    padding: '20px',
  }}
>
  {/* your white card content */}


    
    <div
  className="shadow-lg p-5 text-center"
  style={{
    maxWidth: '550px',
    width: '100%',
    borderRadius: '30px',
    background: 'rgba(255, 255, 255, 0.4)',
    backdropFilter: 'blur(15px)',
    WebkitBackdropFilter: 'blur(15px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
  }}
>

        <h1
          className="mb-4"
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: '2.8rem',
            color: '#ff4d6d',
          }}
        >
          😢 Oh no, Akansha...
        </h1>

        <p className="text-secondary mb-5 fs-5">
          I'm really sorry you had to come to this portal 💔<br />
          That probably means I messed up 😞<br />
          But I promise I’m here to make things right 💖
        </p>

        <div className="d-grid gap-4">
          <a href="#gre">
          <button
            className="btn btn-lg"
            style={{
              backgroundColor: '#ff4d6d',
              color: 'white',
              borderRadius: '999px',
              padding: '12px',
            }} 
          >
            🥺 File a Grievance
          </button>
</a>
<a href="#love-letter">
          <button
            className="btn btn-lg"
            style={{
              backgroundColor: '#f06292',
              color: 'white',
              borderRadius: '999px',
              padding: '12px',
            }}
          >
            💌 Read a Love Letter
          </button>
          </a>
<a href="#Love">
          <button
            className="btn btn-lg"
            style={{
              backgroundColor: '#ba68c8',
              color: 'white',
              borderRadius: '999px',
              padding: '12px',
            }}
          >
            🕰️ Visit Memory Lane
          </button>
          </a>
        </div>

        <p className="mt-5 text-muted fst-italic small">
          Made with guilt 🥺 and endless love 💕
        </p>
      </div>
    </div>
  );
}
