import React from 'react';

import rapunzel from '../Images/download__5_-removebg-preview.png';
import eugene from '../Images/Flynn_Rider_Eugene_Fitzherbert_King_Eugene_Fitzherbert-removebg-preview.png';
import powerpuff from '../Images/Iphone_Wallpaper-removebg-preview.png';
import masha from '../Images/download__6_-removebg-preview.png';
import olaf from '../Images/download__7_-removebg-preview.png';
import pinkie from '../Images/Pinkie_pie_Image__30-removebg-preview.png'; // 🆕 Pinkie Pie

export default function ChildhoodCutoutsPage() {
  return (
    <div
      className="min-vh-100 py-5 px-3 text-center"
      style={{
   background: 'linear-gradient(to right, #fbc2eb, #a6c1ee)',
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <h2
        style={{
          fontFamily: "'Dancing Script', cursive",
          fontSize: '2.8rem',
           color: '#ff4d6d',
          marginBottom: '40px',
        }}
      >
        Reviving Her Inner Child 🧸✨
      </h2>

      <div className="container">
        <div className="row justify-content-center g-5">
          <Character img={rapunzel} text="You're my rapunzel 🌸" />
          <Character img={eugene} text="And I’ll be your Eugene forever 💘" />
          <Character img={powerpuff} text="Born bold, soft at heart 💥" />
          <Character img={masha} text="Mischief and magic — that’s you 🐻" />
          <Character img={olaf} text="You always needed warm hugs ❄️" />
          <Character img={pinkie} text="Be Happy — like Pinkie Pie taught you 🧁💖" />
        </div>
      </div>
    </div>
  );
}

function Character({ img, text }) {
  return (
    <div className="col-6 col-md-4 col-lg-3">
      <div className="d-flex flex-column align-items-center">
        <img
          src={img}
          alt="Character"
          className="img-fluid mb-2"
          style={{
            height: '160px',
            objectFit: 'contain',
            transition: 'transform 0.3s ease-in-out',
          }}
          onMouseOver={(e) => (e.target.style.transform = 'scale(1.05)')}
          onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
        />
        <p
          style={{
            fontSize: '0.95rem',
            color: '#6c5ce7',
            fontStyle: 'italic',
          }}
        >
          {text}
        </p>
      </div>
    </div>
  );
}
