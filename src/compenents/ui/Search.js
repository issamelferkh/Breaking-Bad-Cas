import React, { useState } from 'react'

const Search = ({ getQuery }) => {
  const [text, setText] = useState('');

  const onChange = ( query) => {
    setText(query);
    getQuery(query)
    console.log("text : "+query);
  }

  return (
    <section className="search">
      <form>
        <input 
          type="text"
          className="form-control"
          placeholder="Search"
          autoFocus
          value={text}
          onChange={(e) => onChange(e.target.value)}
        />
      </form>
      
    </section>
  )
}

export default Search

// - src/compenents
//   - ui/
//     - Search.js
//       - form -> one input ->
//       - import in App.js
//       - add state -> text, setText