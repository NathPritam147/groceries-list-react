import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Item = ({ item, handleCheck, handleDelete }) => {
    return (
        <li className='items' key={item.id}>
            <input
                type='checkbox'
                onChange={() => handleCheck(item.id)}
                checked={item.checked}
            />
            <label
                onDoubleClick={() => handleCheck(item.id)}
            >
                {item.item}
            </label>
            {/* <button
                onClick={() => handleDelete(item.id)}
            >
                Delete
            </button> */}
            <FaTrashAlt
                onClick={() => handleDelete(item.id)}
                role='button'
                tabIndex='0'
                aria-label={`Delete ${item.item}`}
            />
        </li>
    )
}

export default Item