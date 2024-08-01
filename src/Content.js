import React from 'react';
import ItemList from './ItemList'



const Content = ({items, handleCheck, handleChange}) => {
 
    

    return(
        <main>
            {(items.length) ? (
                <ItemList 
                    items = {items}
                    handleCheck = {handleCheck}
                    handleChange = {handleChange}
                />
            ) : (
                <p>
                    your list is empty
                </p>
            )
}
        </main>
    )

}

export default Content

