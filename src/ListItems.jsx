import React from 'react'
import Item from './Item';

const ListItems = ({ items, handleCheck, handleDelete }) => {
    return (
        <ul>
            {
                items.map((item) => {
                    return (
                        <Item
                            key={item.id}
                            item={item}
                            handleCheck={handleCheck}
                            handleDelete={handleDelete}
                        />
                    );
                })
            }
        </ul>
    )
}

export default ListItems