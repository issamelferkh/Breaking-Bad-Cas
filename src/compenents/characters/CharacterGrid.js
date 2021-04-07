import React from 'react';
import CharacterItem from './CharacterItem'

const CharacterGrid = ({ items, isLoading}) => {
  
  return (
    <>
      {isLoading ? (
        <p>Is Loading...</p>
      ) : (
        <section className='cards'>
          {items.map((item) => (
            <CharacterItem key={item.char_id} item={item} />
        ))}
        </section>
      )}
    </>
  )
}

export default CharacterGrid


// - src/compenents
//   - characters/
//     - CharacterGrid.js (create caracter grid for images)
//       - pass isLoading and items like props
//       - if isLoading -> display is loading alse map items