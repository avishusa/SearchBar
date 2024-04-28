import React from 'react';
import './SearchResult.css'

function SearchResult({result}) {
  return (
    <div className='search-result' onClick={(e)=>alert(`You clicked on ${result.name}`)}>{result.name}</div>
  )
}

export default SearchResult