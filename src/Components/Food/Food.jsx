import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FoodDetails from '../FoodDetails/FoodDetails';

const Food = ({food}) => {
    //console.log(food)
    //const [fold,setFold] = useState(true)
    const {strMeal, idMeal, strInstructions, strMealThumb }= food;
    return (
        <>
        <div className="card card-side w-10/12 bg-base-100 shadow-xl">
            <figure><img className='w-56 rounded-xl' src={strMealThumb}/></figure>
            <div className="card-body">
                <h2 className="card-title">{strMeal}</h2>
                <p>There are many variations of passages of available, but the majority have suffered</p>
                <div className="card-actions">
                    <label htmlFor="my-modal-69" className='text-yellow-500 font-bold underline cursor-pointer'>View Details</label>
                </div>
            </div>
        </div>
        <FoodDetails food={food} key={idMeal}></FoodDetails>
        </>
    );
};

export default Food;


{/* { fold ? (
    <>
    <p>{strInstructions.substring(0,100)}....</p>
    <span
        className='cursor-pointer text-blue-600 '
        onClick={() => setFold(!fold)}
    >Read More</span>
    </>
):(
    <>
        <p>{strInstructions}....</p>
    <span
        className='cursor-pointer text-blue-600 '
        onClick={() => setFold(!fold)}
    >Read Less</span>
    </>
)

} */}