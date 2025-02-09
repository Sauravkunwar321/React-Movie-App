import React from 'react'



function Search({searchTerm, setSearchTerm}) {
    return (
        <div className='search'>
            <div>
                <img src="search.svg" alt="search" />
                
                <input type="text" placeholder='Search your favourite movies' 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
        </div>
        
    )
}

export default Search
