import React from 'react';

const Item = (props) => {
    const {name, calorie} = props.item;
    return (
        <tr>
            <td><h6 className="mx-5">{name}</h6></td>
            <td>{calorie}</td>
        </tr>
    );
};

export default Item;