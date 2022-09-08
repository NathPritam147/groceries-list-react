import React, { useState } from 'react'

const Demo = () => {

    const [name, setName] = useState('Jio');

    const handleNameChange = () => {
        const names = ['React', 'Jio', 'Java']
        const index = Math.floor(Math.random() * 3);

        setName(names[index]);
    }

    const handleClick = () => {
        console.log('Button clicked');
    }

    const handleClick2 = (name) => {
        console.log(`${name} clicked!`);
    }

    const handleClick3 = (event) => {
        console.log(event);
    }

    return (
        <main className='container'>
            <p onDoubleClick={handleNameChange}>Hello {name}</p>
            <button onClick={handleNameChange}>Change Name</button>
            <button onClick={handleClick}> Click me</button>
            <button onClick={() => handleClick2("Jio")}> Click me</button>
            <button onClick={(e) => handleClick3(e)}> Click me</button>
        </main>
    )
}

export default Demo;
