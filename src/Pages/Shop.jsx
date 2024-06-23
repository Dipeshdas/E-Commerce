import React from 'react'
import Home from '../Components/HomePage/Home'
import { Popular } from '../Components/Popular/Popular'
import { Offers } from '../Components/Offers/Offers'
import { NewCollec } from '../Components/NewCollections/NewCollec'
import { NewsLetter } from '../Components/NewsLetter/NewsLetter'


function Shop() {
  return (
    <div>
      <Home/>
      <Popular/>
      <Offers/>
      <NewCollec/>
      <NewsLetter/>
    </div>
  )
}

export default Shop