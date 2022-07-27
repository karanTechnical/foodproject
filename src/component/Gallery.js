import React, { useState } from 'react';
import CatMenu from './TabMenu/CatMenu';

import menu from './TabMenu/menu';
import MenuItem from './TabMenu/MenuItem';






// new method es6 new Set
const allCatvalues = [...new Set(menu.map((curElem)=> curElem.category)), "all"];
console.log(allCatvalues); 


const Gallery = () => {
    const [items, setItems] = useState(menu);
    const [catItem, setCatItem]= useState(allCatvalues);

    const filterItem = (cateItem)=>{
    
      if(cateItem === "all"){
        setItems(menu);
        return;

      }

     const updateItems = menu.filter((curElem)=>{
         return curElem.category === cateItem;
     })
     setItems(updateItems);
    }
  return (
    <>
    <h1  className='mt-5 text-center main-heading'>Order Your Favourite Dish</h1>
    <hr/>
     {/* our menu lis  item section */}

           <CatMenu filterItem= {filterItem} catItem= {catItem}/>

       {/* my main item section */}

      <MenuItem items = {items}/>



      
    </>
  );
}

export default Gallery;
