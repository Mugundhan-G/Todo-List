import React from 'react'
import LineItem from './LineItem'



const ItemList = ({items, handleCheck, handleChange}) => {
    return (
        <ul>
            {items.map((item) => (
                <LineItem
                    item = {item}
                    key = {item.id}
                    handleCheck = {handleCheck}
                    handleChange = {handleChange}
                />
                
            ))}
        </ul>

    )  
}

export default ItemList