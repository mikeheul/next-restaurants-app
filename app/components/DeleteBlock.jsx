"use client";

import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRouter } from "next/navigation"

const DeleteBlock = ({ id }) => {

  const router = useRouter();

  const deleteRestaurant = async () => {
    const res = await fetch(`http://localhost:3000/api/Restaurants/${id}`, {
      method: "DELETE"
    });

    if(res.ok){
      router.refresh();
    }
    
  }

  return (
    <FontAwesomeIcon 
        icon={faXmark} 
        className="text-red-400 hover:cursor-pointer hover:text-red-300"
        onClick={deleteRestaurant}
    />
  )
}

export default DeleteBlock