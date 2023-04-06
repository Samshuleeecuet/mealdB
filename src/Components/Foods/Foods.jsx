import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Food from '../Food/Food';

const Foods = () => {
    const [showall,setShowall]=useState(true)
    const foods = useLoaderData().meals;
    const foodInit = foods.slice(0,4);
    const [food , setFood] = useState(foodInit);
    
    const handleShowAll = ()=>{
        setShowall(false)
        setFood(foods)
    }
    return (
        <div>
            <h3 className='text-2xl font-bold mb-10 text-center mt-5'>Your Favourite Food</h3>
            <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-4 ml-4'>
                    {
                        food.map(food=> <Food key={food.idMeal} food={food}></Food>)
                    }
            </div>
            <div className='flex flex-row justify-center mt-5'>
                {
                    showall && <button onClick={handleShowAll} className='btn btn-warning font-bold'>Show All</button>
                }
            </div>
        </div>
    );
};

export default Foods;