import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import Item from '../Item/Item';
import './Main.css';

const Main = () => {
    const [foods, setFoods] = useState([]);
    const [chart, SetChart] = useState([]);

    useEffect(() => {
        fetch('./foods.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, []);
    useEffect(() => {

    }, [] )

    const handleAddItem = food => {
        const newChart = [...chart, food];
        SetChart(newChart);
    }

    return (
        <div className="row">
            <div className="col-9">
                <div className="row row-cols-3 g-4">
                    {
                        foods.map(food => <Food
                            key={food.id}
                            food={food}
                            handleAddItem={handleAddItem}
                            ></Food>
                        )
                    }
                </div>
            </div>
            <div className="col-3">
                <h2 className="text-warning text-center">Calorie Intake</h2>
                <h5 className="mb-3 text-center">Total Items: {chart.length}</h5>
                <div>
                    {
                        chart.map(item => <Item
                            key={item.id}
                            item={item}
                        ></Item>)
                    }
                    <div className="chart-totals">
                    <h6 className="mx-2">Total</h6>
                    <h6 className="mx-2">{}</h6>
                    <h6 className="mx-2">total</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;