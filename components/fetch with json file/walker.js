import React, { useEffect, useState } from 'react';

const LukeSkywalker = () => {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem('character')
    if(storedData) {
      setCharacter(JSON.parse(storedData))
    }
    else {
        fetch("/text.json") // senc kpnumenq json file-in public folder mej
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((json) => {
          setCharacter(json)
          localStorage.setItem('character', JSON.stringify(json))

        })
      .catch((error) => console.error("Error fetching JSON:", error));
    }
  }, []);


  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>list</h1>
      <div>
        <p>{character.glossary?.title}</p>
        <div>
        {character.glossary?.GlossDiv?.GlossList?.map((item, index) => (
          <div key={index}>
            <h2>{item?.GlossTerm}</h2>
            <p>ID: {item?.ID}</p>
            <p>SortAs: {item?.SortAs}</p>
            <p>Acronym: {item?.Acronym}</p>
            <p>Abbrev: {item?.Abbrev}</p>
            <div>
              <p>{item?.GlossDef?.para}</p>
              <p>See Also:</p>
              <ul>
                {item?.GlossDef?.GlossSeeAlso?.map((seeAlsoItem, index) => (
                  <li key={index}>{seeAlsoItem}</li>
                ))}
              </ul>
            </div>
            <p>GlossSee: {item?.GlossSee}</p>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default LukeSkywalker;
