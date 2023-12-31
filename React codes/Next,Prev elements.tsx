import React, { useState } from 'react';
import logo from "../../logo.svg";

interface Sculpture {
  name: string;
  artist: string;
  description: string;
  url: string;
  alt: string;
}

const sculptureList: Sculpture[] = [
  {
    name: 'Sculpture 1',
    artist: 'Artist 1',
    description: 'This is the description of Sculpture 1.',
    url: logo,
    alt: 'Sculpture 1'
  }
];

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setIndex(index + 1);
  }

  function handlePrevClick() {
    setIndex(index - 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  const sculpture: Sculpture = sculptureList[index];

  return (
    <>
      <button onClick={handlePrevClick}>Previous</button>
      <button onClick={handleNextClick}>Next</button>
      <h2>
        <i>{sculpture.name}</i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </>
  );
}
