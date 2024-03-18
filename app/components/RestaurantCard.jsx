import React from 'react'
import DeleteBlock from './DeleteBlock'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileButton, faGlobe } from "@fortawesome/free-solid-svg-icons"

const RestaurantCard = ({ restaurant }) => {
  return (
    // <div className='border-2 border-gray-100 rounded-lg p-4 transition ease-in-out delay-100 hover:-translate-y-1 duration-500 flex flex-col justify-between'>
    <div className='relative p-8 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-200 dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-900 flex flex-col justify-between'>
        
        <div>
            <div className='absolute right-5 top-5 flex mb-1'>
                <div className="ml-auto">
                    <DeleteBlock 
                        id={restaurant._id}
                    />   
                </div>
            </div>
            <h4 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{ restaurant.nom }</h4>
            <p className='font-normal text-gray-700 dark:text-gray-400'>
                { restaurant.adresse }
            </p>

            <div>
                <FontAwesomeIcon 
                    icon={faMobileButton} 
                    className="text-green-300"
                /> <span className="text-gray-700 dark:text-gray-400 text-xs">{ restaurant.telephone }</span> 
            </div>
            <div>
                <FontAwesomeIcon 
                    icon={faGlobe} 
                    className="text-green-300"
                /> <span className="text-gray-700 dark:text-gray-400 text-xs"><a href="">{ restaurant.website }</a></span> 
            </div>
        </div>
        <div className='flex gap-2 mt-2 sm:flex-col sm:items-start'>
            <span className="inline-block items-center rounded-md bg-green-100 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-red-600/10">{ restaurant.superficie } m&sup2;</span>
            <span className="inline-block bg-gray-200 rounded-md px-2 py-1 text-xs text-gray-700">{ `${restaurant.code_postal} ${restaurant.ville}` }</span>
        </div> 
    </div>
  )
}

export default RestaurantCard