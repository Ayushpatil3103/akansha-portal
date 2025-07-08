import React from 'react';
import doctor from '../Images/Pin by _Tifany_ on Me _ Female doctor, Medical school inspiration, Medical school motivation.jpg';
import family from '../Images/Screenshot (386).png';
import brother from '../Images/Screenshot (383).png';
import me from '../Images/6257781876307641796_121.jpg';

export default function MotivationPage() {
  return (
    <div
      className="min-vh-100 py-5 px-4 text-center"
      style={{
       background: 'linear-gradient(to right, #ffecd2, #fcb69f)',


        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <h2
        style={{
          fontFamily: "'Dancing Script', cursive",
          fontSize: '2.8rem',
         color: '#d6336c',

          marginBottom: '30px',
        }}
      >
        For the Doctor the World’s Been Waiting For 💉👩‍⚕️
      </h2>

      <p
        className="mb-5"
        style={{
          maxWidth: '700px',
          margin: '0 auto',
          fontSize: '1.1rem',
          color: '#b03060',

        }}
      >
        Akansha, I know the journey is exhausting, messy, and full of doubt sometimes.
        But when I look at you, I don’t just see a future doctor (mother of my daughter too) —
        I see a force of compassion, brilliance, and endless strength.
        One day you'll hold someone’s hand and say, “You’ll be okay,” and they’ll believe you.
        Until then, just know — we all already do. 💖
      </p>

      <div className="container">
        <div className="row justify-content-center g-4">
          <ImageBlock src={doctor} caption="The future doctor 👩‍⚕️" />
          <ImageBlock src={family} caption="Your biggest supporter 👨‍👩‍👧" />
          <ImageBlock src={brother} caption="Your biggest silent (annoying)supporter 👦" />
          <ImageBlock src={me} caption="The one who'll always believe in you 💘" />
        </div>
      </div>
    </div>
  );
}

function ImageBlock({ src, caption }) {
  return (
    <div className="col-6 col-md-4 col-lg-3">
      <div className="d-flex flex-column align-items-center">
        <img
          src={src}
          alt="Support Image"
          className="img-fluid rounded-4 shadow-sm mb-2"
          style={{
            height: '180px',
            objectFit: 'cover',
            width: '100%',
          }}
        />
        <p
          style={{
            fontSize: '0.95rem',
            color: '#6c5ce7',
            fontStyle: 'italic',
            textAlign: 'center',
          }}
        >
          {caption}
        </p>
      </div>
    </div>
  );
}
