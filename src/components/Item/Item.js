import React from 'react';
import './Item.css';

const Item = (props) => {
    const {name, servingInGrams, calorie} = props.item;

    return (
        <div className="items row">
            <div className="col-4">
                <h6 className="mx-2 text-start">{name}</h6>
            </div>
            <div className="col-4">
                <h6 className="mx-2">{servingInGrams} gm</h6>
            </div>
            <div className="col-4">
                <h6 className="mx-2">{calorie} cal</h6>
            </div>
        </div>
    );
};

export default Item;