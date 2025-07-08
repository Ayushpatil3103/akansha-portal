import React, { useState } from 'react';
import angry from '../Images/20241217_190803.jpg';
import period from '../Images/20250221_222117.jpg';
import overthinking from '../Images/1000086878.jpg';
import missyou from '../Images/download (9).jpg';
import pretty from '../Images/download (8).jpg';
import safe from '../Images/20240924_171508.jpg';
import moods from '../Images/20241127_152425.jpg';

const openWhenLetters = [
  { title: 'Open When Angry 😠', image: angry },
  { title: 'Open When on Period 🩸', image: period },
  { title: 'Open When Overthinking 🤯', image: overthinking },
];

const stickerLetters = [
  { title: 'I Miss You 💭', image: missyou },
  { title: 'I am sorry', image: pretty },
  { title: 'You’re My Safe Place 🛏️', image: safe },
];

export default function LettersPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div
      className="min-vh-100 py-5 px-4 text-center"
      style={{
        background: 'linear-gradient(to right, #fceabb, #f8b500)',
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <h2
        style={{
          fontFamily: "'Dancing Script', cursive",
          fontSize: '2.8rem',
          color: '#d6336c',
          marginBottom: '40px',
        }}
      >
        Your Letter Box 💌
      </h2>

      {/* Open When Letters */}
      <section className="mb-5">
        <h4 className="mb-4 text-muted">Open When... 📂</h4>
        <div className="d-flex flex-wrap justify-content-center gap-4">
          {openWhenLetters.map((letter, idx) => (
            <LetterCard key={idx} title={letter.title} img={letter.image} onClick={() => setSelectedImage(letter.image)} />
          ))}
        </div>
      </section>

      {/* Sticker Letters */}
      <section className="mb-5">
        <h4 className="mb-4 text-muted">Sticker Notes 💖</h4>
        <div className="d-flex flex-wrap justify-content-center gap-4">
          {stickerLetters.map((letter, idx) => (
            <LetterCard key={idx} title={letter.title} img={letter.image} onClick={() => setSelectedImage(letter.image)} />
          ))}
        </div>
      </section>

      {/* Mood Swings Image */}
      <section className="mb-5">
        <h4 className="mb-4 text-muted">All Your Mood Swings I Adore 😵‍💫💘</h4>
        <div className="d-flex justify-content-center">
          <img
            src={moods}
            alt="Mood swings"
            className="img-fluid rounded-4 shadow"
            style={{ maxWidth: '600px', cursor: 'zoom-in' }}
            onClick={() => setSelectedImage(moods)}
          />
        </div>
      </section>

      {/* Modal Viewer */}
      {selectedImage && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            zIndex: 9999,
          }}
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Letter"
            className="img-fluid rounded-4 shadow-lg"
            style={{
              maxHeight: '90vh',
              maxWidth: '90vw',
              backgroundColor: 'white',
              padding: '10px',
            }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

function LetterCard({ title, img, onClick }) {
  return (
    <div
      className="p-3 bg-white rounded-4 shadow-sm text-center"
      style={{
        width: '200px',
        cursor: 'pointer',
        transition: 'transform 0.3s',
      }}
      onClick={onClick}
      onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
      onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      <img
        src={img}
        alt={title}
        className="img-fluid mb-2 rounded-3"
        style={{ height: '140px', objectFit: 'cover' }}
      />
      <div style={{ fontSize: '1rem', color: '#d6336c' }}>{title}</div>
    </div>
  );
}
