import React from 'react';

const FoodDetails = ({food}) => {
    const {strMeal, idMeal, strInstructions, strMealThumb,strArea, strCategory ,strYoutube}= food;
    return (
        <>
            <input type="checkbox" id="my-modal-69" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
            
            <div className="modal-box">
            <div className="card">
               <h2 className="card-title font-bold">{strMeal}</h2>
               <hr className='border-1 border-blue-600 mb-4' />
                <figure><img src={strMealThumb} className='h-64 rounded-xl' alt="car!"/></figure>
                <div className="card-body text-gray-600">
                    <h2><span className='text-black-600 font-bold'>Catagory: </span>{strCategory}</h2>
                    <p><span className='text-black-600 font-bold'>Area: </span>{strArea}</p>
                    <p><span className='text-black-600 font-bold'>Instractions: </span>{strInstructions}</p>
                    <p><span className='text-black-600 font-bold'>Youtube: </span>{strYoutube}</p>
                    
                </div>
            </div>
                <div className="modal-action">
                <label htmlFor="my-modal-69" className="btn btn-error">Close</label>
                </div>
            </div>
            </div>   
        </>
    );
};

export default FoodDetails;