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
    message: 'This is first planet and first phase of our bond like those july 15 days we instantlt bonded',
  },
  {
    name: 'Venus',
    image: venus,
    message: 'Then like planet of desire and love i started to love talking to you an',
  },
  {
    name: 'Earth',
    image: earth,
    message: 'By august september you were my home like earth is',
  },
  {
    name: 'Mars',
    image: mars,
    message: 'Mars may be called the red planet and is bold and firey like it was in september the burning passion we had which made us talk for 12hrs or till 5am',
  },
  {
    name: 'Jupiter',
    image: jupiter,
    message: 'Jupiter, the giant protector, Where in october where we got peak bonded and you gave best pdf ever in oct.',
  },
  {
    name: 'Saturn',
    image: saturn,
    message: 'Saturn has rings. Well we did not engage but we started relationship and promised to stay till end',
  },
  {
    name: 'Uranus',
    image: uranus,
    message: 'Uranus is calming phase of relationship post november till jan where we loved each other made fforts  ',
  },
  {
    name: 'Neptune',
    image: neptune,
    message: 'Neptune, with its deep blue storms, signifying that jan shift where we got more into each other and now we know parts of each other which only we had explored yet',
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

