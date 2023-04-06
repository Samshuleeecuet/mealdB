import React, { useEffect } from 'react';
import {useState} from 'react';

const TopSection = (props) => {
    const [savesearchValue, setSearchValue] = useState("");
   
    const LoadData = props.LoadData;
    const handleChange = event => {
        setSearchValue(event.target.value);
    
        console.log('value is:', event.target.value);
    };
    console.log(savesearchValue);

    return (
        <div className='relative overflow-hidden'>
            <img src='/images/banner_1.png' className='object-cover w-full lg:h-96 md:h-96 opacity-90' />
            <div className='text-center text-gray-300 absolute lg:top-28 md:top-18 inset-0'>
                <h2 className='text-3xl font-bold text-white'>Taste Our Delicious<br></br>Best Foods</h2>
                <p className='w-3/4 mx-auto text-gray-500'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humou.</p>
                <form className='w-3/4 mx-auto'>   
                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input type="search" id="default-search" 
                         name="savesearchValue" value={savesearchValue} onChange={handleChange}  class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search any food" required/>
                        <button type="submit" onClick={()=>LoadData(savesearchValue)} class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TopSection;