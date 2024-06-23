import React from 'react'
import './NewCollec.css'
import new_collection from '../Assests/NewCollections'
import { Item } from '../Item/Item'

export const NewCollec = () => {
  return (
    <div className='new-collections'>

        <h1>NEW COLLECTIONS</h1>
        <hr />

        <div className="collections">
            {
                new_collection.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })
            
            }
        </div>

    </div>
  )
}
