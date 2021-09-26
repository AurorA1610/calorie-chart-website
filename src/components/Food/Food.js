import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils} from '@fortawesome/free-solid-svg-icons';
import './Food.css';



const Food = (props) => {
    const {name, category, type, carbohydrateInGrams, img, calorie, servingInGrams} = props.food;

    return (
        <div className="col">
            <div className="card p-3 food-card">
                <img className="food-img m-3 mx-auto d-block rounded-circle" src={img} alt="" />
                <h3 className="text-center">{name}</h3>
                <hr />
                <h6>
                    <span className="text-highlight">Category: </span>{category}
                </h6>
                <h6>
                    <span className="text-highlight">Serving(in gram): </span>{servingInGrams}
                </h6>
                <h6>
                    <span className="text-highlight">Carbohydrate(in gram): </span>{carbohydrateInGrams}
                </h6>
                <h6><span className="text-highlight">Type: </span>{type}</h6>
                <h4><span className="text-highlight">Calorie: </span>{calorie}</h4>
                <button className="btn btn-primary w-75 mt-3 mx-auto" onClick={() => props.handleAddItem(props.food)}>
                    <FontAwesomeIcon icon={faUtensils} /> Add Item
                </button>
            </div>
        </div>
    );
};

export default Food;