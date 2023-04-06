import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Food from '../Food/Food';
import TopSection from '../TopSection/TopSection';

const Foods = () => {

    const [showall,setShowall]=useState(true)
    const foods = useLoaderData().meals;
    const [food , setFood] = useState(foods);
    const handleShowAll = ()=>{
        setShowall(false)
        setFood(foods)
    }

    const LoadData = (searchValue)=>{
        console.log(searchValue);
        fetch(`https://api.example.com/data?search=${searchValue}`)
        .then(res=>res.json())
        .then(data=> console.log(data))

    }
    LoadData();


    return (
        <div>
            <TopSection LoadData={LoadData}></TopSection>
            <h3 className='text-2xl font-bold mb-10 text-center mt-5'>Your Favourite Food</h3>
            <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-4 ml-4'>
                    {
                       showall? food.slice(0,4).map(food=> <Food key={food.idMeal} food={food}></Food>) :food.map(food=> <Food key={food.idMeal} food={food}></Food>)
                    }
            </div>
            <div className='flex flex-row justify-center mt-5'>
                {
                    (showall && food.length>4) && <button onClick={handleShowAll} className='btn btn-warning font-bold'>Show All</button>
                }
            </div>
        </div>
    );
};

export default Foods;