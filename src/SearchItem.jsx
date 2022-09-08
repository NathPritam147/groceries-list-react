import React from 'react'

const SearchItem = ({ searchItem, setSearchItem}) => {
    return (
        <form className='search-form' action='' onSubmit={(e) => e.preventDefault()}>
            <label htmlFor='searchItems'>Search Item</label>
            <input
                type='text'
                placeholder='Search Items'
                id='searchItem'
                role='searchbox'
                value={searchItem}
                onChange={(e) => setSearchItem(e.target.value)}
            />
        </form>
    )
}

export default SearchItem