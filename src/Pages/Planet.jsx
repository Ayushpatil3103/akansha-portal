import React, { useState } from 'react';
import './PlanetSection.css';

import sun from '../Images/Planets/sun.jpg';
import mercury from '../Images/Planets/mercury.jpg';
import venus from '../Images/Planets/venus.jpg';
import earth from '../Images/Planets/earth.jpg';
import mars from '../Images/Planets/mars.jpg';
import jupiter from '../Images/Planets/jupiter.jpg';
import saturn from '../Images/Planets/saturn.jpg';
import uranus from '../Images/Planets/uranus.jpg';
import neptune from '../Images/Planets/neptune.jpg';

const planets = [
  {
    name: 'Mercury',
    image: mercury,
    message: 'Mercury orbits closest to the Sun just like my heart orbits around you, never straying far from your warmth.',
  },
  {
    name: 'Venus',
    image: venus,
    message: 'Venus, the goddess of love, looks up to you because no beauty in the universe can match the glow of your soul.',
  },
  {
    name: 'Earth',
    image: earth,
    message: 'Of all the planets, Earth is the only one that has life — and mine only has meaning because you’re in it.',
  },
  {
    name: 'Mars',
    image: mars,
    message: 'Mars may be called the red planet, and Your anger is cutest just like it',
  },
  {
    name: 'Jupiter',
    image: jupiter,
    message: 'Jupiter, the giant protector, reminds me of my promise  to always shield you, hold you, and love you endlessly.',
  },
  {
    name: 'Saturn',
    image: saturn,
    message: 'Saturn wears its rings proudly  just like You will wear when i put one in you.',
  },
  {
    name: 'Uranus',
    image: uranus,
    message: 'Uranus spins on its side, and that’s what love with you feels like —beautifully unexpected, wonderfully wild.',
  },
  {
    name: 'Neptune',
    image: neptune,
    message: 'Neptune, with its deep blue storms, mirrors the depth of your love — wild on the surface, and wildly in love within.',
  },
];

const PlanetSection = () => {
  const [message, setMessage] = useState('');

  return (
    <div className="planet-section">
      <h1 className="planet-heading">Akanshaverse</h1>
      <div className="solar-system">
        <div className="sun-center">
          <img src={sun} alt="Sun" className="sun" />
          <p className="sun-label">Akansha</p>
        </div>

        {planets.map((planet, index) => {
          const angle = (index / planets.length) * 360;
          const radius = 200;
          const x = radius * Math.cos((angle * Math.PI) / 180);
          const y = radius * Math.sin((angle * Math.PI) / 180);

          return (
            <div
              key={planet.name}
              className="planet"
              style={{ transform: `translate(${x}px, ${y}px)` }}
              onClick={() => setMessage(planet.message)}
            >
              <img src={planet.image} alt={planet.name} />
              <p>{planet.name}</p>
            </div>
          );
        })}
      </div>
      {message && <div className="planet-message">{message}</div>}
    </div>
  );
};

export default PlanetSection;

