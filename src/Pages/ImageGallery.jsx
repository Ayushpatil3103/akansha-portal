import React from 'react';

import img1 from '../Images/6197036448738300053_121 (1).jpg';
import img2 from '../Images/6269433353782544267_121 (1).jpg';
import img3 from '../Images/WhatsApp Image 2024-12-28 at 11.56.16 PM.jpg';
import img4 from '../Images/WhatsApp Image 2025-02-01 at 11.33.26 PM (1).jpg';
import img5 from '../Images/WhatsApp Image 2025-02-05 at 6.09.53 PM.jpg';
import img6 from '../Images/image (2).png';


const images = [
  {
    src: img1,
    caption: "The day I fell harder than ever 💘",
  },
  {
    src: img2,
    caption: "Even the moon would hide behind you 🌙",
  },
  {
    src: img3,
    caption: "So pretty babe 😩",
  },
  {
    src: img4,
    caption: "My future daughter gonna look cute 💻💖",
  },
  {
    src: img5,
    caption: "I love you more",
  },
  {
    src: img6,
    caption: "Best Pic ever ",
  },
];

export default function ImageGalleryPage() {
  return (
    <div
      className="min-vh-100 py-5 px-3 text-center"
      style={{
        background: 'linear-gradient(to right, #fff0f5, #f9dbe9)',
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
        How Pretty My Girlfriend Is 😍
      </h2>

      <div className="container">
        <div className="row justify-content-center g-4">
          {images.map((img, index) => (
            <div className="col-6 col-md-4 col-lg-3" key={index}>
              <div
                className="rounded-4 shadow-sm overflow-hidden"
                style={{
                  transition: 'transform 0.3s',
                  cursor: 'pointer',
                }}
              >
                <img
                  src={img.src}
                  alt={`Akansha ${index + 1}`}
                  className="img-fluid rounded-4"
                  style={{
                    objectFit: 'cover',
                    height: '100%',
                    width: '100%',
                    transition: '0.3s ease-in-out',
                  }}
                  onMouseOver={(e) => (e.target.style.transform = 'scale(1.05)')}
                  onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
                />
              </div>
              <p
                className="mt-2"
                style={{
                  fontSize: '0.95rem',
                  color: '#ff4d6d',
                  fontStyle: 'italic',
                }}
              >
                {img.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
