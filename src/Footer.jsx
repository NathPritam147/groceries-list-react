import React from 'react'

const Footer = ({ length }) => {

    // const today = new Date()
    return (
        <footer className='footer'>
            {/* <p className='footer-text'>Copyright &copy; {today.getFullYear()}</p> */}

            <p className='footer-text'>{length} list {length === 1 ? 'item' : 'items'}</p>
        </footer>
    )
}

export default Footer