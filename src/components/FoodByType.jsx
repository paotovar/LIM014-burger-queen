import React from 'react';
import PropTypes from 'prop-types';



const BtnSelectFood=({price,name,id},index,addPropertiesToOrder)=>(
<div key={id} className="">
    <button type="button" 
    className=""
    onclick={()=>addPropertiesToOrder(
        price,
        name,
        id,
    )}
    >

        <span>
        S/{price}
        </span>
        <span className="">
        {name}
        </span>
    </button>
</div>
);

export const BreakfastView=({breakfastData,addPropertiesToOrder})=>{
    const arrView=breakfastData.map((obj,index)=>BtnSelectFood(
        obj,
        index,
        addPropertiesToOrder,
    )
    );
  return(
      <div>
          {arrView}
      </div>

  )

};

export const MenuView=({menuData,addPropertiesToOrder})=>{
    const arrView=menuData.map((obj,index)=>
    BtnSelectFood(
        obj,
        index,
        addPropertiesToOrder,
    )
    );
    return(
        <div>
            {arrView}
        </div>
    )
};

export const DrinksView=({drinksData,addPropertiesToOrder})=>{
    const arrView=drinksData.map((obj,index)=>
    BtnSelectFood(
      obj,
      index,
      addPropertiesToOrder,
    )
    );
    return(
        <div>
            {arrView}
        </div>
    )
};

BtnSelectFood.propTypes={
    price:PropTypes.number.isRequired,
    name:PropTypes.string.isRequired,
    id:PropTypes.string.isRequired,
};

MenuView.propTypes={
    menuData:PropTypes.arrayOf.isRequired,
    addPropertiesToOrder:PropTypes.func.isRequired,
};

DrinksView.propTypes={
    drinksData:PropTypes.arrayOf.isRequired,
    addPropertiesToOrder:PropTypes.func.isRequired,
};

