import React, { useState } from 'react';
 import bgImage from "../Images/Обои.jpg";

const loveReasons = [
  "I love your smile 😊",
  "I love your weird faces 😜",
  "I love your mood swings — every single one 🥺",
  "I was near Jhumka Market... reminded me how cute you'd look in jhumkas 💫",
  "I love your bak bak every day 😂",
  "I love the coffee you make ☕",
  "I love your efforts and cuteness 💖",
  "I love your picture in my wallet 🥹",
  "I love your obsession with Rapunzel 👸",
  "I love your letters — they melt me every time ✉️",
  "I love our random convos 🗣️",
  "I love your doodles 🖌️",
  "I love your little anger 😠 (it's adorable)",
  "I love you in a saree — breathtaking 🥻",
  "I love your music taste 🎵",
  "I loved seeing you in emojis 🐥🌸🍭",
  "I love that one compliment you gave me — I remember it daily 🥹",
  "I love how career-focused you are 👩‍💼",
  "Not love, but I crave a future family with you 🏡",
  "I love imagining how proud your parents will be when you graduate 🎓",
  "I love your bond with Hardik 🧒💫",
  "I love your hugs — warmest therapy 🤗",
  "I love writing Hindi letters for you 💌",
  "I love your little jealousy 💚",
  "I love how beautiful my girlfriend is 💕",
  "I love the ice cream you give me 🍦",
  "You overthink a lot — and I love it 🧠❤️",
  "I love doing efforts for you — every little one 🙌",
  "I love your close-up pics... I kissed it 😚📷",
  "Most importantly, I love you and I’ll stay, no matter what 🫶",
];

export default function LoveQuotePage() {
  const [quote, setQuote] = useState('');

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * loveReasons.length);
    setQuote(loveReasons[randomIndex]);
  };

  return (
    <div
      className="vh-100 d-flex justify-content-center align-items-center text-center position-relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        fontFamily: "'Poppins', sans-serif",
        padding: '20px',
      }}
    >
      {/* Blurred white overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.4)',
          backdropFilter: 'blur(4px)',
          zIndex: 0,
        }}
      ></div>

      {/* Content over the background */}
      <div style={{ zIndex: 1, width: '100%' }}>
        <h2
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: '2.5rem',
            color: 'white',
            marginBottom: '30px',
          }}
        >
          💌 Why do you love me?
        </h2>

        <button
          className="btn btn-lg mb-4"
          onClick={handleClick}
          style={{
            backgroundColor: '#ff4d6d',
            color: 'white',
            borderRadius: '50px',
            padding: '12px 28px',
            fontSize: '1.1rem',
          }}
        >
          Tell Me Again 🥺
        </button>

        {quote && (
          <div
            className="p-4 bg-white rounded-4 shadow-sm mx-auto"
            style={{
              maxWidth: '600px',
              fontSize: '1.3rem',
              fontStyle: 'italic',
              color: '#333',
            }}
          >
            {quote}
          </div>
        )}
      </div>
    </div>
  );
}
