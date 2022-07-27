
import React from 'react';




const CatMenu = ({filterItem, catItem}) => {
  return (
    <>
         <div className='menu-tabs container' >
        <div className='menu-tabs d-flex justify-content-around'>
   
   {
    catItem.map((curElem, index) =>{
        return <button className='btn btn-warning'key={index} onClick={()=>filterItem(curElem)}>{curElem}</button>
    })
   }

        {/* <button className='btn btn-warning' onClick={()=>filterItem('BreakFast')}>BreakFast</button>
        <button className='btn btn-primary'onClick={()=>filterItem('Lunch')}>Lunch</button>
        <button className='btn btn-secondary'onClick={()=>filterItem('Evening')}>Evening</button>
        <button className='btn btn-success'onClick={()=>filterItem('Dinner')}>Dinner</button> */}
        {/* <button className='btn btn-info'onClick={()=>setItems(menu)}>All</button> */}

        </div>
    </div>
      
    </>
  );
}

export default CatMenu;
