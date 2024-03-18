import React from 'react'
import RestaurantCard from './RestaurantCard'

const RestaurantPage = ({ restaurants }) => {
  return (
    <div className="grid xl:grid-cols-4 xl:gap-4 lg:grid-cols-2 sm:grid-cols-1 gap-2">
      {restaurants
      .map((restaurant, _index) => (
        <RestaurantCard 
          id={_index}
          key={_index}
          restaurant={restaurant}
        />
      ))}
    </div>
  )
}

export default RestaurantPage