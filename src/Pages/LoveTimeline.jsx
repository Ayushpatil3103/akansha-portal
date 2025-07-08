import React from 'react';

const events = [
  { date: 'May 2024', text: 'I liked your tweet, we followed each other 🐥💬' },
  { date: 'July 2024', text: 'We talked for the first time 😳' },
  { date: 'August 2024', text: 'We became more close 🫶' },
  { date: 'Sept 2024', text: 'We talked all night 💤❤️' },
  { date: 'Oct 2024', text: 'We fell in love 💘' },
  { date: 'Jan 2025', text: 'We made love for the first time 🛏️🥺' },
  { date: 'Feb 2025', text: 'We grew more intimate 💗' },
  { date: 'March 2025', text: 'I created your first scrapbook 🎨📖' },
  { date: 'May 2025', text: 'We became more bonded than ever 🔗' },
  { date: 'June 2025', text: 'We did the most kalesh ever 💥🤯' },
];

export default function LoveTimelinePage() {
  return (
    <div
      id="Love"
      className="min-vh-100 py-5 px-4"
      style={{
        background: 'linear-gradient(to right, #fbc2eb, #a6c1ee)',
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <h2
        className="text-center mb-5"
        style={{
          fontFamily: "'Dancing Script', cursive",
          fontSize: '2.8rem',
          color: '#ff4d6d',
        }}
      >
        Our Journey Together 💞
      </h2>

      <div className="container position-relative">
        {/* Vertical Line */}
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: '4px',
            background: '#ff4d6d',
            transform: 'translateX(-50%)',
            zIndex: 0,
          }}
        ></div>

        {events.map((event, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={index}
              className="row justify-content-center align-items-start mb-5 position-relative"
              style={{ zIndex: 1 }}
            >
              <div
                className={`col-md-6 ${isLeft ? 'text-end' : 'text-start'}`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: isLeft ? 'flex-end' : 'flex-start',
                }}
              >
                <div
                  className="p-4 bg-white rounded-4 shadow-sm"
                  style={{
                    maxWidth: '80%',
                    borderLeft: isLeft ? 'none' : '5px solid #ff4d6d',
                    borderRight: isLeft ? '5px solid #ff4d6d' : 'none',
                  }}
                >
                  <h5
                    style={{
                      color: '#d6336c',
                      fontWeight: 'bold',
                      fontSize: '1.1rem',
                    }}
                  >
                    {event.date}
                  </h5>
                  <p
                    style={{
                      marginBottom: 0,
                      color: '#444',
                      fontSize: '1rem',
                      fontStyle: 'italic',
                    }}
                  >
                    {event.text}
                  </p>
                </div>
              </div>

              {/* Heart Dot */}
              <div
                className="position-absolute"
                style={{
                  top: '12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  zIndex: 2,
                }}
              >
                <div
                  style={{
                    width: '24px',
                    height: '24px',
                    backgroundColor: '#ff4d6d',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '14px',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                  }}
                >
                  ❤️
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
