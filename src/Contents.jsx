import ListItems from "./ListItems";

const Contents = ({ items, handleCheck, handleDelete }) => {

    return (
        <main className='container'>
            <h2 className='item-title'>List Items: </h2>
            {items ? (
                items.length ? (
                    <ListItems
                        items={items}
                        handleCheck={handleCheck}
                        handleDelete={handleDelete}
                    />
                ) : (
                    <p>Your list is empty!</p>
                )) :
                (
                    <p>Your list is null!</p>
                )
            }

        </main>
    )
}

export default Contents;
